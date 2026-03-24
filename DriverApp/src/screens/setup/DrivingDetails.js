import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DrivingDetails({ navigation }) {

  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>Upload Driving License</Text>

      {/* INSTRUCTIONS */}
      <Text style={styles.info}>
        Please make sure the photo is clear and readable
      </Text>

      <Text style={styles.info}>
        Accepted formats: JPG, PNG, PDF
      </Text>

      <Text style={styles.info}>
        Upload both front and back side
      </Text>

      {/* UPLOAD BOX */}
      <TouchableOpacity style={styles.uploadBox}>
        <Text style={styles.uploadText}>Upload File</Text>
      </TouchableOpacity>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BankDetails')}
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
    marginBottom: 15,
  },

  info: {
    color: '#666',
    marginBottom: 5,
  },

  uploadBox: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 15,
    padding: 50,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },

  uploadText: {
    color: '#888',
  },

  button: {
    backgroundColor: '#ff8c00',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});