import { View, Text, StyleSheet } from "react-native";

export default function AcercaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acerca de</Text>

      <Text style={styles.texto}>
        Aplicación realizada por Kirian y Santos
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