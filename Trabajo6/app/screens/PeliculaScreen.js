import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PeliculaScreen({ route, navigation }) {

  const { datos } = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>
          {datos.titulo}
        </Text>

        <View style={styles.line}/>

        <Text style={styles.label}>
          Año
        </Text>

        <Text style={styles.value}>
          {datos.anio}
        </Text>

        <Text style={styles.label}>
          Género
        </Text>

        <Text style={styles.value}>
          {datos.genero}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>
            Volver
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
marginVertical:10
},

line:{
width:"100%",
height:1,
backgroundColor:"#DDD",
marginVertical:20
},

label:{
fontSize:15,
color:"#888",
marginTop:10
},

value:{
fontSize:20,
fontWeight:"600",
color:"#1976D2"
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
fontSize:17,
fontWeight:"bold"
}

});