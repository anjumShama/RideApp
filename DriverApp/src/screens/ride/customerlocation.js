import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomerLocationScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#cfcfcf" barStyle="dark-content" />

      {/* FULL SHEET */}
      <View style={styles.sheet}>

        {/* HANDLE */}
        <View style={styles.handle} />

        {/* TITLE */}
        <Text style={styles.title}>Customer Location</Text>

        {/* MAP CONTAINER */}
        <View style={styles.mapWrapper}>

          <Image
            source={require('../../assets/customer_map.png')}
            style={styles.map}
            resizeMode="cover"
          />

          {/* FLOATING LOCATION BAR (FIXED) */}
          <View style={styles.locationBar}>
            <View style={styles.iconCircle}>
              <Icon name="map-marker" size={18} color="#fff" />
            </View>
            <Text style={styles.locationText}>Current Location</Text>
          </View>

        </View>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AskOTP')}
        >
          <Text style={styles.buttonText}>
            Navigate to car owner's Location
          </Text>
        </TouchableOpacity>

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
    paddingHorizontal: 20,
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
    marginBottom: 20,
  },

  mapWrapper: {
    borderRadius: 200,
    overflow: 'hidden',
    alignSelf: 'center',
    width: '100%',
    height: 380,

    elevation: 6,
    backgroundColor: '#ddd',
  },

  map: {
    width: '100%',
    height: '100%',
  },

  /* ✅ FIXED LOCATION BAR */
  locationBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,

    backgroundColor: '#ffffff',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,

    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  locationText: {
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },

  button: {
    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,

    elevation: 6,
  },

  buttonText: {
    color: '#fff',
    fontSize: 15,
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