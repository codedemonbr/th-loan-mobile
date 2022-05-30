import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Dashboard } from "../screens/Dashboard";
import { Loans } from "../screens/Loans";

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Dashboard} />
                <Stack.Screen name="Loans" component={Loans} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { AppRoutes };

export default AppRoutes;