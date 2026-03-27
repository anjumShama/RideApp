import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function RideRequestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        }}
        style={styles.mapImage}
      />

      <View style={styles.card}>
        <Text style={styles.title}>Ride Request</Text>

        <View style={styles.userRow}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Esther Howard</Text>
            <Text style={styles.sub}>Cash payment</Text>
          </View>
        </View>

        <Text style={styles.location}>📍 Kalkere, Bengaluru</Text>
        <Text style={styles.location}>📍 BTM layout, Bengaluru</Text>

        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.decline}>
            <Text style={{ color: '#FF8C00' }}>Decline</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.accept}
            onPress={() => navigation.navigate('Policy')}
          >
            <Text style={{ color: '#fff' }}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', alignItems: 'center' },

  mapImage: {
    width: '90%',
    height: 250,
    borderRadius: 20,
    marginTop: 40,
  },

  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginTop: -40,
    elevation: 5,
  },

  title: { fontSize: 18, fontWeight: '600', marginBottom: 10 },

  userRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },

  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },

  name: { fontWeight: '600' },
  sub: { color: 'gray', fontSize: 12 },

  location: { marginVertical: 5 },

  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  decline: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF8C00',
    width: '45%',
    alignItems: 'center',
  },

  accept: {
    backgroundColor: '#FF8C00',
    padding: 10,
    borderRadius: 20,
    width: '45%',
    alignItems: 'center',
  },
});