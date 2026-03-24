import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function LocationPermission({ navigation }) {

  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>Enable Location Access</Text>

      {/* DESCRIPTION */}
      <Text style={styles.desc}>
        We need your location to find rides near you
      </Text>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Allow Location Access</Text>
      </TouchableOpacity>

      {/* OPTIONAL BUTTON */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.skip}>Search for Ride</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  desc: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#ff8c00',
    padding: 15,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  skip: {
    marginTop: 15,
    color: '#888',
  },
});