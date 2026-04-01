import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const notifications = [
  {
    id: '1',
    icon: 'car',
    title: 'New Ride Request',
    description: 'You have a new ride request from Islamabad F-8 to Blue Area.',
    time: '2 min ago',
    unread: true,
  },
  {
    id: '2',
    icon: 'cash',
    title: 'Payment Received',
    description: 'Rs. 450 has been credited to your account for the last ride.',
    time: '1 hour ago',
    unread: true,
  },
  {
    id: '3',
    icon: 'star',
    title: 'New Rating',
    description: 'A passenger rated you 5 stars. Keep up the great work!',
    time: '3 hours ago',
    unread: false,
  },
  {
    id: '4',
    icon: 'alert-circle-outline',
    title: 'Document Expiring',
    description: 'Your driving license will expire in 15 days. Please update it.',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: '5',
    icon: 'gift-outline',
    title: 'Weekly Bonus',
    description: 'Complete 5 more rides this week to earn Rs. 500 bonus.',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: '6',
    icon: 'update',
    title: 'App Update Available',
    description: 'A new version of the app is available. Update for better experience.',
    time: '2 days ago',
    unread: false,
  },
];

export default function Notification({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.topSpacer} />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate('ProfileSetup')}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Notifications</Text>
      </View>

      {/* NOTIFICATIONS LIST */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}>
        {notifications.map(item => (
          <TouchableOpacity key={item.id} style={styles.notificationCard}>
            {/* ICON */}
            <View
              style={[
                styles.iconCircle,
                item.unread && styles.iconCircleUnread,
              ]}>
              <Icon
                name={item.icon}
                size={18}
                color={item.unread ? '#fff' : '#ff8c00'}
              />
            </View>

            {/* CONTENT */}
            <View style={styles.contentBox}>
              <View style={styles.titleRow}>
                <Text
                  style={[
                    styles.notifTitle,
                    item.unread && styles.notifTitleUnread,
                  ]}>
                  {item.title}
                </Text>
                {item.unread && <View style={styles.unreadDot} />}
              </View>
              <Text style={styles.notifDesc} numberOfLines={2}>
                {item.description}
              </Text>
              <Text style={styles.notifTime}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },

  topSpacer: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  /* HEADER */
  header: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backBtn: {
    position: 'absolute',
    left: 0,
    backgroundColor: '#ff8c00',
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 20,
    elevation: 6,
  },

  backText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },

  /* LIST */
  listContainer: {
    paddingTop: 30,
    paddingBottom: 30,
  },

  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 15,
    marginBottom: 14,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff4e6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },

  iconCircleUnread: {
    backgroundColor: '#ff8c00',
  },

  contentBox: {
    flex: 1,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notifTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },

  notifTitleUnread: {
    fontWeight: '700',
    color: '#000',
  },

  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff8c00',
    marginLeft: 8,
  },

  notifDesc: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginTop: 4,
  },

  notifTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 6,
  },
});
