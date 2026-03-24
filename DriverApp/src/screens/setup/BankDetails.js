import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function BankDetails({ navigation }) {

  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>Bank Account Details</Text>

      {/* INFO */}
      <Text style={styles.info}>
        Upload passbook / cancelled cheque / bank statement
      </Text>

      {/* UPLOAD BOX */}
      <TouchableOpacity style={styles.uploadBox}>
        <Text style={styles.uploadText}>Upload Document</Text>
      </TouchableOpacity>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GovernmentID')}
      >
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  info: {
    color: '#666',
    marginBottom: 20,
  },

  uploadBox: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 15,
    padding: 50,
    alignItems: 'center',
    marginBottom: 30,
  },

  uploadText: {
    color: '#888',
  },

  button: {
    backgroundColor: '#ff8c00',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});