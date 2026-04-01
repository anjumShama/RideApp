import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function PolicyScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#cfcfcf" barStyle="dark-content" />

      {/* FULL SHEET */}
      <View style={styles.sheet}>

        {/* HANDLE */}
        <View style={styles.handle} />

        {/* SCROLL CARD */}
        <View style={styles.cardWrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >

            <Text style={styles.heading}>Cancellation Policy</Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pariatur veniam cum nesciunt ad amet exercitationem nulla
              animi molestias dignissimos ea? Distinctio ex nemo veniam cum
              nesciunt ad amet exercitationem nulla animi molestias dignissimos ea?
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pariatur veniam cum nesciunt ad amet exercitationem nulla animi molestias.
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pariatur veniam cum nesciunt ad amet exercitationem nulla animi molestias.
            </Text>

            <Text style={styles.heading}>Cancellation Policy</Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pariatur veniam cum nesciunt ad amet exercitationem nulla
              animi molestias dignissimos ea? Distinctio ex nemo veniam cum
              nesciunt ad amet exercitationem nulla animi molestias dignissimos ea?
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pariatur veniam cum nesciunt ad amet exercitationem nulla animi molestias.
            </Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pariatur veniam cum nesciunt ad amet exercitationem nulla animi molestias.
            </Text>

          </ScrollView>
        </View>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CustomerLocation')}
        >
          <Text style={styles.buttonText}>Accept</Text>
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

  cardWrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    padding: 18,

    elevation: 6,
  },

  heading: {
    color: '#ff8c00',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },

  text: {
    fontSize: 13,
    color: '#444',
    lineHeight: 18,
    marginBottom: 12,
  },

  button: {
    position: 'absolute',
    bottom: 60,
    left: 30,
    right: 30,

    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',

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