import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const FAQs = () => {
  return (

    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Text style={{ color: 'black', marginTop: 10, fontSize: 15 }}>How can I place an order online?</Text>
      <Image source={require('../assets/img/chevron-right-white-.png')}
        style={{
          width: 30,
          height: 30,
          marginLeft: 350,
          marginTop: -20,
          alignItems: 'center',
          color: 'White'
        }}
      />
      <Text style={{ color: 'black', marginTop: 10, fontSize: 15 }}>What Payment methods do you accept?</Text>
      <Image source={require('../assets/img/chevron-right-white-.png')}
        style={{
          width: 30,
          height: 30,
          marginLeft: 350,
          marginTop: -20,
          alignItems: 'center',
          color: 'White'
        }}
      />
      <Text style={{ color: 'black', marginTop: 10, fontSize: 15 }}>Can I track the status of my oeder?</Text>
      <Image source={require('../assets/img/chevron-right-white-.png')}
        style={{
          width: 30,
          height: 30,
          marginLeft: 350,
          marginTop: -20,
          alignItems: 'center',
          color: 'White'
        }}
      />
      <Text style={{ color: 'black', marginTop: 10, fontSize: 15 }}>Are there any discounts or promotions</Text>
      <Text style={{ color: 'black', marginTop: 0, fontSize: 15 }}>currently available?</Text>
      <Image source={require('../assets/img/chevron-right-white-.png')}
        style={{
          width: 30,
          height: 30,
          marginLeft: 350,
          marginTop: -35,
          alignItems: 'center',
          color: 'White'
        }}
      />

    </View>


  )
}

export default FAQs

const styles = StyleSheet.create({})