import { Form } from "@unform/mobile";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Container = styled.View`
    /* flex: 1; */
    width: 100%;
    height: 440px;
    padding: 0 24px;
    /* border: 1px solid black; */
`;

export const TitleContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: ${colors.gray[500]};
`;

export const TextInput = styled.TextInput`
    margin: 10px 0;
    padding: 10px;
    background: ${colors.gray[150]};
    border-radius: 5px;
    border: 1px solid ${colors.gray[350]};
`;

export const FormContainer = styled(Form)`
    padding: 10px 0;
    /* height: 500px; */
`;

export const Label = styled.Text`
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const ButtonSelector = styled.TouchableOpacity`
    margin: 10px 0;
    padding: 10px;
    background: ${colors.gray[150]};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors.gray[350]};
`;

export const Selector = styled.Text``;

export const LoanSelectorContainer = styled.ScrollView``;

const imgSize = 40;

export const ImgContainer = styled.TouchableOpacity`
    width: ${imgSize}px;
    height: ${imgSize}px;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.Image``;

export const DateSelectorContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

const dayButtonSize = 50;

interface DateSelectorProps {
    isActive: boolean;
}

export const DateSelector = styled.TouchableOpacity<DateSelectorProps>`
    width: ${dayButtonSize}px;
    height: ${dayButtonSize}px;
    margin: 15px 0;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background: ${({ isActive }) => (isActive ? "#5429CC" : "transparent")};
    border: 1px solid #5429cc;
`;

export const DateText = styled.Text`
    font-weight: bold;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    background: ${colors.green[300]};
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    color: white;
    font-weight: 500;
    font-size: 14px;
`;
