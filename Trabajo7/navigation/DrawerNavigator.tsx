import { createDrawerNavigator } from "@react-navigation/drawer";

import TabsNavigator from "./TabsNavigator";

import AcercaScreen from "../screens/AcercaScreen";
import SalirScreen from "../screens/SalirScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1976D2",
        },

        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={TabsNavigator}
        options={{
            title: "Aplicacion de React Native",
        }}
      />

      <Drawer.Screen
        name="Acerca de"
        component={AcercaScreen}
      />

      <Drawer.Screen
        name="Salir"
        component={SalirScreen}
      />
    </Drawer.Navigator>
  );
}