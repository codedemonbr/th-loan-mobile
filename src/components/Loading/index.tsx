import React from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

const Loading: React.FC = () => (
    <Container>
        <ActivityIndicator size="large" color={"#F00"} />
    </Container>
);

export default Loading;
