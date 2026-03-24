import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function GovernmentID({ navigation }) {

  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>Upload Government ID</Text>

      {/* ID UPLOAD */}
      <Text style={styles.label}>Upload ID</Text>
      <TouchableOpacity style={styles.uploadBox}>
        <Text style={styles.uploadText}>Upload ID File</Text>
      </TouchableOpacity>

      {/* PROFILE PHOTO */}
      <Text style={styles.label}>Upload Profile Photo</Text>
      <TouchableOpacity style={styles.uploadBox}>
        <Text style={styles.uploadText}>Upload Photo</Text>
      </TouchableOpacity>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LocationPermission')}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  label: {
    fontWeight: '600',
    marginBottom: 10,
  },

  uploadBox: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 15,
    padding: 40,
    alignItems: 'center',
    marginBottom: 20,
  },

  uploadText: {
    color: '#888',
  },

  button: {
    backgroundColor: '#ff8c00',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});