import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function BookingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookings Available</Text>

      {[1, 2].map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.row}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100' }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>Byron Barlow</Text>
              <Text style={styles.sub}>Car • MH12AB1234</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text> Kalkere, Bengaluru</Text>
            <Text>⏱ 15 mins</Text>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('RideRequest')}
          >
            <Text style={styles.btnText}>Request</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F5F5' },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 20 },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    elevation: 5,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  name: { fontWeight: '600' },
  sub: { color: 'gray', fontSize: 12 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  btn: {
    backgroundColor: '#FF8C00',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: '600' },
});