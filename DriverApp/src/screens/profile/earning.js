import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

const EarningsIntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* IMAGE */}
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/earnings.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* TITLE */}
      <Text style={styles.title}>
        Keep Tabs on <Text style={styles.highlight}>Your Earnings</Text>
        {'\n'}with Ease
      </Text>

      {/* DESCRIPTION */}
      <Text style={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Pariatur veniam cum nesciunt ad amet exercitationem nulla animi
        molestias dignissimos.
      </Text>

      {/* DOTS */}
      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* ARROWS */}
      <View style={styles.arrowRow}>
        <TouchableOpacity style={styles.arrowBtn}>
          <Icon name="arrow-left" size={18} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.arrowBtn}>
          <Icon name="arrow-right" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Welcome')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

    </View>
  );
};

export default EarningsIntroScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  imageWrapper: {
    width: '85%',
    height: height * 0.38,
    marginTop: 60,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 8,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  title: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
    lineHeight: 30,
  },

  highlight: {
    color: '#ff8c00',
  },

  desc: {
    marginTop: 12,
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 10,
  },

  dotsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#d0d0d0',
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: '#ff8c00',
    width: 8,
    height: 8,
  },

  arrowRow: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  arrowBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },

  button: {
    position: 'absolute',
    bottom: 40,
    width: '85%',
    height: 55,
    backgroundColor: '#ff8c00',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },

});