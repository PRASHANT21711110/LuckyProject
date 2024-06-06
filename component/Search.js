import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';

const DATA = [
  {
    id: '1',
    text: 'Wiring\nDevices',
    imageUri: require('../assets/img/layer-2.png'),
  },
  {
    id: '2',
    text: 'Lighting\nProduct',
    imageUri: require('../assets/img/lightbulb.png'),
  },
  {
    id: '3',
    text: 'Solar',
    imageUri: require('../assets/img/layer-4.png'),
  },
  {
    id: '4',
    text: 'Switchgear',
    imageUri: require('../assets/img/layer-1.png'),
  },
  {
    id: '5',
    text: 'Protection\nDevices',
    imageUri: require('../assets/img/lightbulb.png'),
  },
  {
    id: '6',
    text: 'Wires\nAnd Cables',
    imageUri: require('../assets/img/layer-4.png'),
  },
  {
    id: '7',
    text: 'Conduit\nPipes',
    imageUri: require('../assets/img/lightbulb.png'),
  },
  {
    id: '8',
    text: 'Water\nHeater',
    imageUri: require('../assets/img/layer-4.png'),
  },
  {
    id: '9',
    text: 'Aplliances',
    imageUri: require('../assets/img/lightbulb.png'),
  },
  {
    id: '10',
    text: 'Pumps',
    imageUri: require('../assets/img/layer-4.png'),
  },
  {
    id: '11',
    text: 'Door Phones',
    imageUri: require('../assets/img/lightbulb.png'),
  },
  {
    id: '12',
    text: 'Home\nAutomations',
    imageUri: require('../assets/img/layer-4.png'),
  }, {
    id: '13',
    text: 'Power\nSolution',
    imageUri: require('../assets/img/lightbulb.png'),
  },
  {
    id: '14',
    text: 'Fans',
    imageUri: require('../assets/img/layer-4.png'),
  },
  {
    id: '15',
    text: 'Accessories',
    imageUri: require('../assets/img/lightbulb.png'),
  },

];

const Item = ({ title, imageUri, text }) => (
  <TouchableOpacity>
    <View style={styles.item}>
      <Image source={imageUri} style={styles.tinyLogo} />
    </View>
    <Text style={{ textAlign: 'center', marginLeft: 20 }}>{text}</Text>
  </TouchableOpacity>
);

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);

  const handleSearch = () => {
    const filtered = DATA.filter(item =>
      item.text.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredData}
        renderItem={({ item }) => <Item title={item.title} imageUri={item.imageUri} text={item.text} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginHorizontal: 5,
    margin: 4,
    height: 75, // Adjust height as needed
    width: 75, // Adjust width as needed
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 20
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default Search;

