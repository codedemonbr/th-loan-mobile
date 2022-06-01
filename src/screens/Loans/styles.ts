import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Container = styled.ScrollView`
    flex: 1;
`;

const purpleSize = 150;

export const SuperiorContent = styled.View`
    flex-direction: row;
    width: 100%;
    height: ${purpleSize}px;
    background: ${colors.purple[300]};
    padding-top: 60px;
    padding-right: 30px;
    padding-left: 30px;
    justify-content: space-between;
`;

export const InferiorContent = styled.ScrollView`
    width: 100%;
    background: ${colors.gray[200]};
    height: ${Dimensions.get("window").height - purpleSize}px;
`;

export const Content = styled.View`
    padding: 50px;
    align-items: center;
    justify-content: center;
`;

export const Message = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;

const imgSize = 40;

export const BackContainer = styled.TouchableOpacity`
    flex-direction: row;
    height: ${imgSize}px;
    width: ${imgSize * 1.6}px;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.View`
    height: ${imgSize}px;
    width: ${imgSize}px;

    align-items: center;
    justify-content: center;
`;

export const Img = styled.Image``;

export const BackText = styled.Text`
    color: white;
    font-size: 15px;
`;
