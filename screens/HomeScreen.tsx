import { Button,View,Text, FlatList } from "react-native";
import React from 'react';
import data from "../data.json"
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";

export default function HomeScreen({navigation}: any)
{

return(  
    <View>
    
      <FlatList data={data as Array<Workout>}
        renderItem={WorkoutItem}
        
      />
    </View> 
    )
}