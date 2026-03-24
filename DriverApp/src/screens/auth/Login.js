import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({navigation}){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

return(

<View style={styles.container}>

<Text style={styles.title}>Sign In</Text>

<TextInput
style={styles.input}
placeholder="Email"
value={email}
onChangeText={setEmail}
/>

<TextInput
style={styles.input}
placeholder="Password"
secureTextEntry
value={password}
onChangeText={setPassword}
/>

<TouchableOpacity
style={styles.button}
onPress={()=>navigation.navigate("Welcome")}
>

<Text style={styles.buttonText}>Login</Text>

</TouchableOpacity>

</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20,
justifyContent:'center'
},

title:{
fontSize:26,
fontWeight:'bold',
marginBottom:30
},

input:{
backgroundColor:'#fff',
padding:12,
borderRadius:10,
marginBottom:20,
borderWidth:1,
borderColor:'#ddd'
},

button:{
backgroundColor:'#ff8c00',
padding:15,
borderRadius:25
},

buttonText:{
color:'#fff',
textAlign:'center',
fontWeight:'bold'
}

});