import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Cart from './Cart'


const Wishlist = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
    <View style={{  flex: 1 }}>
      <Image source={require('../assets/img/cart-1.png')}
        resizeMode='contain'
        style={{
          width: 30,
          height: 30,
          marginLeft: 280,
          marginTop: -30
        }}
      />
     
    </View>
    </TouchableOpacity>
  )

}

export default Wishlist

const styles = StyleSheet.create({})