import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

export default function LocationPermission({ navigation }) {
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#cfcfcf" barStyle="dark-content" />

      {/* FULL SHEET */}
      <View style={styles.sheet}>

        {/* HANDLE */}
        <View style={styles.handle} />

        {/* ICON IMAGE */}
        <View style={styles.iconWrapper}>
          <Image
            source={require('../../assets/location.png')} 
            style={styles.iconImage}
            resizeMode="contain"
          />
        </View>

        {/* TITLE */}
        <Text style={styles.title}>Enable Location Access</Text>

        {/* DESCRIPTION */}
        <Text style={styles.desc}>
          To ensure a seamless efficient experience,
          allow us access to your location
        </Text>

        {/* BUTTON SECTION */}
        <View style={styles.bottomSection}>

          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.primaryText}>
              Allow location Access
            </Text>
          </TouchableOpacity>

          <Text style={styles.andText}>And</Text>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.secondaryText}>
              Search for Ride
            </Text>
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
    paddingHorizontal: 25,
  },

  handle: {
    alignSelf: 'center',
    width: 70,
    height: 7,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 40,
  },

  iconWrapper: {
    alignItems: 'center',
    marginBottom: 25,
  },

  iconImage: {
    width: 130,   // 🔥 tuned for your emulator
    height: 130,
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
    color: '#000',
  },

  desc: {
    textAlign: 'center',
    color: '#8e8e8e',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 40,
    paddingHorizontal: 20,
  },

  bottomSection: {
    position: 'absolute',
    bottom: 70,
    left: 25,
    right: 25,
  },

  primaryBtn: {
    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 6,
  },

  primaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  andText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#9a9a9a',
  },

  secondaryBtn: {
    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 6,
  },

  secondaryText: {
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