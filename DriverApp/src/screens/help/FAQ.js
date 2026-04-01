import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
} from 'react-native';

const FAQ = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/* Top Spacer */}
      <View style={styles.topSpacer} />

      {/* Title */}
      <Text style={styles.title}>Help Center</Text>

      {/* Search */}
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <View style={styles.tabActiveContainer}>
          <Text style={styles.tabActive}>FAQ</Text>
          <View style={styles.underline} />
        </View>

        <Text style={styles.tabInactive}>Contact US</Text>
      </View>

      {/* FAQ List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {Array(4).fill(0).map((_, index) => (
          <View key={index} style={styles.faqItem}>
            <Text style={styles.question}>
              What if I need to cancel a booking?
            </Text>
            <Text style={styles.answer}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              veniam cum nesciunt ad amet exercitationem nulla animi molestias
              dignissimos ea? Distinctio ex nemo veniam cum nesciunt ad amet
              exercitationem nulla animi molestias dignissimos ea? Distinctio ex
              nemo a expedita tempora ab velit rerum voluptas.
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Button */}
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.navigate('RideHistory')}
      >
        <Text style={styles.buttonText}>Your Question?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },

  topSpacer: {
    height: Platform.OS === 'android' ? 20 : 0,
  },

  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 20,
    color: '#000',
  },

  /* SEARCH */
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 55,
    elevation: 5,
    marginBottom: 20,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
  },

  /* TABS */
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 15,
    elevation: 5,
    marginBottom: 20,
  },

  tabActiveContainer: {
    alignItems: 'center',
  },

  tabActive: {
    fontSize: 16,
    color: '#ff8c00',
    fontWeight: '500',
  },

  underline: {
    marginTop: 5,
    height: 3,
    width: 40,
    backgroundColor: '#ff8c00',
    borderRadius: 5,
  },

  tabInactive: {
    fontSize: 16,
    color: '#000',
  },

  /* FAQ */
  faqItem: {
    marginBottom: 20,
  },

  question: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#000',
  },

  answer: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },

  /* BUTTON */
  bottomButton: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 6,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  },
});