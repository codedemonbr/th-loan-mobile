import React, { useCallback } from "react";
import { useModal } from "../../hooks/useModal";
import { CreateLoan } from "../CreateLoan";
import { Container, Label } from "./styles";

interface ButtonProps {
    label: string;
}
const Button: React.FC<ButtonProps> = ({ label }) => {
    const { openModal, closeModal } = useModal();

    const handleOpenModal = useCallback(() => {
        openModal(<CreateLoan  />);
    }, []);
    return (
        <Container onPress={handleOpenModal}>
            <Label>{label}</Label>
        </Container>
    );
};

export { Button };
