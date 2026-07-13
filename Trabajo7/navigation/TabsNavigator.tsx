import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import InicioScreen from "../screens/InicioScreen";
import PerfilScreen from "../screens/PerfilScreen";
import ConfiguracionScreen from "../screens/ConfiguracionScreen";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "#1976D2",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",

        tabBarActiveTintColor: "#1976D2",
        tabBarInactiveTintColor: "gray",

        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "Inicio":
              iconName = "home";
              break;
            case "Perfil":
              iconName = "person";
              break;
            default:
              iconName = "settings";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
      />

      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
      />

      <Tab.Screen
        name="Configuración"
        component={ConfiguracionScreen}
      />
    </Tab.Navigator>
  );
}