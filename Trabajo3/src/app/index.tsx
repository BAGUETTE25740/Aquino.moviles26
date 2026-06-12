import { Background } from "expo-router/build/react-navigation";
import {useState} from "react";
import {StyleSheet,View,Pressable} from "react-native";

export default function App(){
  const[activo,setActivo]=useState(false);

  return(
  <View style={styles.container}>
    <View style={styles.caja1}/>

    <Pressable
      onPress={()=>setActivo(!activo)}
      style={[
        styles.caja2,
        activo ? styles.cajaActiva:styles.cajaInactiva
      ]}
    />

    <View style={styles.caja3}/>
  </View>
  );  
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  caja1:{
    width: 200,
    height: 200,
    backgroundColor: '#ff0000',
  },
  caja2:{
    width: 200,
    height: 200,
  },
  caja3:{
    width: 200,
    height: 200,
    backgroundColor: '#00ff4c',
  },
  cajaActiva:{
    backgroundColor: '#000000',
  },
  cajaInactiva:{
    backgroundColor: '#ffe100',
  }
});