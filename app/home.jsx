import { Text, Image, ScrollView, ImageBackground, backgroundColor, View, TouchableOpacity , Dimensions , Alert } from "react-native";
import { SafeAreaView  } from "react-native-safe-area-context";
import React from 'react';
import Button from "../components/Button";
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig'; 





const Home = () => {

const user = auth.currentUser;

const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        Alert.alert('Signed Out', 'You have been successfully logged out.');
        // Note: The global layout automatically detects this logout and redirects to /login!
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
    };
    return (

       <SafeAreaView style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" , paddingLeft:30, paddingRight:30}}>
                
          <ScrollView showsVerticalScrollIndicator={false}> 
                
             <View style={{gap:10 , marginTop:20}}>
                <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>Welcome To SwiftPay</Text>
                  {user ? (
             <View style={{ gap:10,  marginTop: 20 }}>
               <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }} >Logged in as:</Text>
               <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>{user.email}</Text>
               <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>User ID: {user.uid}</Text>
             </View>) : (<Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>No active session found.</Text>)}

                <Button
                   onPress={()=>{handleSignOut}}
                   title={"Log Out"}
                   width = {150}/>
             </View>
          </ScrollView> 
       </SafeAreaView>

    
    )
}



export default Home;