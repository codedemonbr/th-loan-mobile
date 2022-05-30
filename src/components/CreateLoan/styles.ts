import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 450px;
    padding: 0 24px;
    /* border: 1px solid black; */
`;

export const TitleContainer = styled.View`
    width: 100%;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: ${colors.gray[500]};
`;

export const TextInput = styled.TextInput`
    margin: 10px 0;
    padding: 10px;
    background: ${colors.gray[150]};
    border-radius: 5px;
    border: 1px solid ${colors.gray[350]};
`;
