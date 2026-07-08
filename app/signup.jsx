import { Text, Image, ScrollView, ImageBackground, backgroundColor, View, TouchableOpacity , Dimensions , TextInput, Pressable } from "react-native";
import { SafeAreaView  } from "react-native-safe-area-context";
import Button from "../components/Button";
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig'; 





const { width, height } = Dimensions.get("window");

const Signup = () => {

const [email, setEmail] = useState('');
 
const [password, setPassword] = useState(''); 

const [confirmPassword, setConfirmPassword] = useState('');

const handleSignUp = (email, password, confirmPassword) => {
  createUserWithEmailAndPassword(auth, email, password, confirmPassword)
    .then((userCredential) => {router.push("./home")})
    .catch((error) => console.error(error.message));
};






    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" , paddingLeft:30, paddingRight:30}}>
                
            <ScrollView showsVerticalScrollIndicator={false}> 
                

                

                
                <ImageBackground
                      source={require("../assets/images/Rectangle 944.png")}
                      style={{  borderRadius: 10, 
                        width: width,
                        height: height * 0.5,}}>

                 <View style={{justifyContent:"space-between" , alignItems:"center", flexDirection:"row", marginTop: 5, paddingLeft:15}}>
                    
                    <Pressable onPress = {()=> router.back()}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                    </Pressable>

                   <View style={{flexDirection:"row", justifyContent:"center"   , gap:10}}>
                    <Image
                      source={require("../assets/images/logo.png")}
                      style={{ width: 30, height: 40 }}>

                    </Image>
                    
                    <Text style={{color:"black", fontSize: 40, fontWeight: "bold"}}>
                        SwiftPay
                    </Text>
                   </View>

                   <View style={{ width: 50 }} />

                 </View>
                  

                  <View style={{ justifyContent:"center" , marginTop:20 , alignItems:"center" , }}>
                    <Image
                      source={require("../assets/images/womanlaptop.png")}
                      style={{ width: 317, height: 265 }}>

                    </Image>

                  </View>

                  
                  

                </ImageBackground>
                
                <View style={{gap:25 , marginTop:15}}>

                 <View style={{ justifyContent:"center" , marginTop:5 , flexDirection:"row", alignItems:"center" , gap:10}}>
                    <Image
                      source={require("../assets/images/Rectangle 867.png")}
                      style={{ width: 20, height: 20 }}>

                    </Image>
                    <Image
                      source={require("../assets/images/Rectangle 867.png")}
                      style={{ width:20, height: 20 }}>

                    </Image>
                    <Image
                      source={require("../assets/images/Rectangle 865.png")}
                      style={{ width:20, height: 20 }}>

                    </Image>

                  </View>

                
                  <View style={{gap:15 , justifyContent:"center" , alignSelf:"center"}}>
                    <TextInput placeholder = "    Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style = {{borderWidth:2 , borderColor: "#595F67", borderRadius:10, width: 300, height: 40 , color: "#595F67"}}
                    />

                    <TextInput placeholder = "    Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style = {{borderWidth:2 , borderColor: "#595F67", borderRadius:10, width: 300, height: 40 , color: "#595F67"}}
                    />

                    <TextInput placeholder = "    Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    style = {{borderWidth:2 , borderColor: "#595F67", borderRadius:10, width: 300, height: 40 , color: "#595F67"}}
                    />

                  </View>
                 
                 <View style={{paddingLeft:0, paddingRight:0 , alignSelf:"center" , gap: 10}}>
                   
                   <Button
                   onPress={()=>{handleSignUp(email, password, confirmPassword)}}
                   title={"Create Account"}
                   width = {300}/>


                  
                 </View>

                </View>



            </ScrollView> 
        </SafeAreaView>
    )
}

export default Signup;