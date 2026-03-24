import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileSetup from '../screens/setup/ProfileSetup';
import DrivingDetails from '../screens/setup/DrivingDetails';
import BankDetails from '../screens/setup/BankDetails';
import GovernmentID from '../screens/setup/GovernmentID';
import LocationPermission from '../screens/home/LocationPermission';

import OTPVerify from '../screens/auth/OTPVerify';
import Onboarding from '../screens/auth/Onboarding';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';
import Welcome from '../screens/setup/Welcome';
import Home from '../screens/home/Home';

import RideRequest from '../screens/ride/RideRequest';
import RideNavigation from '../screens/ride/RideNavigation';
import RideOTP from '../screens/ride/RideOTP';
import RideComplete from '../screens/ride/RideComplete';
import PaymentQR from '../screens/ride/PaymentQR';
import NewPassword from '../screens/auth/NewPassword';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

return (

<NavigationContainer>

<Stack.Navigator screenOptions={{headerShown:false}}>

<Stack.Screen name="Onboarding" component={Onboarding} />

<Stack.Screen name="Register" component={Register} />

<Stack.Screen name="Login" component={Login} />

<Stack.Screen name="Welcome" component={Welcome} />

<Stack.Screen name="Home" component={Home} />

<Stack.Screen name="ProfileSetup" component={ProfileSetup} />
<Stack.Screen name="DrivingDetails" component={DrivingDetails} />
<Stack.Screen name="BankDetails" component={BankDetails} />
<Stack.Screen name="GovernmentID" component={GovernmentID} />
<Stack.Screen name="LocationPermission" component={LocationPermission} />

<Stack.Screen name="RideRequest" component={RideRequest} />
<Stack.Screen name="RideNavigation" component={RideNavigation} />
<Stack.Screen name="RideOTP" component={RideOTP} />
<Stack.Screen name="RideComplete" component={RideComplete} />
<Stack.Screen name="PaymentQR" component={PaymentQR} />
<Stack.Screen name="OTPVerify" component={OTPVerify} />
<Stack.Screen name="NewPassword" component={NewPassword} />
</Stack.Navigator>

</NavigationContainer>

)

}