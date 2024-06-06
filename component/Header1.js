import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Imageprf from './Imageprf'
import Wishlist from './Wishlist'


const Header1 = ({navigation}) => {
    return (
            
        <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>

            <TouchableOpacity onPress={() => navigation.navigate('AddBusiness')}>

                <View style={styles.text1}>
                    <Text style={{ color: 'black',fontSize:15 }} >Karsan[MXC1416]</Text>

                    <Image
                        source={require('../assets/img/chevron-right-white-.png')}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            marginLeft: 200,
                            marginTop: -25,
                            alignItems: 'center',
                            color: 'white',
                        }}
                    />
                </View>
            </TouchableOpacity>
            <Wishlist navigation={navigation}/>
            <View style={{marginTop:45}}>
            <Imageprf navigation={navigation} />
          </View>
            


        </ScrollView >
        
    )
}

export default Header1

const styles = StyleSheet.create({
    text1:
    {
        marginTop: 20,
        marginLeft: 20,
    },
    text2:
    {
        marginTop: 70,
        marginLeft: 30,
    },
   
})