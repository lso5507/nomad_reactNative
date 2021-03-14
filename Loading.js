import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Loading(){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Get Fucking Weather
            </Text>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    text:{
        fontSize:20,
        color:"yellow"
    }
  });
  