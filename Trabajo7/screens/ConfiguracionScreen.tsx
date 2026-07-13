import { View, Text, StyleSheet } from "react-native";

export default function ConfiguracionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configuración</Text>

      <Text style={styles.texto}>
        Configuración de la aplicación
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