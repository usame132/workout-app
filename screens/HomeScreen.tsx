import { Button,View,Text, FlatList } from "react-native";
import React from 'react';
import data from "../data.json"

export default function HomeScreen({navigation}: any)
{

      const renderItem = ({item}:{item: any}) =>
        (
          <View>
          <Text>{item.name}</Text>
          <Text>{item.slug}</Text>

        </View>
        )
  
return(  
    <View>
    
      <FlatList data={data}
        renderItem={renderItem}
      />
    </View> 
    )
}