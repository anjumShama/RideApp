import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function PaymentQR({ navigation }) {

  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>Payment</Text>

      {/* QR BOX */}
      <View style={styles.qrBox}>
        <Text style={styles.qrText}>QR CODE</Text>
      </View>

      {/* AMOUNT */}
      <Text style={styles.amount}>$179</Text>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  qrBox: {
    width: 220,
    height: 220,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
  },

  qrText: {
    color: '#666',
  },

  amount: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#ff8c00',
    padding: 15,
    borderRadius: 30,
    width: '70%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});