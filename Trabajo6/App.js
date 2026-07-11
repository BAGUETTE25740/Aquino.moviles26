import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./app/navigation/StackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}