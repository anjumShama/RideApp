import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Svg, { Path, Rect, Line, Polyline } from 'react-native-svg';

export default function BankDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* SAFE AREA */}
      <View style={styles.topSpacer} />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Bank Account Details</Text>

        <TouchableOpacity
          style={styles.doneBtn}
          onPress={() => navigation.navigate('DrivingDetails')}
        >
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* POINTS */}
      <View style={styles.pointsContainer}>
        <View style={styles.pointRow}>
          <View style={styles.tick}>
            <Icon name="check" size={14} color="#fff" />
          </View>
          <Text style={styles.pointText}>
            Upload Back Document (Passbook, Cancelled Cheque, Bank Statement or Digital Account Screenshot)
          </Text>
        </View>

        <View style={styles.pointRow}>
          <View style={styles.tick}>
            <Icon name="check" size={14} color="#fff" />
          </View>
          <Text style={styles.pointText}>
            Upload PDF / JPEG / PNG
          </Text>
        </View>
      </View>

      {/* TITLE */}
      <Text style={styles.attachTitle}>
        Attach Back Account Details
      </Text>

      {/* 🔥 UPLOAD BOX WITH SVG ICON */}
      <TouchableOpacity style={styles.uploadBox}>
        <View style={styles.svgWrapper}>
          
          <Svg width={90} height={90} viewBox="0 0 100 100">

            {/* CLOUD */}
            <Path
              d="M30 60 H70 
                 A15 15 0 0 0 70 30 
                 A20 20 0 0 0 30 35 
                 A12 12 0 0 0 30 60 Z"
              stroke="#000"
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
              stroke="#000"
              strokeWidth="3"
              fill="none"
            />

            {/* ARROW LINE */}
            <Line
              x1="50"
              y1="70"
              x2="50"
              y2="55"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* ARROW HEAD */}
            <Polyline
              points="43,62 50,55 57,62"
              stroke="#000"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

          </Svg>

        </View>
      </TouchableOpacity>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update</Text>
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

  /* HEADER */
  header: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },

  doneBtn: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#ff8c00',
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 20,
    elevation: 6,
  },

  doneText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  /* POINTS */
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
    color: '#777',
    lineHeight: 18,
  },

  attachTitle: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },

  /* UPLOAD BOX */
  uploadBox: {
    height: 190,
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,

    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },

  svgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* BUTTON */
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