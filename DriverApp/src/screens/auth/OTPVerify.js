import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function OTP({ navigation }) {
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>Verify Code</Text>

      <Text style={styles.subtitle}>
        Please enter the code we just sent to email
      </Text>

      <Text style={styles.email}>example@email.com</Text>

      {/* OTP BOXES */}
      <View style={styles.otpContainer}>
        {code.map((item, index) => (
          <TextInput
            key={index}
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
            value={item}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      {/* RESEND */}
      <Text style={styles.resend}>
        Don’t receive OTP?{' '}
        <Text style={styles.resendLink}>Resend code</Text>
      </Text>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const enteredCode = code.join('');
          if (enteredCode === '1234') {
            navigation.navigate('ChangePassword');
          } else {
            alert('Invalid OTP. Use 1234 as dummy OTP for this demo.');
          }
        }}
      >
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },

  subtitle: {
    textAlign: 'center',
    marginTop: 10,
    color: '#666',
  },

  email: {
    color: '#ff8c00',
    marginBottom: 20,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },

  box: {
    width: 50,
    height: 50,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',

    // shadow
    elevation: 5,
  },

  resend: {
    marginBottom: 20,
    color: '#666',
  },

  resendLink: {
    textDecorationLine: 'underline',
    color: '#000',
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
});