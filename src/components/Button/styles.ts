import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Container = styled.TouchableOpacity`
    width: 130px;
    height: 40px;

    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: ${colors.purple[200]};
`;

export const Label = styled.Text`
    color: white;
`;
