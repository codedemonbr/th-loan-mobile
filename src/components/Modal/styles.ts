import { Dimensions } from "react-native";
import styled from "styled-components/native";

interface ModalProps {
    isShow: boolean;
}

export const Container = styled.View<ModalProps>`
    display: ${({ isShow }) => (isShow ? "flex" : "none")};
    background: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: 2;

    height: ${Dimensions.get("window").height}px;
    width: ${Dimensions.get("window").width}px;
`;

export const ModalContent = styled.View.attrs(() => ({
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3.27,

    elevation: 8,
}))`
    flex-direction: column;
    background: white;

    align-items: center;

    width: 95%;
    /* max-width: 360px; */
    min-height: 190px;
    max-height: 90%;

    padding: 12px;

    border-radius: 10px;
    position: relative;

    margin: 10px;
`;
