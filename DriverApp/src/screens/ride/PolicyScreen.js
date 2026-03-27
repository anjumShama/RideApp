import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function PolicyScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.card}>
        <Text style={styles.title}>Cancellation Policy</Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </ScrollView>

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: '#fff' }}>Accept</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 20 },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },

  title: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  text: { marginBottom: 10, color: '#555' },

  btn: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
});