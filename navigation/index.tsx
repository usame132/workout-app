
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";


const Stack = createNativeStackNavigator ();

export default function Navigation (){
return(
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="palnner" component={PlannerScreen} />

      </Stack.Navigator>
    </NavigationContainer>

)

} 


















