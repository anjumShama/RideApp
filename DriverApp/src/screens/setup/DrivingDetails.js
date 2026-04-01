import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Svg, { Path, Rect, Line, Polyline } from 'react-native-svg';

export default function DrivingDetails({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <View style={styles.topSpacer} />

      {/* TITLE */}
      <Text style={styles.title}>Driving License</Text>

      {/* POINTS */}
      <View style={styles.pointsContainer}>

        <View style={styles.pointRow}>
          <View style={styles.tick}>
            <Icon name="check" size={14} color="#fff" />
          </View>
          <Text style={styles.pointText}>
            Photocopies and printouts of document will not be accepted
          </Text>
        </View>

        <View style={styles.pointRow}>
          <View style={styles.tick}>
            <Icon name="check" size={14} color="#fff" />
          </View>
          <Text style={styles.pointText}>
            The photo and all details must be clearly visible
          </Text>
        </View>

        <View style={styles.pointRow}>
          <View style={styles.tick}>
            <Icon name="check" size={14} color="#fff" />
          </View>
          <Text style={styles.pointText}>
            Only documents less than 10 MB in JPG, JPEG, PNG or PDF format will be accepted
          </Text>
        </View>

      </View>

      {/* ATTACH */}
      <Text style={styles.attachTitle}>Attach Driving License</Text>

      {/* 🔥 EXACT ICON BOX */}
      <TouchableOpacity style={styles.uploadBox}>
        <Svg width={70} height={70} viewBox="0 0 100 100">

          {/* CLOUD */}
          <Path
            d="M30 60 H70 
               A15 15 0 0 0 70 30 
               A20 20 0 0 0 30 35 
               A12 12 0 0 0 30 60 Z"
            stroke="#7a7a7a"
            strokeWidth="3"
            fill="none"
          />

          {/* BOX */}
          <Rect
            x="35"
            y="55"
            width="30"
            height="25"
            rx="6"
            stroke="#7a7a7a"
            strokeWidth="3"
            fill="none"
          />

          {/* ARROW */}
          <Line
            x1="50"
            y1="70"
            x2="50"
            y2="55"
            stroke="#7a7a7a"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <Polyline
            points="43,62 50,55 57,62"
            stroke="#7a7a7a"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

        </Svg>
      </TouchableOpacity>

      {/* NOTE */}
      <Text style={styles.note}>
        <Text style={styles.noteHighlight}>Note:</Text> Please upload both sides of Driving License
      </Text>

      {/* SAMPLE IMAGES */}
      <View style={styles.sampleRow}>
        <Image
          source={require('../../assets/l1.png')}
          style={styles.sampleImg}
        />
        <Image
          source={require('../../assets/l2.png')}
          style={styles.sampleImg}
        />
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GovernmentID')}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>

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

  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
    textAlign: 'center',
    color: '#000',
  },

  pointsContainer: {
    marginTop: 30,
  },

  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  tick: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 3,
    elevation: 3,
  },

  pointText: {
    flex: 1,
    fontSize: 13,
    color: '#444',
    lineHeight: 18,
  },

  attachTitle: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },

  /* 🔥 MATCHED BOX */
  uploadBox: {
    width: 140,
    height: 120,
    backgroundColor: '#f5f5f5',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    alignSelf: 'center',

    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },

  note: {
    marginTop: 15,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
  },

  noteHighlight: {
    color: '#ff8c00',
    fontWeight: '600',
  },

  sampleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },

  sampleImg: {
    width: 110,
    height: 65,
    marginHorizontal: 8,
    borderRadius: 10,
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
    alignSelf: 'center',
    elevation: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },

});