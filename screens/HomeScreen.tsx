import { Button,View,Text, FlatList } from "react-native";
import React from 'react';
import data from "../data.json"

export default function HomeScreen({navigation}: any)
{

  
console.log("render home");
return(  
    <View>
    
      <FlatList data={data}
        renderItem={({item}) =>
          <View>
            <Text>{item.name}</Text>
          </View>
      }
      />
    </View> 
    )
}