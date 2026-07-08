import { Text, Image, ScrollView, ImageBackground, backgroundColor, View, TouchableOpacity } from "react-native";
import { SafeAreaView  } from "react-native-safe-area-context";
import Button from "../components/Button";
import { router } from "expo-router";


export default function Index() {

   

  return (

    <ImageBackground
      source={require("../assets/images/Rectangle 944.png")}
      style={{  borderRadius: 10, resizeMode: "cover"  , flex: 1,
        width: "100%",
        height: "100%",}}>

    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" , paddingLeft:30, paddingRight:30}}>
        
    <ScrollView showsVerticalScrollIndicator={false}> 
    
    <View
      style={{ marginTop:-100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <ImageBackground
      source={require("../assets/images/man.png")}
      style={{ alignSelf:"center", 
        width: 600,
        height: 600,}}>

        </ImageBackground>
    </View>
     
     
     
 <View style={{ justifyContent:"center", }}>
    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#595F67", marginTop: 30,  }}>
      Welcome To
    </Text>

    <Text style={{ fontSize: 44, fontWeight: "bold", color: "black", marginTop: 5,  }}>
      SwiftPay
    </Text>
     
     <View style={{marginTop:20 , }}>
      
      <Button
      onPress={()=>{router.push("./auth")}}
      title={"Let's Go"}
      width = {200}/>

      </View>
    </View>

      
  
     
    
    




    </ScrollView> 
    </SafeAreaView>
    </ImageBackground> 
  );
}
