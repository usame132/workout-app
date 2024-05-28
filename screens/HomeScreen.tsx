import { Button,View,Text, FlatList } from "react-native";
import React from 'react';
import data from "../data.json"
import { Workout } from "../types/data";

export default function HomeScreen({navigation}: any)
{

      const renderItem = ({item}:{item: Workout}) =>
        (
          <View>  
          <Text>{item.name}</Text>
          <Text>{item.slug}</Text>

        </View>
        )
  
return(  
    <View>
    
      <FlatList data={data as Array<Workout>}
        renderItem={renderItem}
      />
    </View> 
    )
}