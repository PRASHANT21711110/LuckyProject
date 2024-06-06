import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Home5 from '../src/Home5'
import Header from './Header1'


const AddBusiness = ({ navigation }) => {
  return (
    <View style={[styles.text]}>
      <Text style={{ color: 'black' }}>Name: Karsan[MXC1416]</Text>
      <Text style={{ marginTop: 20 }}>Address:</Text>
      <Text style={{ marginTop: 40 }}>Shipping Address:</Text>
      <Text style={{ marginTop: 40 }}>Phone:6396585160           mxon ID: MXC1416</Text>

      <View style={{ marginTop: 200, alignItems: 'center', }}>
        <Button
          title="AddBusiness" onPress={() => navigation.navigate('Home5')}
        />
      </View>
    </View>
  )
}

export default AddBusiness

const styles = StyleSheet.create({
  text: {
    padding: 10,
    alignSelf: 'flex-start',
    width: '90%',
    height: '40%',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 20
  },


})