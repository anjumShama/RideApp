import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        HI! Welcome back, you’ve been missed
      </Text>

      {/* EMAIL */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="example@gmail.com"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      {/* PASSWORD */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="xyz123"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      {/* FORGOT */}
      <Text
        style={styles.forgot}
        onPress={() => navigation.navigate('NewPassword')}
      >
        Forgot Password?
      </Text>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OTPVerify')}
      >
        <Text style={styles.buttonText}>Sign in</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },

  subtitle: {
    color: '#aaa',
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
    marginBottom: 15,

    // SHADOW (FIGMA STYLE)
    elevation: 5,
  },

  forgot: {
    color: '#ff8c00',
    textAlign: 'right',
    marginBottom: 30,
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