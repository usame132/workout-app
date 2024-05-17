import { Button,View,Text } from "react-native";
import React from 'react';


export default function HomeScreen({navigation}: any)
{

return(  
    <View>
       <Text> hello its my home screen</Text>
      <Button title="Go to planner"
       onPress={ () =>
    navigation.push("Root",{screen:"Planner"}) }
        />
    </View>

    )

}