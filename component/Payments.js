import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Button, ButtonGroup, withTheme } from '@rneui/themed';
import Imageprf from './Imageprf';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Wishlist from './Wishlist';
import Header1 from './Header1';
const Payments = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Header1 navigation={navigation} />
          <View style={{ flexDirection: "row", justifyContent: 'space-between' }} >
            <View style={{
              padding: 10, alignSelf: 'flex-start', width: '48%', height: '100%', borderWidth: 1,
              borderColor: '#e89a79', borderRadius: 8, marginTop: 0,
            }}>
              <Text style={{ color: '#3d3c3c', fontSize: 10 }}> Overdue Amount</Text>
              <Text style={{ color: 'red', fontSize: 10 }}><MaterialCommunityIcons name="currency-inr" color={'red'} size={10} />48628.46</Text>


            </View>

            <View style={{ padding: 10, alignSelf: 'flex-end', width: '48%', height: '100%', borderWidth: 1, borderColor: '#887CD3', borderRadius: 8, backgroundColor: '#E4E2FA', marginTop: 50 }}>
              <Text style={{ color: '#3d3c3c', fontSize: 10 }}> Overdue Amount</Text>
              <Text style={{ color: 'red', fontSize: 10 }}><MaterialCommunityIcons name="currency-inr" color={'red'} size={10} />48628.46</Text>
            </View>
          </View>
          <View style={{ borderRadius: 8, borderWidth: 1, borderColor: '#9E9E9E', marginTop: 20 }} >
            <View style={{ padding: 10, alignSelf: 'flex-start', marginTop: -150 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 150 }}> Aging Report</Text>

            </View>
            <View style={styles.table}>
              <View style={styles.HeaderRow}>
                <Text style={styles.cell}>Period</Text>

                <Text style={styles.cellright}>Amount</Text>
              </View>
              <View style={styles.tableIn}>
                <View style={styles.row}>
                  <Text style={styles.cell}>0-30</Text>
                  <Text style={styles.cellright}><MaterialCommunityIcons name="currency-inr" size={15} />18.00</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cell}>61-90</Text>
                  <Text style={styles.cellright}><MaterialCommunityIcons name="currency-inr" size={15} />144330.00</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.cell}>90-+</Text>
                  <Text style={styles.cellright}><MaterialCommunityIcons name="currency-inr" size={15} />78929.00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Payments

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'
  },
  table: {
    marginBottom: 10,
    marginTop: 20,

  },
  tableIn: {
    marginBottom: 10,

    marginLeft: 20,
    marginRight: 20

  },
  row: {
    flexDirection: "row",

    borderBottomColor: 'gray',
    borderBottomWidth: 1,


  },
  HeaderRow: {
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "left",
    backgroundColor: '#E4E2FA'
  },
  cell: {
    flex: 1,
    padding: 10,
    width: 200,
    textAlign: "left",
    fontSize: 16,
    color: "black",
    borderColor: "black",

  },
  cellright: {
    flex: 1,
    padding: 10,
    width: 200,
    textAlign: "right",
    fontSize: 16
    ,
    color: "black",
    borderColor: "black",
    marginRight: 40
  }
})