import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import React from 'react';
import PlannerScreen from "./screens/PlannerScreen";
import Navigation from "./navigation"
import useCachedResources from './hooks/useCachedResources';

export default function App() {

  const isLoading= useCachedResources();
  console.log(isLoading);
  
  return (

  
      <Navigation/>
    
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
