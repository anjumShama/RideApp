import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

import { getAvailableRides } from '../../services/rideService';

export default function Home({ navigation }) {

  const [rides, setRides] = useState([]);

  useEffect(() => {
    loadRides();
  }, []);

  const loadRides = async () => {
    try {
      const data = await getAvailableRides();
      setRides(data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      <Text style={styles.name}>Ride #{item.id}</Text>

      <Text style={styles.text}>
        📍 {item.pickup} → {item.destination}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RideRequest', { ride: item })}
      >
        <Text style={styles.buttonText}>Request</Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bookings Available</Text>

      <FlatList
        data={rides}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 5,
  },

  name: { fontWeight: 'bold' },
  text: { marginBottom: 10 },

  button: {
    backgroundColor: '#ff8c00',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },

  buttonText: { color: '#fff', fontWeight: 'bold' },
});