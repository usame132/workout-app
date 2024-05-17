import { Button,View,Text } from "react-native";
import React from 'react';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";


export default function HomeScreen({navigation}: any)
{

return(  
    <View>
       <Text> hello its my home screen</Text>
      <Button title="Go to planner"
       onPress={ () =>
         navigation.push ("palnner") }
        />
    </View>

    )

}