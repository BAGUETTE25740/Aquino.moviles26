import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {

  const pelicula = {
    titulo: "Interstellar",
    anio: 2014,
    genero: "Ciencia ficción",
  };

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>
          App Películas
        </Text>

        <Text style={styles.subtitle}>
          Descubrí información sobre tus películas favoritas.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("Pelicula", {
              datos: pelicula,
            })
          }
        >
          <Text style={styles.buttonText}>
            Ver Película
          </Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate("Contacto")}
        >
          <Text style={styles.buttonText}>
            Contacto
          </Text>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#F3F6FA",
padding:20
},

card:{
width:"100%",
maxWidth:350,
backgroundColor:"white",
borderRadius:18,
padding:30,
elevation:6,
shadowColor:"#000",
shadowOpacity:0.15,
shadowRadius:10,
shadowOffset:{width:0,height:5},
alignItems:"center"
},

title:{
fontSize:30,
fontWeight:"bold",
color:"#222"
},

subtitle:{
fontSize:16,
color:"#666",
textAlign:"center",
marginTop:10,
marginBottom:35
},

button:{
width:"100%",
backgroundColor:"#1976D2",
paddingVertical:15,
borderRadius:12,
marginVertical:8,
alignItems:"center"
},

secondaryButton:{
backgroundColor:"#4CAF50"
},

buttonText:{
color:"white",
fontWeight:"bold",
fontSize:17
}

});