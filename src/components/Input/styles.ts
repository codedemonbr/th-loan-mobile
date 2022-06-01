import { TextInputProps } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Label = styled.Text`
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

interface InputStyledProps extends TextInputProps {}

export const InputStyled = styled.TextInput<InputStyledProps>`
    margin: 10px 0;
    padding: 10px;
    background: ${colors.gray[150]};
    border-radius: 5px;
    border: 1px solid ${colors.gray[350]};
`;
