import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Welcome({ navigation }) {

  return (
    <View style={styles.container}>

      {/* CONTENT */}
      <View style={styles.content}>

        {/* HEADER */}
        <Text style={styles.title}>Welcome!, Esther</Text>

        {/* REQUIRED */}
        <Text style={styles.section}>Required Steps</Text>

        {/* CARDS */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ProfileSetup')}
        >
          <Text style={styles.cardText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('BankDetails')}
        >
          <Text style={styles.cardText}>Bank Account Details</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('DrivingDetails')}
        >
          <Text style={styles.cardText}>Driving Details</Text>
        </TouchableOpacity>

        {/* COMPLETED */}
        <Text style={styles.section2}>Submitted Steps</Text>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Government ID</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  // ⭐ Adjusted positioning (not center, slightly up)
  content: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -60, // pulls content slightly UP
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25, // increased spacing
  },

  section: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    color: '#888',
  },

  section2: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,   // spacing between sections
    marginBottom: 15,
    color: '#888',
  },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 15,
    marginBottom: 18, // more spacing between cards
    elevation: 5,
  },

  cardText: {
    fontSize: 16,
    fontWeight: '500',
  },

});