import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function PaymentQR({ navigation }) {
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#cfcfcf" barStyle="dark-content" />

      {/* FULL SHEET */}
      <View style={styles.sheet}>

        {/* HANDLE */}
        <View style={styles.handle} />

        {/* QR IMAGE */}
        <Image
          source={require('../../assets/qr.png')}
          style={styles.qr}
          resizeMode="contain"
        />

        {/* NAME */}
        <Text style={styles.name}>Esther Howard</Text>

        {/* AMOUNT CARD */}
        <View style={styles.amountCard}>
          <Text style={styles.amount}>$179</Text>
        </View>

        {/* 🔥 BUTTON (UPDATED NAVIGATION) */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RideComplete')}  
        >
          <Text style={styles.buttonText}>Done</Text>
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

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

  qr: {
    width: 220,
    height: 220,
    marginBottom: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },

  amountCard: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,
    paddingHorizontal: 35,
    borderRadius: 20,
    elevation: 6,
    marginBottom: 40,
  },

  amount: {
    fontSize: 28,
    fontWeight: '600',
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