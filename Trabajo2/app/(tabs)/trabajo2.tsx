import { Button, Image, ScrollView, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <ScrollView>
    <View
      style={{
        flex: 1,
        backgroundColor: "grey",
        paddingTop: 60,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 40,
          fontStyle: "italic",
          marginBottom: 10,
        }}
      >
        ¡Bienvenido a nuestra pagina!
      </Text>

      <Text
        style={{
          fontSize: 18,
          marginBottom: 30,
          color: "white",
        }}
      >
        Descripcion provisional improvisada
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 20, 
        }}
      >
        {/* CAJA 1 */}
        <View
          style={{
            width: 320,
            padding: 15,
            borderRadius: 15,
            backgroundColor: "darkgreen",
            alignItems: "center",
            marginTop: 160,
          }}
        >
          <Image
            source={{
              uri: "https://media1.tenor.com/m/wBzXX1bly3sAAAAd/subaru-natsuki-subaru.gif",
            }}
            style={{
              width: 250,
              height: 250,
              marginBottom: 15,
              borderRadius: 10,
            }}
          />

          <TextInput
            placeholder="Escribe aqui"
            style={{
              width: "100%",
              borderWidth: 1,
              padding: 10,
              backgroundColor: "white",
              marginBottom: 15,
              borderRadius: 8,
            }}
          />

          <Button
            title="Presionar"
            onPress={() => alert("Boton 1 presionado")}
            color="blue"
          />
        </View>

        {/* CAJA 2 */}
        <View
          style={{
            width: 320,
            padding: 15,
            borderRadius: 15,
            backgroundColor: "darkgreen",
            alignItems: "center",
            marginTop: 80, 
          }}
        >
          <Image
            source={{
              uri: "https://media1.tenor.com/m/wBzXX1bly3sAAAAd/subaru-natsuki-subaru.gif",
            }}
            style={{
              width: 250,
              height: 250,
              marginBottom: 15,
              borderRadius: 10,
            }}
          />

          <TextInput
            placeholder="Escribe aqui"
            style={{
              width: "100%",
              borderWidth: 1,
              padding: 10,
              backgroundColor: "white",
              marginBottom: 15,
              borderRadius: 8,
            }}
          />

          <Button
            title="Presionar"
            onPress={() => alert("Boton 2 presionado")}
            color="blue"
          />
        </View>

        {/* CAJA 3 */}
        <View
          style={{
            width: 320,
            padding: 15,
            borderRadius: 15,
            backgroundColor: "darkgreen",
            alignItems: "center",
            marginTop: 0,
          }}
        >
          <Image
            source={{
              uri: "https://media1.tenor.com/m/wBzXX1bly3sAAAAd/subaru-natsuki-subaru.gif",
            }}
            style={{
              width: 250,
              height: 250,
              marginBottom: 15,
              borderRadius: 10,
            }}
          />

          <TextInput
            placeholder="Escribe aqui"
            style={{
              width: "100%",
              borderWidth: 1,
              padding: 10,
              backgroundColor: "white",
              marginBottom: 15,
              borderRadius: 8,
            }}
          />

          <Button
            title="Presionar"
            onPress={() => alert("Boton 3 presionado")}
            color="blue"
          />
        </View>
      </View>
    </View>
    </ScrollView>
  );
}