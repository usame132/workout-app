import { Button,View,Text } from "react-native";
import React from 'react';
import data from "../data.json"

export default function HomeScreen({navigation}: any)
{
console.log("render home");
return(  
    <View>
       <Text> hello its my home screen</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>

    )

}