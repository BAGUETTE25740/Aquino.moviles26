import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

import { AuthContext } from "@/context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);

  function iniciarSesion() {
    login("Yesica");
    router.replace("/");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Trabajo Práctico 8</Text>

        <Text style={styles.subtitulo}>
          Context API y Gestión Global del Estado
        </Text>

        <Pressable style={styles.boton} onPress={iniciarSesion}>
          <Text style={styles.textoBoton}>Iniciar sesión</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 25,
    elevation: 5,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitulo: {
    textAlign: "center",
    color: "#666",
    marginTop: 10,
    marginBottom: 30,
    fontSize: 16,
  },

  boton: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
  },

  textoBoton: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
});