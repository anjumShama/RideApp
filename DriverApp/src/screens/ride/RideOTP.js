import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { startRide } from '../../services/rideService';

export default function RideOTP({ navigation, route }) {

  const [otp, setOtp] = useState(['', '', '', '']);

  // ✅ SAFE ACCESS
  const ride = route?.params?.ride || {};

  const handleChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Enter OTP</Text>

      <Text style={styles.desc}>
        Ask customer for OTP to start ride
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((item, index) => (
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

      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          try {
            await startRide(ride?.id);
            navigation.navigate('RideComplete', { ride });
          } catch (error) {
            console.log('Error starting ride:', error);
          }
        }}
      >
        <Text style={styles.buttonText}>Start Ride</Text>
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

  desc: {
    color: '#666',
    marginVertical: 15,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },

  box: {
    width: 50,
    height: 50,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
    elevation: 5,
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