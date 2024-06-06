import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'



const Cart = ({navigation}) => {
  return (
    <View style={{  flex:1}}>
    <Image source={require('../assets/img/cart-1.png')}
      resizeMode='contain'
      style={{
        width: 70,
        height: 70,
        marginLeft: 170,
        marginTop: 100
      }}
    />
    <Text style={{marginLeft:180,marginTop:40}}>Empty Cart!</Text>
    <Text style={{marginLeft:100}}>Add Product in your cart & start buying</Text>
  </View>
  )
}

export default Cart

const styles = StyleSheet.create({})