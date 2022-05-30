import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background: ${colors.gray[200]};
`;

export const SuperiorContent = styled.View`
    flex-direction: row;
    width: 100%;
    height: 240px;
    background: ${colors.purple[300]};
    padding-top: 60px;
    padding-right: 24px;
    padding-left: 24px;
    justify-content: space-between;
`;

export const InferiorContent = styled.ScrollView`
    width: 100%;
    background: ${colors.gray[200]};
    height: ${Dimensions.get("window").height - 240}px;
`;

export const ListTitleContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2px 24px;
`;

export const ListTitle = styled.Text`
    font-weight: 400;
    font-size: 20px;
`;

export const ItemsCounter = styled.Text`
    font-weight: 500;
    font-size: 14px;
    color: ${colors.gray[300]};
`;

export const CardsContainer = styled.ScrollView`
    margin-top: -100px;
    width: 100%;
    height: 280px;
`;

const imgSize = 40;

export const ImgContainer = styled.View`
    width: ${imgSize}px;
    height: ${imgSize}px;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.Image``;
