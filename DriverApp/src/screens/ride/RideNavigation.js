import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function RideNavigation({ navigation }) {

  return (
    <View style={styles.container}>

      {/* MAP AREA */}
      <View style={styles.map}>
        <Text style={styles.mapText}>Map View</Text>
      </View>

      {/* BOTTOM CARD */}
      <View style={styles.card}>

        <Text style={styles.title}>Navigate to Pickup</Text>

        <Text style={styles.text}>📍 MG Road</Text>
        <Text style={styles.text}>🏁 Airport</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RideOTP')}
        >
          <Text style={styles.buttonText}>Arrived</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  map: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mapText: {
    color: '#666',
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    // shadow
    elevation: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    color: '#444',
    marginBottom: 5,
  },

  button: {
    backgroundColor: '#ff8c00',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});