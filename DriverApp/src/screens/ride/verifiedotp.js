import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';

export default function OTPVerify({ navigation }) {

  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#cfcfcf" barStyle="dark-content" />

      {/* FULL SHEET */}
      <View style={styles.sheet}>

        {/* HANDLE */}
        <View style={styles.handle} />

        {/* TITLE */}
        <Text style={styles.topTitle}>OTP Verification</Text>

        <Text style={styles.title}>
          Enter Esther’s OTP
        </Text>

        <Text style={styles.sub}>
          We sent a PIN to your customer's mobile number
        </Text>

        {/* OTP BOXES */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpBox}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>

        {/* RESEND */}
        <Text style={styles.resendText}>
          Didn’t receive OTP?
        </Text>

        <Text style={styles.resendLink}>
          Resend code
        </Text>

        {/* 🔥 BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ContactUs')} // 👈 FIXED
        >
          <Text style={styles.buttonText}>Verified</Text>
        </TouchableOpacity>

        {/* BOTTOM INDICATOR */}
        <View style={styles.bottomIndicator} />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#cfcfcf',
  },

  sheet: {
    flex: 1,
    backgroundColor: '#eeeeee',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingTop: 20,
  },

  handle: {
    width: 70,
    height: 7,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 20,
  },

  topTitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },

  sub: {
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 30,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginBottom: 30,
  },

  otpBox: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
    fontSize: 18,
    elevation: 5,
  },

  resendText: {
    color: '#888',
    marginBottom: 5,
  },

  resendLink: {
    color: '#000',
    textDecorationLine: 'underline',
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    elevation: 6,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  bottomIndicator: {
    position: 'absolute',
    bottom: 8,
    width: 120,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 10,
  },

});