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

      {/* TOP */}
      <View style={styles.top}>
        <Text style={styles.title}>New Password</Text>
        <Text style={styles.subtitle}>
          Your new password must be different from previously used passwords
        </Text>
      </View>

      {/* FORM */}
      <View style={styles.form}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          value={confirm}
          onChangeText={setConfirm}
        />
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingTop: 60,
  },

  top: {
    alignItems: 'center',
    marginBottom: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#bbb',
    textAlign: 'center',
    marginTop: 5,
  },

  form: {
    flex: 1,
  },

  label: {
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 6,
  },

  button: {
    backgroundColor: '#ff8c00',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});