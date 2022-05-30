import React, { FC, useCallback, useEffect, useState } from "react";
import IncomeIcon from "../../assets/images/income/income.png";
import TotalIcon from "../../assets/images/total/total.png";
import WithdrawIcon from "../../assets/images/withdraw/withdraw.png";
import { useLoans } from "../../hooks/useLoans";
import { formatCurrency } from "../../utils/formatCurrency";
import {
    Amount,
    Container,
    ContentBellow,
    ContentTop,
    IconContainer,
    IconImg,
    SubTitle,
    Title,
} from "./styles";

interface CardsProps {
    title: string;
}

const Cards: FC<CardsProps> = ({ title }) => {
    const { limits } = useLoans();
    const [value, setValue] = useState(formatCurrency(0));
    const [icon, setIcon] = useState(TotalIcon);

    const handleGetValue = useCallback(() => {
        switch (title) {
            case "Limite":
                setValue(formatCurrency(limits.limit));
                setIcon(IncomeIcon);
                break;

            case "Limite Usado":
                setValue(formatCurrency(limits.usedLimit));
                setIcon(WithdrawIcon);
                break;

            case "Limite Disponível":
            default:
                setValue(formatCurrency(limits.availableLimit));
                setIcon(TotalIcon);
                break;
        }
    }, [limits]);

    useEffect(() => {
        if (limits.availableLimit) {
            handleGetValue();
        }
    }, [limits.availableLimit]);
    return (
        <>
            <Container title={title}>
                <ContentTop>
                    <Title title={title}>{title}</Title>
                    <IconContainer>
                        <IconImg source={icon} />
                    </IconContainer>
                </ContentTop>
                <ContentBellow>
                    <Amount title={title}>{value}</Amount>
                    <SubTitle title={title}>
                        Última entrada dia 13 de abril
                    </SubTitle>
                </ContentBellow>
            </Container>
        </>
    );
};

export { Cards };
