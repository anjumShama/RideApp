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

      {/* TOP */}
      <View style={styles.top}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          HI! Welcome back, you’ve been missed
        </Text>
      </View>

      {/* FORM */}
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="example@gmail.com"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="xyz123"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <Text
          style={styles.forgot}
          onPress={() => navigation.navigate('NewPassword')}
        >
          Forgot Password?
        </Text>
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Sign in</Text>
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
    color: '#aaa',
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

  forgot: {
    color: '#ff8c00',
    textAlign: 'right',
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