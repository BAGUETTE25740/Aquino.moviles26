import { useContext, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

import { AuthContext } from "@/context/AuthContext";
import { TemaContext } from "@/context/TemaContext";

export default function Home() {
  const { usuario, logout } = useContext(AuthContext);
  const { tema, alternarTema } = useContext(TemaContext);

  useEffect(() => {
    if (!usuario) {
      router.replace("/login");
    }
  }, [usuario]);

  if (!usuario) return null;

  const oscuro = tema === "oscuro";

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: oscuro ? "#000000" : "#F2F4F8",
        },
      ]}
    >
      <View
        style={[
          styles.card,
          {
            backgroundColor: oscuro ? "#181818" : "#FFFFFF",
          },
        ]}
      >
        <Text
          style={[
            styles.titulo,
            {
              color: oscuro ? "#FFFFFF" : "#000000",
            },
          ]}
        >
          Bienvenida, {usuario.nombre}
        </Text>

        <Text
          style={[
            styles.tema,
            {
              color: oscuro ? "#CFCFCF" : "#555555",
            },
          ]}
        >
          Tema actual: {tema}
        </Text>

        <Pressable
          style={[styles.boton, { backgroundColor: "#2563EB" }]}
          onPress={alternarTema}
        >
          <Text style={styles.textoBoton}>Cambiar tema</Text>
        </Pressable>

        <Pressable
          style={[styles.boton, { backgroundColor: "#DC2626" }]}
          onPress={() => {
            logout();
            router.replace("/login");
          }}
        >
          <Text style={styles.textoBoton}>Cerrar sesión</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 360,
    borderRadius: 18,
    padding: 25,
    elevation: 6,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },

  tema: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },

  boton: {
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },

  textoBoton: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
});