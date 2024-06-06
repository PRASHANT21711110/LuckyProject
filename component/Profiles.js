import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Button } from 'react-native-elements'
import AddBusiness from './AddBusiness'
import Wishlist from './Wishlist'
import FAQs from './FAQs'
import Home3 from '../src/Home3'
import Payments from './Orders'


const Profiles = ({ navigation }) => {
  return (

    <ScrollView style={{ backgroundColor: '#fff', flex: 2 }}>
      {/* <View style={style.alignBox}> */}
      <View style={{ marginTop: 50 }}>
        <View style={{ marginLeft: 150, marginTop: 30 }}>
          <Image source={require('../assets/img/profile.png')}
            resizeMode='contain'
            style={{
              width: 100,
              height: 100,
            }} />

          <View>
            <TouchableOpacity onPress={() => navigation.navigate('AddBusiness')}>
              <Text style={{ color: 'black', marginLeft: 30 }}>Karsan</Text>
              <Text style={{ color: 'black', marginLeft: 15 }}>[MXC1416]</Text>
              <View style={styles.text6}>
                <Button title='Change Business' onPress={() => navigation.navigate('AddBusiness')}></Button>

              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AddBusiness')}>
              <View style={styles.text1}>
                <Text>Your Businesses </Text>
                <Text>Edit or add new business</Text>
                <Image source={require('../assets/img/chevron-right-white-.png')}
                  resizeMode='contain'
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 280,
                    marginTop: -40,
                    alignItems: 'center',
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <View style={styles.text2}>
                <Text>Wishlist</Text>
                <Text>Check and buy from wishlist</Text>
                <Image source={require('../assets/img/chevron-right-white-.png')}
                  resizeMode='contain'
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 280,
                    marginTop: -40,
                    alignItems: 'center',
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FAQs')}>
              <View style={styles.text3}>
                <Text>FAQs</Text>
                <Text>Have a question? Here to help</Text>
                <Image source={require('../assets/img/chevron-right-white-.png')}
                  resizeMode='contain'
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 280,
                    marginTop: -40,
                    alignItems: 'center',
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home3')}>
              <View style={styles.text7}>
                <Text>Set New/Change MPIN</Text>
                <Image source={require('../assets/img/chevron-right-white-.png')}
                  resizeMode='contain'
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 280,
                    marginTop: -20,
                    alignItems: 'center',
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.text4}>
                <Text>Delete Account</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.text5}>
                <Text style={{ fontSize: 20 }}>Log out</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>

    </ScrollView>

  )
}


export default Profiles

const styles = StyleSheet.create({
  text1: {
    marginLeft: -100,
    marginTop: 25,
    color: 'Red',
    borderWidth: 1,
    padding: 20,
    marginRight: 30,
    marginLeft: -120,

  },
  text2:
  {
    marginLeft: -100,
    marginTop: 25,
    color: 'white',
    borderWidth: 1,
    padding: 12,
    marginRight: 30,
    marginLeft: -120,
  },
  text3:
  {
    marginLeft: -100,
    marginTop: 25,
    color: 'white',
    borderWidth: 1,
    padding: 12,
    marginRight: 30,
    marginLeft: -120,
  },
  text4:
  {
    marginLeft: -100,
    marginTop: 25,
    color: 'white',
    borderWidth: 1,
    padding: 12,
    marginRight: 30,
    marginLeft: -120,
  },
  text5:
  {
    marginLeft: -140,
    marginTop: 25,
    color: 'white',
    alignItems: 'center',

  },
  text6:
  {
    marginLeft: -150,
    marginTop: 30,
    alignItems: 'center',
  },
  text7:
  {
    marginLeft: -100,
    marginTop: 25,
    color: 'white',
    borderWidth: 1,
    padding: 12,
    marginRight: 30,
    marginLeft: -120,
  },
})

