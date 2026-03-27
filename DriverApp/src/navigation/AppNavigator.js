import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// AUTH
import Onboarding from '../screens/auth/Onboarding';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';
import OTPVerify from '../screens/auth/OTPVerify';
import NewPassword from '../screens/auth/NewPassword';
import ChangePassword from '../screens/auth/ChangePassword';

// SETUP
import Welcome from '../screens/setup/Welcome';
import ProfileSetup from '../screens/setup/ProfileSetup';
import DrivingDetails from '../screens/setup/DrivingDetails';
import BankDetails from '../screens/setup/BankDetails';
import GovernmentID from '../screens/setup/GovernmentID';

// HOME
import Home from '../screens/home/Home';
import LocationPermission from '../screens/home/LocationPermission';

// PROFILE
import Earning from '../screens/profile/earning';

// RIDE FLOW
import RideRequest from '../screens/ride/RideRequest';
import RideNavigation from '../screens/ride/RideNavigation';
import RideOTP from '../screens/ride/RideOTP';
import RideComplete from '../screens/ride/RideComplete';
import PaymentQR from '../screens/ride/PaymentQR';


import PolicyScreen from '../screens/ride/PolicyScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >

        {/* AUTH FLOW */}
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTPVerify" component={OTPVerify} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />

        {/* SETUP FLOW */}
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
        <Stack.Screen name="DrivingDetails" component={DrivingDetails} />
        <Stack.Screen name="BankDetails" component={BankDetails} />
        <Stack.Screen name="GovernmentID" component={GovernmentID} />
        <Stack.Screen name="LocationPermission" component={LocationPermission} />

        {/* HOME */}
        <Stack.Screen name="Home" component={Home} />

        {/* PROFILE */}
         <Stack.Screen name="Earning" component={Earning} /> 

        {/* RIDE FLOW */}
        <Stack.Screen name="RideRequest" component={RideRequest} />
        
        {/*  NEW POLICY SCREEN */}
        <Stack.Screen name="Policy" component={PolicyScreen} />

        <Stack.Screen name="RideNavigation" component={RideNavigation} />
        <Stack.Screen name="RideOTP" component={RideOTP} />
        <Stack.Screen name="RideComplete" component={RideComplete} />
        <Stack.Screen name="PaymentQR" component={PaymentQR} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}