import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';

export default function CancelRideScreen({ navigation }) {  // 🔥 navigation added
  const [selected, setSelected] = useState('Car Not Available');
  const [otherText, setOtherText] = useState('');

  const options = [
    'Car Not Available',
    'Owner want to book another driver',
    'Owner not Available',
    'Location out of coverage',
    'Other',
  ];

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#cfcfcf" barStyle="dark-content" />

      <View style={styles.sheet}>

        <View style={styles.handle} />

        <ScrollView showsVerticalScrollIndicator={false}>

          <Text style={styles.title}>Cancel Ride</Text>

          <Text style={styles.subtitle}>
            Please select the reason for cancellations:
          </Text>

          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionRow}
              onPress={() => setSelected(item)}
            >
              <View
                style={[
                  styles.radio,
                  selected === item && styles.radioSelected,
                ]}
              >
                {selected === item && <Text style={styles.tick}>✓</Text>}
              </View>

              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          ))}

          <Text style={styles.otherLabel}>Other</Text>

          <View style={styles.inputBox}>
            <TextInput
              placeholder="Enter your reason"
              placeholderTextColor="#999"
              value={otherText}
              onChangeText={setOtherText}
              multiline
            />
          </View>

          {/* 🔥 BUTTON WITH NAVIGATION */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('PaymentQR')}
          >
            <Text style={styles.buttonText}>Cancel Ride</Text>
          </TouchableOpacity>

        </ScrollView>

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
    flex: 1,
    backgroundColor: '#eeeeee',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 15,
    paddingHorizontal: 25,
  },

  handle: {
    alignSelf: 'center',
    width: 70,
    height: 7,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 15,
  },

  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 13,
    color: '#777',
    marginBottom: 25,
  },

  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#f2f2f2',
    marginRight: 12,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioSelected: {
    backgroundColor: '#ff8c00',
  },

  tick: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  optionText: {
    fontSize: 15,
    color: '#000',
  },

  otherLabel: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 15,
  },

  inputBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 15,
    minHeight: 80,
    elevation: 5,
  },

  button: {
    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 25,
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
    alignSelf: 'center',
    width: 120,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 10,
  },

});