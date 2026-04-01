import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Platform,
} from 'react-native';

const Active = ({ navigation }) => {
  const rides = [1, 2];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />

      {/* TOP SPACE */}
      <View style={styles.topSpacer} />

      {/* TAB BAR */}
      <View style={styles.tabContainer}>
        <Text style={styles.tabActive}>Active</Text>

        <TouchableOpacity onPress={() => navigation.navigate('RideHistory')}>
          <Text style={styles.tabInactive}>Completed</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cancelled')}>
          <Text style={styles.tabInactive}>Cancelled</Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {rides.map((_, index) => (
          <View key={index} style={styles.card}>

            {/* PROFILE */}
            <View style={styles.profileRow}>
              <View style={styles.avatarWrapper}>
                <Image
                  source={{
                    uri:
                      index === 0
                        ? 'https://randomuser.me/api/portraits/men/32.jpg'
                        : 'https://randomuser.me/api/portraits/women/44.jpg',
                  }}
                  style={styles.avatar}
                />
              </View>

              <View>
                <Text style={styles.name}>Byron Barlow</Text>
                <Text style={styles.crn}>CRN : #854HG23</Text>
              </View>
            </View>

            {/* DISTANCE + TIME */}
            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                {/* ✅ FIXED ICON (NO CIRCLE) */}
                <Image
                  source={require('../../assets/location.png')}
                  style={styles.locationIconImage}
                />
                <Text style={styles.infoText}>4.5 KM</Text>
              </View>

              <View style={styles.infoItem}>
                <View style={styles.iconCircleOutline}>
                  <View style={styles.clockContainer}>
                    <View style={styles.clockCenter} />
                    <View style={styles.clockHandHour} />
                    <View style={styles.clockHandMinute} />
                  </View>
                </View>
                <Text style={styles.infoText}>15 mins</Text>
              </View>
            </View>

            {/* CURRENT LOCATION */}
            <View style={styles.locationBox}>
              <Image
                source={require('../../assets/location.png')}
                style={styles.smallLocationIcon}
              />
              <Text style={styles.locationText}>Current Location</Text>
            </View>

            {/* DESTINATION */}
            <View style={styles.locationBox}>
              <Image
                source={require('../../assets/location.png')}
                style={styles.smallLocationIcon}
              />
              <Text style={styles.locationText}>Destination</Text>
            </View>

          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Active;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
  },

  topSpacer: {
    height: Platform.OS === 'android' ? 20 : 0,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 14,
    marginBottom: 25,
    elevation: 6,
  },

  tabActive: {
    color: '#ff8c00',
    fontWeight: '700',
    borderBottomWidth: 3,
    borderBottomColor: '#ff8c00',
    paddingBottom: 4,
  },

  tabInactive: {
    color: '#aaa',
    fontWeight: '500',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 18,
    marginBottom: 22,
    elevation: 8,
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  avatarWrapper: {
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 3,
    elevation: 6,
    marginRight: 14,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },

  crn: {
    fontSize: 12,
    color: '#999',
    marginTop: 3,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  /* ✅ FIXED ICON STYLE (LIKE CANCELLED) */
  locationIconImage: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 8,
  },

  iconCircleOutline: {
    borderWidth: 1.5,
    borderColor: '#ff8c00',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  infoText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },

  /* CLOCK */
  clockContainer: {
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  clockCenter: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#ff8c00',
  },

  clockHandHour: {
    position: 'absolute',
    width: 1.8,
    height: 4.5,
    backgroundColor: '#ff8c00',
    top: 2,
    borderRadius: 1,
  },

  clockHandMinute: {
    position: 'absolute',
    width: 1.8,
    height: 6.5,
    backgroundColor: '#ff8c00',
    transform: [{ rotate: '70deg' }],
    top: 4,
    borderRadius: 1,
  },

  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 18,
    marginBottom: 12,
    elevation: 4,
  },

  smallLocationIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    marginRight: 10,
  },

  locationText: {
    color: '#777',
    fontSize: 13,
    fontWeight: '500',
  },
});