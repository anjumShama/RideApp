import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function RideRequestScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#cfcfcf" barStyle="dark-content" />

      {/* FULL SHEET */}
      <View style={styles.sheet}>

        {/* HANDLE */}
        <View style={styles.handle} />

        {/* MAP IMAGE */}
        <Image
          source={require('../../assets/map.png')} 
          style={styles.mapImage}
          resizeMode="cover"
        />

        {/* CARD CONTENT */}
        <View style={styles.card}>

          {/* HEADER */}
          <View style={styles.headerRow}>
            <Text style={styles.title}>Ride Request</Text>
            <Text style={styles.time}>5 mins Away</Text>
          </View>

          {/* USER */}
          <View style={styles.userRow}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=8' }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>Esther Howard</Text>
              <Text style={styles.sub}>Cash payment</Text>
            </View>
          </View>

          {/* LOCATIONS */}
          <View style={styles.locationRow}>
            <Text style={styles.locIcon}>📍</Text>
            <View>
              <Text style={styles.locationText}>Kalkere, Bengaluru</Text>
              <Text style={styles.subSmall}>10 mins trip</Text>
            </View>
          </View>

          <View style={styles.locationRow}>
            <Text style={styles.locIcon}>📍</Text>
            <Text style={styles.locationText}>
              BTM layout, Bengaluru
            </Text>
          </View>

          {/* BUTTONS */}
          <View style={styles.btnRow}>

            <TouchableOpacity style={styles.decline}>
              <Text style={styles.declineText}>Decline</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.accept}
              onPress={() => navigation.navigate('Policy')}
            >
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>

          </View>

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
    height: 260,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 10,
  },

  card: {
    flex: 1,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    paddingHorizontal: 25,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
  },

  time: {
    fontSize: 12,
    color: '#bdbdbd',
  },

  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginRight: 10,
  },

  name: {
    fontWeight: '600',
  },

  sub: {
    color: '#888',
    fontSize: 12,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  locIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  locationText: {
    fontSize: 14,
    color: '#333',
  },

  subSmall: {
    fontSize: 12,
    color: '#888',
  },

  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  decline: {
    backgroundColor: '#dcdcdc',
    paddingVertical: 12,
    borderRadius: 25,
    width: '45%',
    alignItems: 'center',

    elevation: 3,
  },

  declineText: {
    color: '#ff8c00',
    fontWeight: '600',
  },

  accept: {
    backgroundColor: '#ff8c00',
    paddingVertical: 12,
    borderRadius: 25,
    width: '45%',
    alignItems: 'center',

    elevation: 5,
  },

  acceptText: {
    color: '#fff',
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