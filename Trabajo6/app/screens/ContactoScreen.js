import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ContactoScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>
          Contacto
        </Text>

        <Text style={styles.item}>
          📧 apppeliculas@gmail.com
        </Text>

        <Text style={styles.item}>
          📱 +54 11 5555-5555
        </Text>

        <Text style={styles.item}>
          📍 Buenos Aires, Argentina
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>
            Volver al Inicio
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
fontSize:28,
fontWeight:"bold",
color:"#222",
marginBottom:25
},

item:{
fontSize:17,
marginVertical:8,
color:"#444",
alignSelf:"flex-start"
},

button:{
marginTop:35,
width:"100%",
backgroundColor:"#1976D2",
paddingVertical:15,
borderRadius:12,
alignItems:"center"
},

buttonText:{
color:"white",
fontWeight:"bold",
fontSize:17
}

});