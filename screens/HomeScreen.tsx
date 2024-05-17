import { Button,View,Text } from "react-native";
import React from 'react';


export default function HomeScreen({navigation}: any)
{
console.log("render home");
return(  
    <View>
       <Text> hello its my home screen</Text>
      <Button title="Go to planner"
       onPress={ () =>
    navigation.navigate("Root",{screen:"Planner"}) }
        />
    </View>

    )

}