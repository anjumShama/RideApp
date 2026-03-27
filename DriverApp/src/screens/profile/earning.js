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

const EarningsIntroScreen = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <View style={styles.card}>

        {/* Top Notch */}
        <View style={styles.notch} />

        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/earnings.png')} 
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>
          Keep Tabs on <Text style={styles.highlight}>Your Earnings</Text>
          {"\n"}with Ease
        </Text>

        {/* Description */}
        <Text style={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur{"\n"}
          adipisicing elit. Pariatur veniam cum nesciunt{"\n"}
          ad amet exercitationem nulla animi molestias{"\n"}
          dignissimos .
        </Text>

        {/* Dots */}
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Arrows */}
        <View style={styles.arrowRow}>
          <TouchableOpacity style={styles.arrowBtn}>
            <Icon name="arrow-left" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.arrowBtn}>
            <Icon name="arrow-right" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default EarningsIntroScreen;

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
    paddingTop: 15,
  },

  notch: {
    width: 70,
    height: 10,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
  },

  imageWrapper: {
    width: '78%',
    height: height * 0.42,
    backgroundColor: '#fff',
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
    lineHeight: 28,
  },

  highlight: {
    color: '#ff8c00',
  },

  desc: {
    marginTop: 10,
    fontSize: 13,
    color: '#6e6e6e',
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 30,
  },

  dotsContainer: {
    flexDirection: 'row',
    marginTop: 18,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#cfcfcf',
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: '#ff8c00',
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  arrowRow: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  arrowBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#ff8c00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },

  button: {
    width: '75%',
    height: 50,
    backgroundColor: '#ff8c00',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 25,

    shadowColor: '#ff8c00',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});