import React from "react";
import { Container, ModalContent } from "./styles";

interface ModalProps {
    disableCloseButton?: boolean;
    children: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ children, disableCloseButton }) => {
    return (
        <Container isShow={true}>
            <ModalContent>{children}</ModalContent>
        </Container>
    );
};

export { Modal };
