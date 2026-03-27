import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>

      {/* TOP IMAGE */}
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/driver.jpg')}
          style={styles.image}
        />
      </View>

      {/* TEXT */}
      <Text style={styles.title}>
        <Text style={styles.orange}>Earn Money</Text> With This
      </Text>

      <Text style={styles.subtitle}>Driver App</Text>

      <Text style={styles.desc}>
        Lorem ipsum dolor sit, amet consectetur adipiscing elit. Pariatur veniam
        cum nesciunt ad amet exercitationem nulla animi molestias dignissimos.
      </Text>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* SIGN IN */}
      <Text style={styles.footer}>
        Already have an account?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Login')}
        >
          Sign in
        </Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  imageWrapper: {
    width: '100%',
    height: 420,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
    marginTop: 10,
    elevation: 8,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 25,
  },

  orange: {
    color: '#ff8c00',
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },

  desc: {
    textAlign: 'center',
    color: '#666',
    fontSize: 13,
    marginBottom: 25,
  },

  button: {
    width: '90%',
    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footer: {
    marginTop: 15,
    fontSize: 14,
  },

  link: {
    color: '#ff8c00',
    fontWeight: '600',
  },
});