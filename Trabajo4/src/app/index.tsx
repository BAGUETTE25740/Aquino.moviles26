import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function App() {

  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.titulo}>
          Iniciar Sesión
        </Text>

        <Text style={styles.subtitulo}>
          Completá los datos
        </Text>

        <Text style={styles.label}>Nombre</Text>

        <TextInput
          style={styles.input}
          placeholder="Ingresá tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Contraseña</Text>

        <View style={styles.passwordContainer}>

          <TextInput
            style={styles.passwordInput}
            placeholder="Ingresá tu contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!mostrarPassword}
          />

          <TouchableOpacity
            onPress={() => setMostrarPassword(!mostrarPassword)}
          >
            <Text style={styles.ojo}>
              {mostrarPassword ? '🌑' : '🌕'}
            </Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textoBoton}>
            Ingresar
          </Text>
        </TouchableOpacity>

        {
          nombre !== '' && password !== '' && (
            <Text style={styles.bienvenida}>
              ¡Hola, {nombre}!
            </Text>
          )
        }

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF4FF',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1565C0',
  },

  subtitulo: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 25,
  },

  label: {
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#BBB',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FFF',
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BBB',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },

  ojo: {
    fontSize: 22,
    marginLeft: 10,
  },

  boton: {
    marginTop: 25,
    backgroundColor: '#1565C0',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoBoton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  bienvenida: {
    marginTop: 20,
    textAlign: 'center',
    color: '#2E7D32',
    fontWeight: 'bold',
    fontSize: 18,
  }

});