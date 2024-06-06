import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, ButtonGroup, withTheme } from '@rneui/themed';
import Header1 from './Header1';
import Dropdown from './Dropdown'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Orders = ({ navigation }) => {
  return (
    <>
      <Header1 navigation={navigation} />
      <View style={{
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#dfe0e4',
        borderRadius: 8,
        backgroundColor: '#ffffff',
        borderColor: '#dfe0e4',
        borderRadius: 8,
        backgroundColor: '#ffffff',
      }}>

        <Text style={{
          color: 'black',
          padding: 10,
          alignSelf: 'flex-start',
          width: '100%',
          height: 160,
          marginTop: 40,
          fontSize: 12
        }} >Orders Overview</Text>

        {/* others */}
        <Image source={require('../assets/img/layer-1.png')} style={{ width: 35, height: 35, position: 'absolute', marginHorizontal: 10, marginVertical: 100 }} />
        <Text style={{ marginHorizontal: 60, marginVertical: 100, position: 'absolute', color: 'black', fontSize: 12 }}>Other{"\n"}-17.70</Text>
        <Text style={{ marginVertical: 100, position: 'absolute', color: 'black', fontSize: 12, alignSelf: 'flex-end', paddingRight: 30, color: 'blue' }}>100.00%</Text>

      </View>
      <View style={{
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#dfe0e4',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        borderColor: '#dfe0e4',
        backgroundColor: '#ffffff',
        marginTop: 40

      }}>
        <Text style={{
          color: 'black',
          padding: 10,
          alignSelf: 'flex-start',
          width: '100%',
          height: 80,
          fontSize: 12,
          marginHorizontal: 10,
          marginVertical: 20
        }} >Recent Orders </Text>
        <Dropdown />
        <Text style={{
          color: '#7558ff',
          fontSize: 15,
          fontWeight: '600',
          position: 'absolute',
          marginHorizontal: 140,
          marginVertical: 80
        }} onPress={() => navigation.navigate("RecentOrders")} >See All Orders </Text>
        <MaterialCommunityIcons name="chevron-right" color={'#7558ff'} size={20} style={{ position: 'absolute', paddingLeft: 240, marginVertical: 81 }}
          onPress={() => navigation.navigate("RecentOrders")}
        />
      </View>

      <View style={{
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#dfe0e4',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        borderColor: '#dfe0e4',
        backgroundColor: '#ffffff',
        marginTop: 40

      }}>
        <Text style={{
          color: 'black',
          padding: 10,
          alignSelf: 'flex-start',
          width: '100%',
          height: 100,
          fontSize: 12,
          marginHorizontal: 10,
          marginVertical: 20
        }} >Closed Orders </Text>
        <Dropdown />
      </View>
    </>

  )

}

export default Orders;
const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'
  },
});

