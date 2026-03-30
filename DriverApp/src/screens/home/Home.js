import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';

export default function BookingsScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#cfcfcf" barStyle="dark-content" />

      {/* FULL SHEET */}
      <View style={styles.sheet}>

        {/* HANDLE */}
        <View style={styles.handle} />

        {/* TITLE */}
        <Text style={styles.title}>Bookings Available</Text>

        <ScrollView showsVerticalScrollIndicator={false}>

          {/* CARD 1 */}
          <View style={styles.card}>
            
            <View style={styles.row}>
              <Image
                source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.name}>Byron Barlow</Text>
                <Text style={styles.sub}>CRN : #854HG23</Text>
              </View>
            </View>

            {/* INFO */}
            <View style={styles.infoRow}>
              <Text style={styles.infoText}> 4.5KM</Text>
              <Text style={styles.infoText}>🕒 15 mins</Text>
            </View>

            {/* LOCATION BOXES */}
            <View style={styles.locationBox}>
              <Text style={styles.locationText}> Kalkere, Bengaluru</Text>
            </View>

            <View style={styles.locationBox}>
              <Text style={styles.locationText}> BTM layout, Bengaluru</Text>
            </View>

            {/* BUTTON */}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('RideRequest')}
            >
              <Text style={styles.btnText}>Request</Text>
            </TouchableOpacity>

          </View>

          {/* CARD 2 */}
          <View style={styles.card}>
            
            <View style={styles.row}>
              <Image
                source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.name}>Byron Barlow</Text>
                <Text style={styles.sub}>CRN : #854HG23</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoText}> 4.5KM</Text>
              <Text style={styles.infoText}>🕒 15 mins</Text>
            </View>

            <View style={styles.locationBox}>
              <Text style={styles.locationText}> Current Location</Text>
            </View>

            <View style={styles.locationBox}>
              <Text style={[styles.locationText, { color: '#aaa' }]}>
                 Destination
              </Text>
            </View>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('RideRequest')}
            >
              <Text style={styles.btnText}>Request</Text>
            </TouchableOpacity>

          </View>

        </ScrollView>

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
    marginBottom: 20,
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    padding: 15,
    marginBottom: 20,

    elevation: 6,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  name: {
    fontWeight: '600',
    fontSize: 15,
  },

  sub: {
    color: '#888',
    fontSize: 12,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  infoText: {
    fontSize: 14,
    color: '#333',
  },

  locationBox: {
    backgroundColor: '#e9e9e9',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginBottom: 10,

    elevation: 3,
  },

  locationText: {
    fontSize: 13,
    color: '#333',
  },

  btn: {
    backgroundColor: '#ff8c00',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,

    elevation: 5,
  },

  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
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