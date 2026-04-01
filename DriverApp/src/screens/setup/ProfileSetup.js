import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>

        <TouchableOpacity
          style={styles.doneBtn}
          onPress={() => navigation.navigate('BankDetails')}
        >
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* PROFILE IMAGE */}
      <Image
        source={{ uri: 'https://i.pravatar.cc/300' }}
        style={styles.profileImg}
      />

      {/* MENU */}
      <View style={styles.menuContainer}>
        {menuItem('account-circle-outline', 'Your profile', () => navigation.navigate('YourProfile'))}
        {menuItem('bell-outline', 'Notification', () => navigation.navigate('Notification'))}
        {menuItem('clock-outline', 'Your Rides', () => navigation.navigate('RideHistory'))}
        {menuItem('calendar-outline', 'Pre-Booked Rides', () => navigation.navigate('Home'))}
        {menuItem('cog-outline', 'Settings', () => navigation.navigate('Welcome'))}
        {menuItem('help-circle-outline', 'Help Center', () => navigation.navigate('ContactUs'))}
        {menuItem('shield-lock-outline', 'Privacy Policy', () => navigation.navigate('Policy'))}
        {menuItem('logout', 'Log out', () => navigation.navigate('Onboarding'))}
      </View>

    </View>
  );
}

/* MENU ITEM */
const menuItem = (icon, title, onPress) => (
  <TouchableOpacity style={styles.menuItem} key={title} onPress={onPress}>
    
    {/* ICON FIX */}
    <View style={styles.iconCircle}>
      <Icon name={icon} size={18} color="#ff8c00" />
    </View>

    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 20,
    elevation: 6,
  },

  doneText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  profileImg: {
    width: 130,
    height: 130,
    borderRadius: 65,
    alignSelf: 'center',
    marginTop: 30,
  },

  menuContainer: {
    marginTop: 35,
  },

  menuItem: {
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 14,
    elevation: 4,
  },

  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff4e6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuText: {
    marginLeft: 15,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },

});