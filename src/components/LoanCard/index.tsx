import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import {
    Container,
    Content,
    FirstDate,
    FirstDateContent,
    Title,
    Value,
} from "./styles";

interface LoanCardProps {
    loan: {
        valor: number;
        qtdParcelas: number;
        id: string;
        primeiraParcela: string;
    };
}

const LoanCard: React.FC<LoanCardProps> = ({ loan }) => {
    return (
        <Container
            key={loan.id}
            onPress={() => console.log("you touched >>>", loan.id)}
        >
            <Content>
                <Title>Empréstimo</Title>
            </Content>

            <Content>
                <Value>{formatCurrency(loan.valor)}</Value>
            </Content>

            <FirstDateContent>
                <FirstDate>Primeira Prestação</FirstDate>
                <FirstDate>{loan.primeiraParcela}</FirstDate>
            </FirstDateContent>
        </Container>
    );
};

export { LoanCard };
