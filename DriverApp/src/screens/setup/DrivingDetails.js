import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

export default function DrivingDetails({ navigation }) {
  return (
    <View style={styles.root}>
      <View style={styles.card}>

        {/* Notch */}
        <View style={styles.notch} />

        {/* TITLE */}
        <Text style={styles.title}>Driving License</Text>

        {/* POINTS */}
        <View style={styles.pointsContainer}>

          <View style={styles.pointRow}>
            <View style={styles.tick}>
              <Icon name="check" size={14} color="#fff" />
            </View>
            <Text style={styles.pointText}>
              Photocopies and printouts of document{"\n"}will not be accepts
            </Text>
          </View>

          <View style={styles.pointRow}>
            <View style={styles.tick}>
              <Icon name="check" size={14} color="#fff" />
            </View>
            <Text style={styles.pointText}>
              The photo and all details must be{"\n"}clearly visible
            </Text>
          </View>

          <View style={styles.pointRow}>
            <View style={styles.tick}>
              <Icon name="check" size={14} color="#fff" />
            </View>
            <Text style={styles.pointText}>
              Only documents that are less than{"\n"}
              10 Mb in size and in JPG, JPEG, PNG{"\n"}
              ot PDF format will be accepted
            </Text>
          </View>

        </View>

        {/* ATTACH */}
        <Text style={styles.attachTitle}>Attach Driving License</Text>

        {/* UPLOAD BOX */}
        <TouchableOpacity style={styles.uploadBox}>
          <Icon name="upload-cloud" size={40} color="#9e9e9e" />
        </TouchableOpacity>

        {/* NOTE */}
        <Text style={styles.note}>
          <Text style={{ color: '#ff8c00' }}>Note:</Text> Please upload both sides of Driving License
        </Text>

        {/* SAMPLE IMAGES (NOW YOU CAN ADD REAL IMAGES) */}
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

        {/* Bottom Bar */}
        <View style={styles.bottomBar} />

      </View>
    </View>
  );
}

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
    paddingTop: 20,
  },

  notch: {
    width: 70,
    height: 10,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },

  pointsContainer: {
    width: '85%',
  },

  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 18,
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
  },

  pointText: {
    flex: 1,
    fontSize: 13,
    color: '#333',
    lineHeight: 18,
  },

  attachTitle: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },

  uploadBox: {
    width: 120,
    height: 100,
    backgroundColor: '#eee',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },

  note: {
    marginTop: 12,
    fontSize: 12,
    color: '#333',
  },

  sampleRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  sampleImg: {
    width: 110,
    height: 65,
    marginHorizontal: 8,
    borderRadius: 10,
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
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  bottomBar: {
    width: 120,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 10,
    position: 'absolute',
    bottom: 10,
  },

});