import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ProfileSetup({ navigation }) {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>Profile</Text>

      {/* NAME */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      {/* PHONE */}
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        placeholder="Enter phone number"
        keyboardType="number-pad"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DrivingDetails')}
      >
        <Text style={styles.buttonText}>Next</Text>
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
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 25,
  },

  label: {
    fontWeight: '600',
    marginBottom: 5,
  },

  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,

    // figma shadow
    elevation: 5,
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