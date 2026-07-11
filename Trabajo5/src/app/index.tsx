import React, { useEffect, useState } from 'react';
import {View, Text, ActivityIndicator, FlatList, StyleSheet} from 'react-native';

interface Usuario {
  id: number;
  name: string;
  email: string;
}

export default function App() {

  // Estado para guardar usuarios
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // Estado de carga
  const [loading, setLoading] = useState(true);

  // Estado de error
  const [error, setError] = useState<string | null>(null);

  // useEffect se ejecuta al iniciar la app
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())

      .then(json => {
        console.log(json);

        setUsuarios(json);
        setLoading(false);
      })

      .catch(err => {
        console.error('Error:', err);

        setError('Hubo un error al cargar los datos');
        setLoading(false);
      });

  }, []);

  // Mientras carga
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Cargando usuarios...</Text>
      </View>
    );
  }

  // Si ocurre error
  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  // Pantalla principal
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Lista de usuarios
      </Text>

      <FlatList
        data={usuarios}

        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item }) => (

          <View style={styles.card}>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.name.split(' ').map(p => p[0]).join('').slice(0,2)}
              </Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.nombre}>
                {item.name}
              </Text>

              <Text style={styles.email}>
                {item.email}
              </Text>
            </View>

          </View>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',

    shadowOffset: {

      width: 0,
      height: 2,
    },

    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#4F8EF7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  avatarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  info: {
    flex: 1,
  },

  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },

  email: {
    marginTop: 3,
    fontSize: 15,
    color: '#666',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});