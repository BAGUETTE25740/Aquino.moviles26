import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import DrawerNavigator from "./navigation/DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!autenticado ? (
          <Stack.Screen name="Login">
            {() => (
              <LoginScreen
                onLogin={() => setAutenticado(true)}
              />
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="Principal"
            component={DrawerNavigator}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}