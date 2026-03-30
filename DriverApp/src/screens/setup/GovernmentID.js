import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function GovernmentID({ navigation }) {
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#cfcfcf" barStyle="dark-content" />

      {/* FULL SCREEN SHEET */}
      <View style={styles.sheet}>

        {/* HANDLE */}
        <View style={styles.handle} />

        {/* TITLE */}
        <Text style={styles.title}>Government ID</Text>

        {/* RULES */}
        <View style={styles.rule}>
          <View style={styles.checkCircle}>
            <Text style={styles.tick}>✓</Text>
          </View>
          <Text style={styles.ruleText}>
            Photocopies and printouts of documents will not be accepted
          </Text>
        </View>

        <View style={styles.rule}>
          <View style={styles.checkCircle}>
            <Text style={styles.tick}>✓</Text>
          </View>
          <Text style={styles.ruleText}>
            The photo and all details must be clearly visible
          </Text>
        </View>

        <View style={styles.rule}>
          <View style={styles.checkCircle}>
            <Text style={styles.tick}>✓</Text>
          </View>
          <Text style={styles.ruleText}>
            Only documents that are less than 10 MB in size and in JPG, JPEG,
            PNG, OR PDF format will be accepted
          </Text>
        </View>

        {/* PROFILE */}
        <Text style={styles.profileText}>Profile Picture</Text>

        {/* UPLOAD */}
        <View style={styles.uploadContainer}>
          <TouchableOpacity style={styles.uploadBox}>
            <Text style={styles.uploadIcon}>☁</Text>
            <Text style={styles.uploadArrow}>↑</Text>
          </TouchableOpacity>
        </View>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LocationPermission')}
        >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>

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
    top: 0,              // 🔥 THIS FIXES YOUR ISSUE
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: '#eeeeee',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    paddingTop: 15,
    paddingHorizontal: 25,
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
    marginBottom: 25,
    color: '#000',
  },

  rule: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
    elevation: 3,
  },

  tick: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  ruleText: {
    flex: 1,
    fontSize: 13,
    color: '#9c9c9c',
    lineHeight: 18,
  },

  profileText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#000',
  },

  uploadContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },

  uploadBox: {
    width: 120,
    height: 120,
    borderRadius: 22,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },

  uploadIcon: {
    fontSize: 32,
    color: '#7a7a7a',
  },

  uploadArrow: {
    fontSize: 22,
    color: '#7a7a7a',
    marginTop: -5,
  },

  button: {
    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 6,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
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