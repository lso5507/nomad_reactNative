import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from './Loading'
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from "axios";
import Weather from './Weather';

// weather APIKEY
const APIKEY="29089a1a0389863a0c0fe26bee30f8bc";
export default class App extends React.Component {
state={
isLoading:true
}
getWeather = async(latitude,longitude)=>{
  const API = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${APIKEY}&lat=${latitude}&lon=${longitude}&units=metric`
  const {data:{list}} = await axios.get(API);
  console.log(list)
  
  this.setState({isLoading:false,temp:list[0].main.temp,condition:list[0].weather[0].main})
  
} 
getLocation = async()=>{
  
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const{
        coords:{latitude,longitude}}= await Location.getCurrentPositionAsync()
        
      this.getWeather(latitude,longitude);

    } catch (error) {
      Alert.alert("Permission Error","Check your Code")
    }

  
 
}
componentDidMount(){
  this.getLocation()
}

render(){
  const {isLoading,temp,condition}=this.state
  return(isLoading?<Loading/>:<Weather temp={this.state.temp} condition={this.state.condition}/>)
  
}


}
