import { Button,View,Text } from "react-native";
import React from 'react';

export default function PlannerScreen({navigation}:any)
{
    console.log("render paln");

    return(
            <View>
                    <Text> hello its my Planner screen</Text>
                    <Button title="Go to home" onPress={ () =>
                    navigation.navigate("Home") } />
            </View>

    )

}