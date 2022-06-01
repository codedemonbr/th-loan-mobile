import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Dashboard } from "../screens/Dashboard";
import { Loans } from "../screens/Loans";

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
    return (
        // @ts-ignore
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Dashboard} />
            <Stack.Screen name="Loans" component={Loans} />
        </Stack.Navigator>
    );
};

export { AppRoutes };

export default AppRoutes;
