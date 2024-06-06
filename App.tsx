import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import Home2 from './src/Home2';
import Home3 from './src/Home3';
import Home4 from './src/Home4';
import Home5 from './src/Home5';
import Mainhome from './component/Mainhome';
import Splash from './src/Splash';
import Profiles from './component/Profiles';
import Imageprf from './component/Imageprf';
import AddBusiness from './component/AddBusiness';
import Wishlist from './component/Wishlist';
import FAQs from './component/FAQs';
import Header1 from './component/Header1';
import Cart from './component/Cart';
import Search from './component/Search';
import Flatlist from './component/Flatlist';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer >
   
    <Stack.Navigator initialRouteName='Splash' >
    <Stack.Group screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Home2" component={Home2} />
    <Stack.Screen name="Home3" component={Home3} />
    <Stack.Screen name="Home4" component={Home4} />
    <Stack.Screen name="Home5" component={Home5} />
    <Stack.Screen name="Mainhome" component={Mainhome} />
    <Stack.Screen name="Splash" component={Splash}/>
    </Stack.Group>
     <Stack.Group screenOptions={{headerShown: true}}>
    <Stack.Screen name="Profiles"  component={Profiles} />
    <Stack.Screen name="Imageprf"  component={Imageprf}/>
    <Stack.Screen name="AddBusiness"  component={AddBusiness}/>
    <Stack.Screen name="Header1"  component={Header1}/>
    <Stack.Screen name="Wishlist"  component={Wishlist}/>
    <Stack.Screen name="FAQs"  component={FAQs}/>
    <Stack.Screen name="Cart"  component={Cart}/>
    <Stack.Screen name="Search"  component={Search}/>
    <Stack.Screen name="Flatlist"  component={Flatlist}/>
    </Stack.Group>
    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
