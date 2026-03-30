import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

export default function BankDetailsScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <View style={styles.card}>

        {/* Notch */}
        <View style={styles.notch} />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Bank Account Details</Text>

          <TouchableOpacity
            style={styles.doneBtn}
            onPress={() => navigation.navigate('DrivingDetails')}
          >
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>

        {/* Points */}
        <View style={styles.pointsContainer}>

          <View style={styles.pointRow}>
            <View style={styles.tick}>
              <Icon name="check" size={14} color="#fff" />
            </View>
            <Text style={styles.pointText}>
              Upload Back Document (Passbook,{"\n"}
              Cancelled Cheque, Bank Statement,{"\n"}
              or Digital Account Screenshot
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

        {/* Attach Title */}
        <Text style={styles.attachTitle}>
          Attach Back Account Details
        </Text>

        {/* Upload Box */}
        <TouchableOpacity style={styles.uploadBox}>
          <Icon name="upload-cloud" size={60} color="#000" />
        </TouchableOpacity>

        {/* Update Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
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
    marginBottom: 10,
  },

  header: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },

  doneBtn: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#ff8c00',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,

    shadowColor: '#ff8c00',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },

  doneText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  pointsContainer: {
    width: '85%',
    marginTop: 20,
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

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  pointText: {
    flex: 1,
    fontSize: 13,
    color: '#9e9e9e',
    lineHeight: 18,
  },

  attachTitle: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: 30,
    color: '#000',
  },

  uploadBox: {
    width: width * 0.75,
    height: 160,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
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

  bottomBar: {
    width: 120,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 10,
    position: 'absolute',
    bottom: 10,
  },

});