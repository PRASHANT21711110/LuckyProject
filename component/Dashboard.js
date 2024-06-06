import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Flatlist from './Flatlist';
import Imageprf from './Imageprf';
import Recentpurchase from './Recentpurchase';
import NewArrival from './NewArrival';
import Creditlimit from './Creditlimit';
import Header1 from './Header1';


const Dashboard = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.container} >
        
        <Header1 navigation={navigation}/>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'black', marginLeft: 20, marginTop: 10, fontSize: 25 }}>Hi, KARSAN </Text>
          <Image
            source={require('../assets/img/image.png')}
            resizeMode='contain'
            style={{
              width: 30,
              height: 30,
              marginLeft: 180,
              marginTop: -30
            }}
          />
        
          <NewArrival navigation={navigation}/>
          <Creditlimit navigation={navigation}/>
          
          <Flatlist />
          <Recentpurchase />
        </View>
      </View>
    </ScrollView>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  text1: {
    marginLeft: 5,
    marginTop: 10,
    padding: 20,
    marginRight: 30,

  },
});
