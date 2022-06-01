import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { LoadingProvider } from "./src/hooks/useLoading";
import { LoansProvider } from "./src/hooks/useLoans";
import { ModalProvider } from "./src/hooks/useModal";
import AppRoutes from "./src/routes/app.routes";

export default function App() {
    return (
        <NavigationContainer>
            <LoadingProvider>
                <LoansProvider>
                    <ModalProvider>
                        {/* <Dashboard /> */}
                        {/* <Loans /> */}
                        <AppRoutes />
                        <StatusBar style="light" />
                    </ModalProvider>
                </LoansProvider>
            </LoadingProvider>
        </NavigationContainer>
    );
}
