import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function ChangePassword({ navigation }) {
  const [secure1, setSecure1] = useState(true);
  const [secure2, setSecure2] = useState(true);

  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>Change Password</Text>

      <Text style={styles.subtitle}>
        Your new password must be different from previously used passwords
      </Text>

      {/* CURRENT PASSWORD */}
      <Text style={styles.label}>Current Password</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* FORGOT PASSWORD */}
      <Text style={styles.forgot}>Forgot Password?</Text>

      {/* NEW PASSWORD */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          secureTextEntry={secure1}
        />
        <TouchableOpacity onPress={() => setSecure1(!secure1)}>
          <Icon name={secure1 ? 'eye-off' : 'eye'} size={20} color="#333" />
        </TouchableOpacity>
      </View>

      {/* CONFIRM PASSWORD */}
      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          secureTextEntry={secure2}
        />
        <TouchableOpacity onPress={() => setSecure2(!secure2)}>
          <Icon name={secure2 ? 'eye-off' : 'eye'} size={20} color="#333" />
        </TouchableOpacity>
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Earning')}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    marginTop: 10,
    color: '#999',
    fontSize: 13,
    paddingHorizontal: 20,
    lineHeight: 18,
  },

  label: {
    marginTop: 25,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },

  inputBox: {
    height: 50,
    borderRadius: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,

    // Android shadow
    elevation: 5,
  },

  input: {
    flex: 1,
    fontSize: 14,
  },

  forgot: {
    textAlign: 'right',
    marginTop: 8,
    color: '#ff8c00',
    textDecorationLine: 'underline',
    fontSize: 13,
  },

  button: {
    marginTop: 40,
    backgroundColor: '#ff8c00',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});