import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { acceptRide } from '../../services/rideService';

export default function RideRequest({ navigation, route }) {

  const { ride } = route.params;

  const handleAccept = async () => {
    try {
      await acceptRide(ride.id);
      navigation.navigate('RideNavigation', { ride });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Ride Request</Text>

      <View style={styles.card}>
        <Text>Pickup: {ride.pickup}</Text>
        <Text>Destination: {ride.destination}</Text>
      </View>

      <View style={styles.row}>

        <TouchableOpacity style={styles.decline}>
          <Text style={styles.text}>Decline</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.accept}
          onPress={handleAccept}
        >
          <Text style={styles.text}>Accept</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },

  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginVertical: 20,
    elevation: 5,
  },

  row: { flexDirection: 'row' },

  decline: {
    flex: 1,
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginRight: 5,
  },

  accept: {
    flex: 1,
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    marginLeft: 5,
  },

  text: { color: '#fff', textAlign: 'center' },
});