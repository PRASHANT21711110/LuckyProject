import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Search from './Search';

const DATA = [
  {
    
    id: '1',
    text:'Electrical\n(consumer)',
    imageUri: require('../assets/img/layer-2.png'),
    
  },
  
  {
    id: '2',
    text:'Electrical\n(Industrial)',
    imageUri: require('../assets/img/layer-3.png'),
    
  },
  {
    id: '3',
    text:'Pipes\nFittings',
    imageUri: require('../assets/img/layer-4.png'),
    
  },
  {
    id: '4',
    text:'Sanitary\nWare',
    imageUri: require('../assets/img/layer-1.png'),
    
  },
  
];

const Item = ({ title, imageUri ,text}) => (
  <TouchableOpacity >
  <View style={styles.item}>
    <Image source={imageUri} style={styles.tinyLogo} />
    </View>
    <Text style={{textAlign:'center',marginLeft:20}}>{text}</Text>
    </TouchableOpacity>
 
);

const Flatlist = ({navigation}) => {
  return (
    <SafeAreaView>
        <Text style={{marginTop:50,color:'black',marginLeft:20}}>Products</Text> 
      <FlatList
      
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} imageUri={item.imageUri} text={item.text} />}
        keyExtractor={(item) => item.id} 
      />
       
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginHorizontal: 5,
    margin: 4,
    height: 75, // Adjust height as needed
    width: 75, // Adjust width as needed
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
    marginLeft:20
    
  },
  tinyLogo: {
    width: 50,
    height: 50,
    
  },
});

export default Flatlist;
