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

const DATA = [
  {

    id: '1',
    text: '1.0HP OPENWELL\n(KIRLOSKAR)',
    imageUri: require('../assets/img/lightbulb.png'),

  },

  {
    id: '2',
    text: '0.5HP MINI SELFPRIMING\n(KIRLOSKAR)',
    imageUri: require('../assets/img/screenshot1.png'),

  },
  {
    id: '3',
    text: '90*75MM PVC REDUCER\n BUSH- Truflo\n Brand Name: truflo pvc agri\n fitting\n Manufacturer: truflo by\n hindware',
    imageUri: require('../assets/img/screenshot1.png'),

  },
  {
    id: '4',
    text: '110mm Pvc Coupler-6 kgf/\ncm2 Pressure-ISI Marked\n Truflo\n Brand Name:truflo pvc agri\n Manfacturer:truflo by\nhindware',
    imageUri: require('../assets/img/lightbulb.png'),

  },
  {
    id: '5',
    text: '75MM (21/2)Bend 87.5\nWith Door-Selfit Truflo\nBrand Name: truflo swr\nfitting\nManfactuere:truflo by\nhindware',
    imageUri: require('../assets/img/lightbulb.png'),

  },
  {
    id: '6',
    text: '75mm Pvc Coupler-6 kgf/\ncm2 Pressure-ISI Marked\n Truflo\n Brand Name:truflo pvc agri\n Manfacturer:truflo by\nhindware',
    imageUri: require('../assets/img/lightbulb.png'),

  },
  {
    id: '7',
    text: '90mm Pvc Coupler-6 kgf/\ncm2 Pressure-ISI Marked\n Truflo\n Brand Name:truflo pvc agri\n Manfacturer:truflo by\nhindware',
    imageUri: require('../assets/img/lightbulb.png'),

  },
  {
    id: '8',
    text: '160mm Pvc Agri Pipe 6 kgs/cmA~,A~2 6 Mtr AQUAFIT\nBrand Name:AQUAFIT\nPIPES\nManufacturer:PRINCE\nPIPES AND FITTINGS PVT\nLTD',
    imageUri: require('../assets/img/lightbulb.png'),

  },
  {
    id: '9',
    text: '0.5 WATT UNO LED\nBULB-BLUE\nBrand Name:NORWOOD\NLED LIGHTINGS\nManufacturer:NORWOOD',
    imageUri: require('../assets/img/lightbulb.png'),

  },
  {
    id: '10',
    text: 'CAPACITI 220MM ONE PC\nEWC S CLOSE SC SNW\nBrand Name:CERA\n SANITARYWARE\n Manufacturer:cera\n SANITARAYWARE LTD',
    imageUri: require('../assets/img/layer-1.png'),

  },

];

const Item = ({ title, imageUri, text }) => (

  <TouchableOpacity>
    <View style={styles.item}>
      <Image source={imageUri} style={styles.tinyLogo} />
    </View>
    <Text style={{ textAlign: 'center' }}>{text}</Text>
  </TouchableOpacity>

);

const Flatlist = () => {
  return (
    <SafeAreaView>
      <Text style={{ marginTop: 50, color: 'black', marginLeft: 20 }}>Recent Purchases</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} imageUri={item.imageUri} text={item.text} />}
        keyExtractor={(item) => item.id}
      />
      <Text style={{ color: 'black', marginTop: 5 }}></Text>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginHorizontal: 5,
    margin: 4,
    height: 150, // Adjust height as needed
    width: 150, // Adjust width as needed
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

export default Flatlist;
