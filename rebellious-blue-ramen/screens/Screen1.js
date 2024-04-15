// Screen1.js
import React from 'react';
import { View, Text,FlatList,TouchableOpacity ,StyleSheet} from 'react-native';
//import FastImage from 'react-native-fast-image';


function Screen1() {
  const properties = [
    {
      id: 1,
      title: 'Property 1',
      address: '123 Main St',
      price: '$500,000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Property 2',
      address: '456 Elm St',
      price: '$700,000',
      image: 'https://via.placeholder.com/150',
    },
    // add more properties as needed
  ];

  const renderProperty = ({ item }) => {
    return (
      <TouchableOpacity style={styles.propertyContainer}>
        <View style={styles.imageContainer}>

        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.address}>{item.address}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={properties}
      renderItem={renderProperty}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  propertyContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 16,
  },

  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});



export default Screen1;
