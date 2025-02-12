import React from 'react';
import { NavigationContainer } from '@react-navigation/native';  
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Home from '../Home/Home';
import GetStarted from '../GetStartedPage/GetStarted';
import Cart from '../Cart/Cart';



export type RootStackParamList = {
  Home: undefined,
  GetStarted: undefined,
  Cart: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
