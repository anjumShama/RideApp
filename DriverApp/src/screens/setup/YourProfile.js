import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  SafeAreaView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function YourProfile({navigation}) {
  const [name, setName] = useState('Sheikh Khurram');
  const [email, setEmail] = useState('khurram@example.com');
  const [phone, setPhone] = useState('+92 300 1234567');

  const rating = 4.8;
  const totalRides = 342;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.topSpacer} />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={22} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>Your Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PROFILE IMAGE */}
        <View style={styles.avatarWrapper}>
          <Image
            source={{uri: 'https://i.pravatar.cc/300'}}
            style={styles.profileImg}
          />
          <TouchableOpacity style={styles.cameraBtn}>
            <Icon name="camera" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* RATING */}
        <View style={styles.ratingContainer}>
          <View style={styles.ratingBox}>
            <Icon name="star" size={18} color="#ff8c00" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
          <Text style={styles.ratingSubText}>{totalRides} rides</Text>
        </View>

        {/* FORM */}
        <View style={styles.formContainer}>
          {/* NAME */}
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputBox}>
            <Icon name="account-outline" size={20} color="#ff8c00" />
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              placeholderTextColor="#999"
            />
          </View>

          {/* EMAIL */}
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputBox}>
            <Icon name="email-outline" size={20} color="#ff8c00" />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
          </View>

          {/* PHONE */}
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.inputBox}>
            <Icon name="phone-outline" size={20} color="#ff8c00" />
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter your phone"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
          </View>
        </View>
      </ScrollView>

      {/* UPDATE BUTTON */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ProfileSetup')}
      >
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

  backBtn: {
    position: 'absolute',
    left: 0,
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },

  /* AVATAR */
  avatarWrapper: {
    alignSelf: 'center',
    marginTop: 30,
  },

  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  cameraBtn: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  /* RATING */
  ratingContainer: {
    alignItems: 'center',
    marginTop: 15,
  },

  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff4e6',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    elevation: 3,
  },

  ratingText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginLeft: 6,
  },

  ratingSubText: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },

  /* FORM */
  formContainer: {
    marginTop: 30,
  },

  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
    marginLeft: 5,
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 55,
    borderRadius: 14,
    paddingHorizontal: 15,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
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
