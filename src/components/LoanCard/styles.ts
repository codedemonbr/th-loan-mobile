import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Container = styled.TouchableOpacity`
    width: ${Dimensions.get("window").width - 48}px;
    height: 128px;
    border-radius: 5px;
    margin: 4px 24px;
    background: white;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    /* align-items: space-between; */
    padding: 0 24px;
`;

export const Title = styled.Text`
    font-weight: 400;
    font-size: 14px;
    color: ${colors.gray[500]};
`;

export const Value = styled.Text`
    font-weight: 400;
    font-size: 20px;
    color: ${colors.green[400]};
`;

export const FirstDateContent = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
`;

export const FirstDate = styled.Text`
    font-weight: 400;
    font-size: 14px;
    color: ${colors.gray[300]};
`;
