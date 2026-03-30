import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <View style={styles.card}>

        {/* Notch */}
        <View style={styles.notch} />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>

          <TouchableOpacity
            style={styles.doneBtn}
            onPress={() => navigation.navigate('BankDetails')}
          >
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Image */}
        <Image
          source={{ uri: 'https://i.pravatar.cc/300' }} // temp image
          style={styles.profileImg}
        />

        {/* Menu Items */}
        <View style={styles.menuContainer}>

          {menuItem('user', 'Your profile')}
          {menuItem('bell', 'Notification')}
          {menuItem('clock', 'Your Rides')}
          {menuItem('grid', 'Pre-Booked Rides')}
          {menuItem('settings', 'Settings')}
          {menuItem('help-circle', 'Help Center')}
          {menuItem('lock', 'Privacy Policy')}
          {menuItem('log-out', 'Log out')}

        </View>

        {/* Bottom Bar */}
        <View style={styles.bottomBar} />

      </View>
    </View>
  );
}

const menuItem = (icon, title) => (
  <View style={styles.menuItem} key={title}>
    <Icon name={icon} size={18} color="#ff8c00" />
    <Text style={styles.menuText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({

  root: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: width * 0.9,
    height: height * 0.92,
    backgroundColor: '#f5f5f5',
    borderRadius: 40,
    alignItems: 'center',
    paddingTop: 20,
  },

  notch: {
    width: 70,
    height: 10,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
  },

  header: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },

  doneBtn: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#ff8c00',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,

    shadowColor: '#ff8c00',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },

  doneText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  profileImg: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginTop: 20,
  },

  menuContainer: {
    width: '90%',
    marginTop: 25,
  },

  menuItem: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },

  menuText: {
    marginLeft: 15,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },

  bottomBar: {
    width: 120,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 10,
    position: 'absolute',
    bottom: 10,
  },

});