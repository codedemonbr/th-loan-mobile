import { FormHandles } from "@unform/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Keyboard } from "react-native";
import CloseIcon from "../../assets/images/close/close.png";
import { useLoans } from "../../hooks/useLoans";
import { useModal } from "../../hooks/useModal";
import localApi from "../../services/localApi";
import { firstParcel } from "../../utils/firstParcelDate";
import { formatCurrency } from "../../utils/formatCurrency";
import maskMonetary from "../../utils/maskMonetary";
import { unMaskMonetary } from "../../utils/unMaskMonetary";
import Input from "../Input";
import {
    ButtonSelector,
    Container,
    DateSelector,
    DateSelectorContainer,
    DateText,
    FormContainer,
    Img,
    ImgContainer,
    Label,
    LoanSelectorContainer,
    Selector,
    SubmitButton,
    SubmitText,
    Title,
    TitleContainer,
} from "./styles";

interface IInstallmentDTO {
    valorDesejado: number;
    valorParcela: string;
    qtdParcelas: number;
    taxadeJuros: number;
}

const CreateLoan: React.FC = () => {
    const bestPossibleDays = [5, 10, 15, 20, 25];
    /** States */
    const [bestDate, setBestDate] = useState(5);
    const [lastValidValue, setLastValidValue] = useState(formatCurrency(0));
    const [disableButton, setDisableButton] = useState(true);
    const [installments, setInstallments] = useState<IInstallmentDTO[]>(
        [] as IInstallmentDTO[]
    );
    const [selectedInstallment, setSelectedInstallment] =
        useState<IInstallmentDTO>({} as IInstallmentDTO);
    const [isSelectingParcel, setIsSelectingParcel] = useState(false);

    const formRef = useRef<FormHandles>(null);

    const { closeModal } = useModal();
    const { limits, createLoan, setLimits, setIsLoading } = useLoans();

    const handleSubmitForm = useCallback(
        async (data: { value: string }) => {
            try {
                const obj = {
                    valor: unMaskMonetary(data.value),
                    qtdParcelas: selectedInstallment.qtdParcelas,
                    primeiraParcela: firstParcel(bestDate),
                };

                if (unMaskMonetary(data.value) <= limits.availableLimit) {
                    setIsLoading(true);
                    await createLoan(obj);
                    setLimits({
                        ...limits,
                        availableLimit: limits.availableLimit - obj.valor,
                        usedLimit: obj.valor + limits.usedLimit,
                    });
                    setIsLoading(false);
                }
                closeModal();
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        },
        [
            bestDate,
            selectedInstallment.qtdParcelas,
            setLimits,
            createLoan,
            setIsLoading,
            closeModal,
        ]
    );

    const getFieldValue = useCallback(() => {
        const value = unMaskMonetary(formRef.current?.getFieldValue("value"));
        return value;
    }, []);

    const handleSimulate = useCallback(async () => {
        try {
            const value = unMaskMonetary(
                formRef.current?.getFieldValue("value")
            );

            if (value >= 1) {
                setIsLoading(true);
                const { data } = await localApi.get(
                    `/installments?desiredValue=${value}`
                );

                const { parcelas } = data;
                setInstallments(parcelas);
                /**using as standard value the higher number of installment */

                const higherValue = parcelas.reduce(
                    (previous: IInstallmentDTO, current: IInstallmentDTO) =>
                        previous.qtdParcelas > current.qtdParcelas
                            ? previous
                            : current
                );
                setDisableButton(false);
                setSelectedInstallment(higherValue);
                setIsLoading(false);
            } else {
                setIsLoading(false);
                setDisableButton(true);
                setSelectedInstallment({
                    ...selectedInstallment,
                    qtdParcelas: 0,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }, [
        setSelectedInstallment,
        setInstallments,
        setDisableButton,
        setIsLoading,
    ]);

    const handleChangeText = useCallback(
        (text) => {
            formRef.current?.setFieldValue("value", maskMonetary(text));

            handleSimulate();
        },
        [handleSimulate]
    );

    useEffect(() => {
        if (!formRef.current?.getFieldValue("value")) {
            formRef.current?.setFieldValue("value", lastValidValue);
        }
    }, [lastValidValue]);

    useEffect(() => {
        formRef.current?.setFieldValue("value", formatCurrency(0));
    }, []);

    return (
        <Container>
            <TitleContainer>
                <Title>Criar Empréstimo </Title>
                <ImgContainer onPress={closeModal}>
                    <Img source={CloseIcon} />
                </ImgContainer>
            </TitleContainer>

            {isSelectingParcel ? (
                <LoanSelectorContainer>
                    {!!installments &&
                        installments.map((installment) => (
                            <ButtonSelector
                                key={installment.valorParcela}
                                onPress={() => {
                                    setSelectedInstallment(installment);
                                    setIsSelectingParcel(false);
                                    setLastValidValue(
                                        formatCurrency(
                                            installment.valorDesejado
                                        )
                                    );
                                }}
                            >
                                <Selector>{`${
                                    installment.qtdParcelas
                                }x de ${formatCurrency(
                                    +installment.valorParcela
                                )} `}</Selector>
                            </ButtonSelector>
                        ))}
                </LoanSelectorContainer>
            ) : (
                <>
                    <FormContainer onSubmit={handleSubmitForm} ref={formRef}>
                        {/* valor */}

                        <Input
                            keyboardType="phone-pad"
                            name="value"
                            label="Valor:"
                            onChangeText={(text) => handleChangeText(text)}
                            maxLength={24}
                            onEndEditing={() => {
                                Keyboard.dismiss();
                            }}
                        />
                        {/* simule agora */}
                        <Label>Simule agora:</Label>
                        <ButtonSelector
                            disabled={getFieldValue() < 1}
                            onPress={() => {
                                setIsSelectingParcel(true);
                                Keyboard.dismiss();
                            }}
                        >
                            <Selector>
                                {!!selectedInstallment.qtdParcelas
                                    ? `${
                                          selectedInstallment.qtdParcelas
                                      }x de ${formatCurrency(
                                          +selectedInstallment.valorParcela
                                      )}`
                                    : "Para simular basta clicar aqui!"}
                            </Selector>
                        </ButtonSelector>
                        {/* data de vencimento */}
                        <Label>Melhor data de vencimento:</Label>
                        <DateSelectorContainer>
                            {bestPossibleDays.map((day) => (
                                <DateSelector
                                    key={day}
                                    isActive={bestDate === day}
                                    onPress={() => {
                                        setBestDate(day);
                                        Keyboard.dismiss();
                                    }}
                                >
                                    <DateText>{day}</DateText>
                                </DateSelector>
                            ))}
                        </DateSelectorContainer>
                        {/* contratar */}
                        <SubmitButton
                            disabled={disableButton}
                            onPress={() => formRef.current?.submitForm()}
                        >
                            <SubmitText>Contratar</SubmitText>
                        </SubmitButton>
                    </FormContainer>
                </>
            )}
        </Container>
    );
};

export { CreateLoan };
