import { Text, Image, ScrollView, ImageBackground, backgroundColor, View, TouchableOpacity , Dimensions } from "react-native";
import { SafeAreaView  } from "react-native-safe-area-context";
import Button from "../components/Button";
import { router } from "expo-router";





const { width, height } = Dimensions.get("window");

const Auth = () => {
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" , paddingLeft:30, paddingRight:30}}>
                
            <ScrollView showsVerticalScrollIndicator={false}> 
                

                

                
                <ImageBackground
                      source={require("../assets/images/Rectangle 944.png")}
                      style={{  borderRadius: 10, 
                        width: width,
                        height: height * 0.67,}}>

                 <View style={{flexDirection:"row", justifyContent:"center" , marginTop: 5 , gap:10}}>
                    <Image
                      source={require("../assets/images/logo.png")}
                      style={{ width: 30, height: 40 }}>

                    </Image>
                    
                    <Text style={{color:"black", fontSize: 40, fontWeight: "bold"}}>
                        SwiftPay
                    </Text>
                 </View>
                  

                  <View style={{ justifyContent:"center" , marginTop:5 , flexDirection:"row", alignItems:"center" , gap:40}}>
                    <Image
                      source={require("../assets/images/woman1.png")}
                      style={{ width: 200, height: 180 }}>

                    </Image>
                    <Image
                      source={require("../assets/images/man1.png")}
                      style={{ width:60, height: 210 }}>

                    </Image>

                  </View>

                  <View style={{justifyContent:"center" , alignItems:"center" }}>
                    <Image
                      source={require("../assets/images/manwoman.png")}
                      style={{ width: 500, height: 190 }}>

                    </Image>
                    

                  </View>

                </ImageBackground>
                
                <View style={{gap:25 , marginTop:15}}>

                 <View style={{ justifyContent:"center" , marginTop:5 , flexDirection:"row", alignItems:"center" , gap:10}}>
                    <Image
                      source={require("../assets/images/Rectangle 865.png")}
                      style={{ width: 20, height: 20 }}>

                    </Image>
                    <Image
                      source={require("../assets/images/Rectangle 867.png")}
                      style={{ width:20, height: 20 }}>

                    </Image>
                    <Image
                      source={require("../assets/images/Rectangle 867.png")}
                      style={{ width:20, height: 20 }}>

                    </Image>

                  </View>

                
                  <View  style={{flex: 1,justifyContent: "center",alignItems: "center",}}>
                    <Text style={{color:"black", fontSize: 35, fontWeight: "bold" , textAlign:"center"}}>
                        Easy Online Payment
                    </Text>
                    <Text style={{color:"#595F67", fontSize: 15, fontWeight: "normal" , textAlign:"center"}}>
                        Make your payment experience more better {"\n"} today. No additional admin fees
                    </Text>
                  </View>
                 
                 <View style={{justifyContent:"center" ,alignItems:"center" , alignSelf:"center" , gap: 10}}>
                   
                   <Button
                   onPress={()=>{router.push("./login")}}
                   title={"Login"}
                   width = {100}/>
                   <Button
                   onPress={()=>{router.push("./signup")}}
                   title={"Sign Up"}
                   width = {100}
                   backgroundColor={"white"}
                   textColor="black"/>
                 </View>

                </View>



            </ScrollView> 
        </SafeAreaView>
    )
}

export default Auth;