import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Payments from './Payments';

const Creditlimit = ({ navigation }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: -20 }} >
      <View style={[styles.box1]} >
        {/*First box*/}
        <Text style={{ fontSize: 10 }} >Total Credit limit</Text>
        <Text style={[styles.Text]}><MaterialCommunityIcons name="currency-inr" color={'red'} size={10} />0.00</Text>
        <View style={[styles.underline]}></View>
        <Text style={{ fontSize: 10 }} >Available Credit limit</Text>
        <Text style={[styles.Text]}><MaterialCommunityIcons name="currency-inr" color={'red'} size={10} />0.00</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Payments')}>
        <View style={[styles.box2]}>
          <Text style={{ fontSize: 10 }}> Overdue Amount</Text>
          <Text style={[styles.Text]}><MaterialCommunityIcons name="currency-inr" color={'red'} size={10} />223277.00</Text>
          < View style={[styles.underline]}></View>
          <Text style={{ fontSize: 10 }} >Curent Due</Text>
          <Text style={[styles.Text]}><MaterialCommunityIcons name="currency-inr" color={'red'} size={10} />0.00</Text>
        </View>
      </TouchableOpacity>
    </View>

  )
}

export default Creditlimit

const styles = StyleSheet.create({
  box1: {
    padding: 10,
    alignSelf: 'flex-start',
    width: '40%',
    height: '80%',
    borderWidth: 1,
    borderColor: '#887CD3',
    borderRadius: 8,
    backgroundColor: '#E4E2FA',
    marginTop: 20,
    marginLeft: 20
  },
  underline: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 5
  },
  Text: {
    color: 'red',
    fontSize: 10

  },
  box2: {
    padding: 10,
    alignSelf: 'flex-end',
    width: '120%',
    height: '100',
    borderWidth: 1,
    borderColor: '#e89a79',
    borderRadius: 8,
    backgroundColor: '#FFCEC7',
    marginTop: 20,
    marginRight: 30

  },

})