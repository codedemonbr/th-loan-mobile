import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import ImgBack from "../../assets/images/arrow-left/arrow-left.png";
import ImgLogo from "../../assets/images/logo/logo.png";
import Loading from "../../components/Loading";
import ParcelCard from "../../components/ParcelCard";
import { useLoans } from "../../hooks/useLoans";
import localApi from "../../services/localApi";
import {
    BackContainer,
    BackText,
    Container,
    Content,
    Img,
    InferiorContent,
    LogoContainer,
    Message,
    SuperiorContent,
} from "./styles";

interface IParcela {
    id: string;
    parcelaNumero: number;
    status: boolean;
    valorParcela: number;
    dataPagamento: string;
}

interface ILoanDTO {
    id: string;
    primeiraParcela: string;
    qtdParcelas: number;
    valor: number;
    parcelas: IParcela[];
}

const Loans: React.FC = () => {
    const { goBack } = useNavigation();

    const { params } = useRoute();
    //@ts-ignore
    const { id } = params;

    const [loan, setLoan] = useState<ILoanDTO>({} as ILoanDTO);

    const { isLoading, setIsLoading } = useLoans();

    const handleGetLoanDetails = useCallback(async () => {
        try {
            setIsLoading(true);
            const { data } = await localApi.get(`/loans/${id}`);

            setLoan(data[0]);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }, [id]);

    const handleUpdateStateClientSide = useCallback(
        (status: boolean, idParcel: string) => {
            let { parcelas } = loan;

            const modifiedParcel = {
                ...parcelas.filter((parcel) => parcel.id === idParcel)[0],
                status,
            };

            /** updating array parcels */
            let newParcels = parcelas.map((parcel) => {
                if (parcel.id === idParcel) {
                    return modifiedParcel;
                }
                return parcel;
            });

            let newLoan = { ...loan, parcelas: newParcels };

            setLoan(newLoan);
        },
        [loan]
    );

    useEffect(() => {
        handleGetLoanDetails();
    }, [handleGetLoanDetails]);

    return (
        <Container>
            <SuperiorContent>
                <BackContainer
                    onPress={() => {
                        goBack();
                    }}
                >
                    <Img source={ImgBack}></Img>
                    <BackText>Voltar</BackText>
                </BackContainer>
                <LogoContainer>
                    <Img source={ImgLogo}></Img>
                </LogoContainer>
            </SuperiorContent>
            <InferiorContent>
                {isLoading && <Loading />}
                {!!loan && !!loan.parcelas ? (
                    loan.parcelas.map((parcel) => (
                        <ParcelCard
                            key={parcel.id}
                            parcel={parcel}
                            id={id}
                            updateState={handleUpdateStateClientSide}
                        />
                    ))
                ) : (
                    <Content>
                        <Message>Não há dados para exibir</Message>
                    </Content>
                )}
            </InferiorContent>
        </Container>
    );
};

export { Loans };
