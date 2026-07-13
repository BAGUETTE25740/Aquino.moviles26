import { View, Text, StyleSheet } from "react-native";

export default function SalirScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Salir</Text>

      <Text style={styles.texto}>
        Hasta luego
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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