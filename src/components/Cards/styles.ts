import styled from "styled-components/native";
import { colors } from "../../styles/colors";

const iconSize = 40;

interface CardsProps {
    title: string;
}

export const Container = styled.View<CardsProps>`
    width: 300px;
    height: 200px;
    border-radius: 5px;
    background: white;
    margin-left: 16px;
    margin-bottom: 2px;
    margin-top: 2px;
    background: ${(props) =>
        props.title === "Limite Disponível" ? `${colors.green[300]}` : "white"};
`;

export const ContentTop = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    margin: 18px 23px 0 23px;
`;

export const Title = styled.Text<CardsProps>`
    font-weight: 400;
    font-size: 14px;
    color: ${(props) =>
        props.title === "Limite Disponível" ? "white" : "black"};
`;

export const Amount = styled.Text<CardsProps>`
    font-weight: 500;
    font-size: 30px;
    color: ${(props) =>
        props.title === "Limite Disponível" ? "white" : "black"};
`;

export const IconContainer = styled.View`
    width: ${iconSize}px;
    height: ${iconSize}px;
    align-items: center;
    justify-content: center;
`;

export const SubTitle = styled.Text<CardsProps>`
    font-size: 12px;
    font-weight: 400;
    color: ${colors.gray[300]};
    color: ${(props) =>
        props.title === "Limite Disponível" ? "white" : `${colors.gray[300]}`};
`;

export const IconImg = styled.Image``;

export const ContentBellow = styled.View`
    flex: 1;
    margin: 0 23px 18px 23px;
`;
