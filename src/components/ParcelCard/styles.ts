import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

interface ParcelCardProps {
    isActive: boolean;
}

export const Container = styled.TouchableOpacity<ParcelCardProps>`
    width: ${Dimensions.get("window").width - 48}px;
    height: 128px;
    border-radius: 5px;
    margin: 4px 24px;
    background: ${({ isActive }) =>
        isActive ? colors.green[400] : colors.red[300]};
`;

export const Content = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 24px;
`;

export const Title = styled.Text`
    font-weight: 400;
    font-size: 14px;
    color: white;
`;

export const Value = styled.Text`
    font-weight: 400;
    font-size: 20px;
    color: white;
`;

export const DateContent = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
`;

export const Date = styled.Text`
    font-weight: 400;
    font-size: 14px;
    color: white;
`;
