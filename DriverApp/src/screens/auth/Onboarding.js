import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Onboarding({navigation}) {

return(

<View style={styles.container}>

<Text style={styles.title}>
Earn Money With This Driver App
</Text>

<Text style={styles.subtitle}>
Start earning by accepting ride requests from nearby customers.
</Text>

<TouchableOpacity
style={styles.button}
onPress={()=>navigation.navigate("Register")}
>

<Text style={styles.buttonText}>Create Account</Text>

</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate("Login")}
>

<Text style={styles.loginText}>
Already have account? Sign in
</Text>

</TouchableOpacity>

</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:'center',
alignItems:'center',
padding:20
},

title:{
fontSize:28,
fontWeight:'bold',
textAlign:'center'
},

subtitle:{
marginTop:15,
textAlign:'center',
color:'gray'
},

button:{
backgroundColor:'#ff8c00',
padding:15,
borderRadius:25,
marginTop:30,
width:'80%'
},

buttonText:{
color:'#fff',
textAlign:'center',
fontWeight:'bold'
},

loginText:{
marginTop:20
}

});