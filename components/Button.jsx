import { TouchableOpacity, Text } from "react-native";





const Button = ({ title , onPress , borderWidth = 2, borderColor = "#000000" , backgroundColor = "#000000" , borderRadius = 5,
    width = 300, height = 40 , textColor = "#fff" , }) => {

    

  return (
    <TouchableOpacity onPress={onPress}
    
      style={{ borderRadius: borderRadius,
        
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor,
        borderWidth: borderWidth,
        borderColor: borderColor,
        width: width,
        height: height,
        
        
        
      }}
    >
       
        
        
      
       

       

      
      <Text style={{ color: textColor , fontWeight: "bold", fontSize: 16 }}>{title}</Text>
   
    </TouchableOpacity>
  );
}

export default Button;
