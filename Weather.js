import React from "react"
import props from "prop-types"
import {StyleSheet,Text,View,StatusBar} from "react-native"
import { Ionicons  } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions={
    Haze:{
        iconName :"md-cloud-sharp",
        gradient:["#F2B53D","#BA3E05"],
        title:"Haze",
        subTitle:"Just Don't go OutSide"
    },
    Clouds:{
        iconName :"cloud",
        gradient:["#F2B53D","#BA3E05"],
        title:"Cloud",
        subTitle:"Clooooooooooooud"
    },
    Thunderstorm:{
        iconName:"thunderstorm-sharp",
        gradient:["#E4EE4B","#8CB0AF"],
        title:"Thunderstorm",
        subTitle:"So Scared...."
    },
    Drizzle:{
        iconName:"rainy",
        gradient:["#16D5CD","#0E8B86"],
        title:"Drizzle",
        subTitle:"Unpleasant rain... "
    },
    Rain:{
        iconName:"rainy",
        gradient:["00B4FF","043F58"],
        title:"Rain",
        subTitle:"You need to bring an umbrella."
    },
    Snow:{
        iconName:"snow",
        gradient:["#BBD2FF","#FFFFFF"],
        title:"Snow",
        subTitle:"I Like Snow!!"
    },
    Atmosphere:{
        iconName:"partly-sunny",
        gradient:["#717AE3","#1B1E4B"],
        title:"Atmosphere",
        subTitle:" What is Atmosphere??..."
    },
    Clear:{
        iconName:"sunny-outline",
        gradient:["#ED6D69","#FFFFFF"],
        title:"Sunny",
        subTitle:"Hey What are you Doing?.Go OutSide"
    },
    other:{
        iconName:"sunny-outline",
        gradient:["#ED6D69","#FFFFFF"],
        title:"Sunny",
        subTitle:"Hey What are you Doing?.Go OutSide"
    }

}
export default function Weather({temp,condition}){

    return(
            
            <LinearGradient style={style.Container}
            // Background Linear Gradient
            colors={weatherOptions[condition].gradient}>
                <StatusBar barStyle="light-content"/>
                <View style={style.halfContainer}>
                    <Ionicons  size={86} name={weatherOptions[condition].iconName || "other"} color="white"></Ionicons >
                    <Text style={style.text}>{temp}</Text>

                </View>
                <View style={{...style.halfContainer, ...style.textContainer}}>
                    <Text style={style.title}>{weatherOptions[condition].title || "other"}</Text>
                    <Text style={style.subTitle}>{weatherOptions[condition].subTitle || "other"}</Text>
                </View>

            </LinearGradient>

    )



}
Weather.prototype={
    temp:props.number.isRequired, 
    condition:props.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds"]).isRequired
}

const style=StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color:"white",
        fontSize:32,
        
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    },
    textContainer:{

    },
    title:{
        fontSize:34,
        fontWeight:"300",
        marginBottom:10,
        color:"white"
    },
    subTitle:{
        fontSize:20,
        fontWeight:"200",
        color:"white"
    }

})