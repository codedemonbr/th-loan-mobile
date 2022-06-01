import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text } from "react-native";
import Logo from "../../assets/images/logo/logo.png";
import { Button } from "../../components/Button";
import { Cards } from "../../components/Cards";
import Loading from "../../components/Loading";
import { LoanCard } from "../../components/LoanCard";
import { useLoans } from "../../hooks/useLoans";
import {
    CardsContainer,
    Container,
    Img,
    ImgContainer,
    InferiorContent,
    ItemsCounter,
    ListTitle,
    ListTitleContainer,
    SuperiorContent,
} from "./styles";

const Dashboard: React.FC = () => {
    const { loans, isLoading } = useLoans();
    
    return (
        <>
            {true && (
                <Container>
                    {isLoading && <Loading />}
                    <SuperiorContent>
                        <ImgContainer
                            
                        >
                            <Img source={Logo} />
                        </ImgContainer>
                        <Button label="Novo Empréstimo" />
                    </SuperiorContent>

                    <CardsContainer horizontal>
                        <Cards title="Limite" />
                        <Cards title="Limite Usado" />
                        <Cards title="Limite Disponível" />
                    </CardsContainer>

                    <InferiorContent>
                        <ListTitleContainer>
                            <ListTitle>Listagem</ListTitle>
                            <ItemsCounter>
                                {loans.length > 1
                                    ? `${loans.length} itens`
                                    : `${loans.length} item`}
                            </ItemsCounter>
                        </ListTitleContainer>
                        {loans ? (
                            loans.map((loan) => (
                                <LoanCard key={loan.id} loan={loan} />
                            ))
                        ) : (
                            <Text>
                                Você ainda não tem empréstimos contratados
                            </Text>
                        )}
                    </InferiorContent>
                </Container>
            )}
        </>
    );
};

export { Dashboard };
