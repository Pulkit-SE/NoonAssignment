import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Image, Pressable} from 'react-native';

import {styles} from './styles';
import {RESTAURANT_DATA} from '../../helper/constants';
import {debounce} from '../../helper/functions';

const SearchScreen = props => {
  const [searchText, updateSearchText] = useState('');
  const [availableRestaurants, updateAvailableRestaurants] =
    useState(RESTAURANT_DATA);

  // if entered text is resetted then show all the restaurants
  const filterData = (text: string) => {
    if (!text) {
      updateAvailableRestaurants(RESTAURANT_DATA);
    } else {
      const filtered = availableRestaurants.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      );
      updateAvailableRestaurants(filtered);
    }
  };

  const debouncedFilterData = debounce(filterData, 300);

  const handleOnChange = (text: string) => {
    updateSearchText(text);
    debouncedFilterData(text);
  };

  const renderRestaurants = ({item}) => {
    const handleNavigateToDetails = () => {
      props.navigation.navigate('Details', {item});
    };

    return (
      <Pressable style={styles.itemRow} onPress={handleNavigateToDetails}>
        <Image source={{uri: item?.image}} style={styles.image} />
        <View style={styles.nameContainer}>
          <Text style={styles.itemName}>{item?.name}</Text>
          <Text>{item?.description}</Text>
          <Text>{item?.rating}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={handleOnChange}
        value={searchText}
        style={styles.input}
        placeholder="Search restaurant..."
      />
      <View style={styles.flatlist}>
        <FlatList data={availableRestaurants} renderItem={renderRestaurants} />
      </View>
    </View>
  );
};

export default SearchScreen;
