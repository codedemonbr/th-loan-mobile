import { StatusBar } from "expo-status-bar";
import React from "react";
import { LoadingProvider } from "./src/hooks/useLoading";
import { LoansProvider } from "./src/hooks/useLoans";
import { ModalProvider } from "./src/hooks/useModal";
import { Dashboard } from "./src/screens/Dashboard";

export default function App() {
    return (
        <LoadingProvider>
            <LoansProvider>
                <ModalProvider>
                    <Dashboard />
                    {/* <AppRoutes /> */}
                    <StatusBar style="light" />
                </ModalProvider>
            </LoansProvider>
        </LoadingProvider>
    );
}
