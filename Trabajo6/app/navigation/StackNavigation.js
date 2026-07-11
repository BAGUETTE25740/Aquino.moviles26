import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import PeliculaScreen from "../screens/PeliculaScreen";
import ContactoScreen from "../screens/ContactoScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
          headerStyle: {
            backgroundColor: "#1976D2",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Stack.Screen
        name="Pelicula"
        component={PeliculaScreen}
        options={{
          title: "Detalle de Película",
          headerStyle: {
            backgroundColor: "#1976D2",
          },
          headerTintColor: "#fff",
        }}
      />

      <Stack.Screen
        name="Contacto"
        component={ContactoScreen}
        options={{
          title: "Contacto",
          headerStyle: {
            backgroundColor: "#1976D2",
          },
          headerTintColor: "#fff",
        }}
      />

    </Stack.Navigator>
  );
}