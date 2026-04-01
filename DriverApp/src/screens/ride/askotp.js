import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function ArrivalScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#cfcfcf" barStyle="dark-content" />

      {/* FULL SHEET */}
      <View style={styles.sheet}>

        {/* HANDLE */}
        <View style={styles.handle} />

        {/* MAP IMAGE */}
        <Image
          source={require('../../assets/arrival_map.png')}
          style={styles.mapImage}
          resizeMode="cover"
        />

        {/* CONTENT */}
        <View style={styles.content}>

          {/* ICON (UPDATED ONLY THIS PART) */}
          <View style={styles.iconCircle}>
            <Image
              source={require('../../assets/location.png')} 
              style={styles.locationImage}
              resizeMode="contain"
            />
          </View>

          {/* TEXT */}
          <Text style={styles.title}>
            Arrived At Customer Location
          </Text>

          <Text style={styles.sub}>
            6391 Ghottegere
          </Text>

          {/* BUTTON */}
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('CancelRide')}
          >
            <Text style={styles.buttonText}>Ask for OTP</Text>
          </TouchableOpacity>

        </View>

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

    paddingTop: 15,
  },

  handle: {
    alignSelf: 'center',
    width: 70,
    height: 7,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
  },

  mapImage: {
    width: '90%',
    height: 300,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 10,
  },

  content: {
    alignItems: 'center',
    marginTop: 25,
  },

  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    marginBottom: 15,
  },

  /* NEW STYLE FOR IMAGE */
  locationImage: {
    width: 35,
    height: 35,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },

  sub: {
    fontSize: 13,
    color: '#9a9a9a',
    marginBottom: 25,
  },

  button: {
    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    paddingHorizontal: 40,
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
    alignSelf: 'center',
    width: 120,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 10,
  },

});