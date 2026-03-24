import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// ADD THIS IMPORT
import { endRide } from '../../services/rideService';

export default function RideComplete({ navigation, route }) {

  //  Get ride data (you must pass this from previous screen)
  const { ride } = route.params || {};

  return (
    <View style={styles.container}>

      {/* MAP AREA */}
      <View style={styles.map}>
        <Text style={styles.mapText}>Trip in Progress</Text>
      </View>

      {/* BOTTOM CARD */}
      <View style={styles.card}>

        <Text style={styles.title}>Trip Ongoing</Text>

        <Text style={styles.text}>
           {ride?.pickup || 'MG Road'} → {ride?.drop || 'Airport'}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            try {
              await endRide(ride?.id);   //  API call
              navigation.navigate('PaymentQR');
            } catch (error) {
              console.log('Error ending ride:', error);
            }
          }}
        >
          <Text style={styles.buttonText}>End Trip</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  map: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mapText: {
    color: '#666',
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    color: '#444',
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#ff8c00',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});