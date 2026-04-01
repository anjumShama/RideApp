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

const RideHistory = ({ navigation }) => {
  const users = [
    { name: 'Aarav Mehta' },
    { name: 'Meera Joshi' },
    { name: 'Ananya Rao' },
    { name: 'Rohan Iyer' },
    { name: 'Kabir Khan' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={styles.topSpacer} />

      {/* HEADER */}
      <View style={styles.headerContainer}>
        
        {/* TAB */}
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Active')}>
            <Text style={styles.tabInactive}>Active</Text>
          </TouchableOpacity>

          <Text style={styles.tabActive}>Completed</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Cancelled')}>
            <Text style={styles.tabInactive}>Cancelled</Text>
          </TouchableOpacity>
        </View>

        {/* STATS */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Total Hour</Text>
            <Text style={styles.statValue}>01</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Total Miles</Text>
            <Text style={styles.statValue}>80</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Earning(s)</Text>
            <Text style={styles.statValue}>$100</Text>
          </View>
        </View>
      </View>

      {/* LIST */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map((item, index) => (
          <View key={index} style={styles.card}>

            {/* PROFILE IMAGE (FIXED) */}
            <View style={styles.avatarWrapper}>
              <Image
                source={{
                  uri:
                    index % 2 === 0
                      ? `https://randomuser.me/api/portraits/men/${index + 10}.jpg`
                      : `https://randomuser.me/api/portraits/women/${index + 10}.jpg`,
                }}
                style={styles.avatar}
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.subText}>
                4.5 Miles | 10 Mins | $58.00
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RideHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
  },

  topSpacer: {
    height: Platform.OS === 'android' ? 20 : 0,
  },

  /* HEADER */
  headerContainer: {
    backgroundColor: '#000',
    borderRadius: 25,
    paddingTop: 12,
    paddingBottom: 18,
    paddingHorizontal: 12,
    marginBottom: 25,
  },

  /* TAB */
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eaeaea',
    borderRadius: 25,
    paddingVertical: 10,
    marginBottom: 15,
  },

  tabActive: {
    color: '#ff8c00',
    fontWeight: '700',
  },

  tabInactive: {
    color: '#999',
    fontWeight: '500',
  },

  /* STATS */
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },

  statBox: {
    alignItems: 'center',
  },

  statLabel: {
    color: '#bbb',
    fontSize: 12,
    marginBottom: 4,
  },

  statValue: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  /* CARD (IMPORTANT FIX) */
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 14,
    marginBottom: 18,

    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },

  /* AVATAR FIX (MATCH FIGMA) */
  avatarWrapper: {
    backgroundColor: '#fff',
    borderRadius: 35,
    padding: 3,
    elevation: 6,
    marginRight: 14,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
  },

  textContainer: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },

  subText: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});