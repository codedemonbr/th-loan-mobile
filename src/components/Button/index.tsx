import React from "react";
import { Container, Label } from "./styles";

interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
        <Container>
            <Label>{label}</Label>
        </Container>
    );
};

export { Button };
