import { Stack } from "expo-router";

import { AuthProvider } from "@/context/AuthContext";
import { TemaProvider } from "@/context/TemaContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <TemaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
        </Stack>
      </TemaProvider>
    </AuthProvider>
  );
}