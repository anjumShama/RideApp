import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useScreenHistory} from '../context/ScreenHistoryContext';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.42;

const SCREEN_ICONS = {
  Onboarding: 'cellphone',
  Register: 'account-plus',
  Login: 'login',
  OTPVerify: 'lock-check',
  NewPassword: 'lock-reset',
  ChangePassword: 'lock-outline',
  Welcome: 'hand-wave',
  ProfileSetup: 'account-cog',
  DrivingDetails: 'card-account-details',
  BankDetails: 'bank',
  GovernmentID: 'card-account-details-outline',
  YourProfile: 'account-circle',
  Notification: 'bell',
  LocationPermission: 'map-marker',
  Home: 'home',
  Earning: 'cash',
  RideRequest: 'car',
  Policy: 'shield-check',
  CustomerLocation: 'map-marker-account',
  AskOTP: 'message-lock',
  CancelRide: 'car-off',
  RideNavigation: 'navigation',
  RideOTP: 'numeric',
  RideComplete: 'check-circle',
  PaymentQR: 'qrcode',
  VerifiedOtp: 'check-decagram',
  ContactUs: 'headset',
  FAQ: 'help-circle',
  RideHistory: 'history',
  Active: 'clock',
  Cancelled: 'close-circle',
};

export default function RecentScreens() {
  const navigation = useNavigation();
  const {history, setShowRecents} = useScreenHistory();

  const goToScreen = name => {
    setShowRecents(false);
    navigation.navigate(name);
  };

  return (
    <View style={styles.overlay}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Recent Screens</Text>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => setShowRecents(false)}>
          <Icon name="close" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* CARDS */}
      {history.length === 0 ? (
        <View style={styles.emptyBox}>
          <Icon name="history" size={50} color="#555" />
          <Text style={styles.emptyText}>No recent screens</Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}>
          {history.map((name, index) => (
            <TouchableOpacity
              key={name}
              style={styles.card}
              onPress={() => goToScreen(name)}>
              <View style={styles.cardIcon}>
                <Icon
                  name={SCREEN_ICONS[name] || 'monitor'}
                  size={28}
                  color="#ff8c00"
                />
              </View>
              <Text style={styles.cardTitle} numberOfLines={1}>
                {name.replace(/([A-Z])/g, ' $1').trim()}
              </Text>
              {index === 0 && <View style={styles.activeDot} />}
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.92)',
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 4,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },

  closeBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    color: '#666',
    fontSize: 14,
    marginTop: 12,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 80,
  },

  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 0.75,
    backgroundColor: '#1a1a1a',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    elevation: 4,
  },

  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ccc',
  },

  activeDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff8c00',
  },
});
