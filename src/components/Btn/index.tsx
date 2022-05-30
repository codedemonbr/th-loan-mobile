import axios from "axios";
import React, { useCallback } from "react";
import { useLoading } from "../../hooks/useLoading";
import localApi from "../../services/localApi";
import { Container, TestButton, Title } from "./styles";

const Btn: React.FC = () => {
    let signal = axios.CancelToken.source();

    const { setLoading } = useLoading();

    const handleGetApiTest = useCallback(async () => {
        const start = performance.now();
        try {
            setLoading(true);
            console.log(signal);
            const { data } = await localApi.get("/teste", {
                cancelToken: signal.token,
            });
            console.log("data>>>", JSON.stringify(data));
            console.log("tempo decorrido >>>", performance.now() - start);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log("tempo decorrido >>>", performance.now() - start);

            console.log("cancelado com sucesso");
            console.log(JSON.stringify(error));
        }
    }, []);

    const handleCancelRequest = useCallback(() => {
        signal.cancel("teste");
    }, []);

    const handleCleanRequest = useCallback(() => {
        signal = axios.CancelToken.source();
    }, []);

    return (
        <>
            <Container>
                <TestButton onPress={handleGetApiTest}>
                    <Title>Teste api</Title>
                </TestButton>
                <TestButton onPress={handleCancelRequest}>
                    <Title>Cancela requisição</Title>
                </TestButton>
                <TestButton onPress={handleCleanRequest}>
                    <Title>Limpar requisição</Title>
                </TestButton>
            </Container>
        </>
    );
};

export { Btn };
