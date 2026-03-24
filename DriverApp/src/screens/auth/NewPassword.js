import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function NewPassword({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>New Password</Text>

      {/* PASSWORD */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      {/* CONFIRM PASSWORD */}
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        placeholder="Confirm password"
        secureTextEntry
        style={styles.input}
        value={confirm}
        onChangeText={setConfirm}
      />

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Welcome')}
      >
        <Text style={styles.buttonText}>Save</Text>
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
    marginTop: 40,
    marginBottom: 30,
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
    elevation: 5,
  },

  button: {
    backgroundColor: '#ff8c00',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});