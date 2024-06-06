
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Dashboard from './Dashboard'
import Orders from './Orders'
import Payments from './Payments'
import Profiles from './Profiles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Purchase from './Purchase'



const Tab = createBottomTabNavigator();
const Mainhome = () => {
  return (


    <Tab.Navigator screenOptions={{ headerShown: false }}>

      < Tab.Screen name="Dasboard" component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image source={require('../assets/img/action--dashboard.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              />

            </View>
          )
        }} />
      < Tab.Screen name="Orders" component={Orders}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image source={require('../assets/img/action--alarm1.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              />

            </View>
          )
        }} />
      < Tab.Screen name="Purchase" component={Purchase}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image source={require('../assets/img/action--face.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              />

            </View>
          )
        }} />
      < Tab.Screen name="Payments" component={Payments}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image source={require('../assets/img/action--alarm.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              />

            </View>
          )
        }} />
    </Tab.Navigator >

  );
};
export default Mainhome
const styles = StyleSheet.create({})