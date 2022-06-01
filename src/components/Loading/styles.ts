import { Dimensions, Platform } from "react-native";
import styled, { css } from "styled-components/native";

const StylingIOS = css`
    height: ${Dimensions.get("window").height}px;
    width: ${Dimensions.get("window").width}px;
`;

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);

    width: 100%;
    height: 100%;
    top: 0;

    z-index: 10;

    position: absolute;

    ${Platform.OS === "ios" && StylingIOS}
`;
