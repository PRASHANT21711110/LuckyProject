// import { StyleSheet, Text, View,Image } from 'react-native'
// import React from 'react'

// const NewArrival = () => {
//   return (

//     <View>
//       <Image source={require('../assets/img/Image.jpg')}
//                   resizeMode='contain'
//                   style={{
//                     width: 200,
//                     height: 200,
//                     marginLeft: 20,
//                     marginTop: -20,
//                     alignItems: 'center',
//                     color:'white',
//                   }}
//                 />
//     </View>
//   )
// }

// export default NewArrival

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Search from './Search'


const NewArrival = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Image
          source={require('../assets/img/Image.jpg')}
          resizeMode='contain'
          style={{
            width: 200,
            height: 200,
            marginLeft: 20,
            marginTop: -20,
            alignItems: 'center',
            color: 'white',
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default NewArrival

const styles = StyleSheet.create({})

