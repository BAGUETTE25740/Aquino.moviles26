import { View, Text, StyleSheet } from "react-native";

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inicio</Text>

      <Text style={styles.texto}>
        Bienvenido a nuestra aplicación
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 10,
  },

  texto: {
    fontSize: 18,
  },
});