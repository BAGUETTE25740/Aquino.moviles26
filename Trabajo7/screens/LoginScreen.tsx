import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  onLogin: () => void;
};

export default function LoginScreen({ onLogin }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>App Navegación Avanzada</Text>

      <Text style={styles.subtitulo}>
        Iniciá sesión para continuar
      </Text>

      <Pressable style={styles.boton} onPress={onLogin}>
        <Text style={styles.textoBoton}>Iniciar sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F6F9",
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 15,
  },

  subtitulo: {
    fontSize: 18,
    color: "#666",
    marginBottom: 40,
  },

  boton: {
    backgroundColor: "#1976D2",
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 10,
  },

  textoBoton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});