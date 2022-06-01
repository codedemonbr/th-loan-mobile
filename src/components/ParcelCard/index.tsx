import React, { useCallback } from "react";
import { useLoans } from "../../hooks/useLoans";
import localApi from "../../services/localApi";
import { formatCurrency } from "../../utils/formatCurrency";
import { Container, Content, Date, DateContent, Title, Value } from "./styles";

interface ParcelCardProps {
    parcel: {
        id: string;
        parcelaNumero: number;
        valorParcela: number;
        status: boolean;
        dataPagamento: string;
    };
    updateState: (status: boolean, idParcel: string) => void;
    id: string;
}

const ParcelCard: React.FC<ParcelCardProps> = ({ parcel, updateState, id }) => {
    const { setIsLoading } = useLoans();
    const handlePayBill = useCallback(
        async (idParcel: string, status: boolean) => {
            try {
                setIsLoading(true);
                const obj = { idParcel, status };
                await localApi.patch(`/loans/pay/${id}`, obj);

                updateState(status, idParcel);

                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        },
        [updateState, id]
    );

    return (
        <>
            <Container
                isActive={parcel.status}
                onPress={() => handlePayBill(parcel.id, !parcel.status)}
            >
                <Content>
                    <Title>Parcela</Title>
                    <Title>#{parcel.parcelaNumero}</Title>
                </Content>

                <Content>
                    <Value>{formatCurrency(parcel.valorParcela)}</Value>
                    <Value>{parcel.status ? "Pago" : "Pagar"}</Value>
                </Content>

                <DateContent>
                    <Date>Data do Vencimento</Date>
                    <Date>{parcel.dataPagamento}</Date>
                </DateContent>
            </Container>
        </>
    );
};

export default ParcelCard;
