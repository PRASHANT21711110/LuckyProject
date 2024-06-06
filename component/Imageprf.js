import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Profiles from './Profiles'
const Imageprf = ({navigation}) => {
  return (
    <View>
            <TouchableOpacity onPress={() => navigation.navigate('Profiles')} >
            <Image source={require('../assets/img/profile.png')}
                resizeMode='contain'
                style={{
                    width: 40,
                    height: 40,
                    marginLeft:350,
                    marginTop:-80,
                }}
            />
            </TouchableOpacity>
            </View>
  )
}

export default Imageprf

const styles = StyleSheet.create({})