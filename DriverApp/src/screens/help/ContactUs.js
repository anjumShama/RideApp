import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';

const ContactUs = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/* Top Notch Spacer (Android adjustment) */}
      <View style={styles.topSpacer} />

      {/* Title */}
      <Text style={styles.title}>Help Center</Text>

      {/* Search Box */}
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
        <Text style={styles.tabInactive}>FAQ</Text>
        <View style={styles.tabActiveContainer}>
          <Text style={styles.tabActive}>Contact US</Text>
          <View style={styles.underline} />
        </View>
      </View>

      {/* Options */}
      <View style={styles.optionContainer}>
        <Text style={styles.icon}>⚙️</Text>
        <Text style={styles.optionText}>Customer Service</Text>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.icon}>🌐</Text>
        <Text style={styles.optionText}>Website</Text>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.icon}>📞</Text>
        <Text style={styles.optionText}>+91 8883366584</Text>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.icon}>✉️</Text>
        <Text style={styles.optionText}>example@mail.com</Text>
      </View>

      {/* Done Button */}
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => navigation.navigate('FAQ')}
      >
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ContactUs;

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
    marginBottom: 30,
  },

  tabInactive: {
    fontSize: 16,
    color: '#000',
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
    width: 60,
    backgroundColor: '#ff8c00',
    borderRadius: 5,
  },

  /* OPTIONS */
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },

  icon: {
    fontSize: 20,
    width: 40,
    textAlign: 'center',
  },

  optionText: {
    fontSize: 16,
    color: '#000',
  },

  /* BUTTON */
  doneButton: {
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

  doneText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});