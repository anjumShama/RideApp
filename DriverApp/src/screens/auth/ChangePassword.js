import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

const ChangePasswordScreen = ({ navigation }) => {
  const [secure1, setSecure1] = useState(true);
  const [secure2, setSecure2] = useState(true);

  return (
    <View style={styles.root}>
      <View style={styles.card}>

        {/* Notch */}
        <View style={styles.notch} />

        {/* Title */}
        <Text style={styles.title}>Change Password</Text>
        <Text style={styles.subtitle}>
          Your new password must be different{"\n"}
          from previously used passwords
        </Text>

        {/* Current Password */}
        <Text style={styles.label}>Current Password</Text>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} secureTextEntry />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* New Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} secureTextEntry={secure1} />
          <TouchableOpacity onPress={() => setSecure1(!secure1)}>
            <Icon name={secure1 ? "eye-off" : "eye"} size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} secureTextEntry={secure2} />
          <TouchableOpacity onPress={() => setSecure2(!secure2)}>
            <Icon name={secure2 ? "eye-off" : "eye"} size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Earning')}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        {/* Bottom Gesture Bar */}
        <View style={styles.bottomBar} />

      </View>
    </View>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: width * 0.9,
    height: height * 0.9,
    backgroundColor: '#f5f5f5',
    borderRadius: 40,
    alignItems: 'center',
    paddingTop: 20,
  },

  notch: {
    width: 70,
    height: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginTop: 10,
  },

  subtitle: {
    fontSize: 13,
    color: '#9e9e9e',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 18,
  },

  label: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 25,
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },

  inputBox: {
    width: '85%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  input: {
    flex: 1,
  },

  forgot: {
    alignSelf: 'flex-end',
    marginRight: 30,
    marginTop: 8,
    fontSize: 13,
    color: '#ff8c00',
    textDecorationLine: 'underline',
  },

  button: {
    width: '75%',
    height: 50,
    backgroundColor: '#ff8c00',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,

    shadowColor: '#ff8c00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
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
    bottom: 15,
  },
});