import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Imageprf from './Imageprf'
import { Button, ButtonGroup, withTheme } from '@rneui/themed';
import Header1 from './Header1';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';


const Payments = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Header1 navigation={navigation} />

          <View style={{ flexDirection: "row", justifyContent: 'space-between' }} >
            <View style={[styles.box1]} >
              {/*First box*/}
              <Text style={{ fontSize: 12 }} >Total Purchase</Text>
              <Text style={[styles.Text]}><MaterialCommunityIcons name="currency-inr" color={'black'} size={15} />-18.00</Text>
              <View style={[styles.underline]}></View>
              <Text style={{ fontSize: 12 }} >Last Year Purchase</Text>
              <Text style={[styles.Text]}><MaterialCommunityIcons name="currency-inr" color={'black'} size={15} />229326.00</Text>
            </View>
            {/*Second box*/}
            <View style={[styles.box2]}>
              <Text style={{ fontSize: 12, textAlign: 'left' }}>Yearly Trend(2023-24)</Text>
              <Text style={[styles.Text2]}> -97.30    <Image source={require('../assets/img/trending-up.png')} style={{ width: 30, height: 30 }} /></Text>

              <Text style={{ fontSize: 12, textAlign: 'left', marginTop: 20 }} >Compared to last year</Text>
            </View>
          </View>
          <View style={{ marginTop: 40, padding: 10 }}>
            <Text style={{
              borderWidth: 2,
              color: 'black',
              borderColor: '#dfe0e4',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: '600',
              width: '100%',
              height: 250,
              padding: 20
            }}>Category Wise Purchase</Text>
            <Image source={require('../assets/img/layer-1.png')}
              style={{
                width: 30,
                height: 30,
                marginBottom: 40,
                position: 'absolute',
                marginHorizontal: 50,
                marginVertical: 80,
                width: 40,
                height: 40,
                marginLeft: 40,
                padding: 10


              }} />
            <Text style={{ position: 'absolute', paddingLeft: 140, marginTop: 120, color: 'black', fontSize: 17, marginLeft: -100 }}>Other</Text>

            <Text style={{
              color: '#EAE6FF',
              borderWidth: 1,
              borderColor: '#EAE6FF',
              backgroundColor: '#EAE6FF',
              position: 'absolute',
              color: 'black',
              width: '100%',
              height: 30,
              marginLeft: 10,
              marginTop: 150,
              paddingLeft: 20,
              padding: 4
            }}>Total purchase</Text>

            <Text style={{
              position: 'absolute',
              marginLeft: 280,
              marginTop: 150,
              padding: 4,
              color: 'black',
            }}><MaterialCommunityIcons name="currency-inr" color={'black'} size={13} />-17.70</Text>

          </View>
          <Image source={require('../assets/img/layer-1.png')}
            style={{
              width: 30,
              height: 30,
              marginBottom: 40,
              position: 'absolute',
              marginHorizontal: 50,
              marginVertical: 80,
              width: 40,
              height: 40,
              marginLeft: 40,
              padding: 10,
              marginTop: 480


            }} />
          <Text style={{ position: 'absolute', paddingLeft: 140, marginTop: 480, color: 'black', fontSize: 17, marginLeft: -50 }}>Other</Text>
          <Text style={{
            position: 'absolute',
            marginLeft: 80,
            marginTop: 500,
            padding: 4,
            color: 'black',
          }}><MaterialCommunityIcons name="currency-inr" color={'black'} size={13} />-17.70</Text>
          <Text style={{ marginVertical: 100, position: 'absolute', color: 'black', fontSize: 12, alignSelf: 'flex-end', paddingRight: 30, color: 'blue', marginTop: 500 }}>100.00%</Text>

          <View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Payments

const styles = StyleSheet.create({
  box1: {
    padding: 10,
    marginLeft: 10,
    width: '45%',
    height: 140,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    marginTop: 20,


  },
  underline: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 5
  },

  box2: {
    padding: 10,
    marginRight: 10,
    width: '45%',
    height: 140,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 20
  },

  Text: {
    color: 'black',
    fontSize: 15

  },
  Text2: {
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#FFCEC7',
    backgroundColor: '#FFCEC7',
    borderRadius: 25,
    width: '100%',
    height: 40,
    textAlign: 'left',
    paddingLeft: 10,
    marginTop: 20,
    fontWeight: '600',
    color: 'red',


  },
})