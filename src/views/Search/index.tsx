import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
} from 'react-native';

import {styles} from './styles';
import {RESTAURANT_DATA} from '../../helper/constants';
import {debounce} from '../../helper/functions';

const STAR_ICON =
  'https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.jpg';

const SearchScreen = props => {
  const [searchText, updateSearchText] = useState('');
  const [availableRestaurants, updateAvailableRestaurants] =
    useState(RESTAURANT_DATA);

  // if entered text is resetted then show all the restaurants
  const filterData = (text: string) => {
    if (!text) {
      updateAvailableRestaurants(RESTAURANT_DATA);
    } else {
      const filtered = RESTAURANT_DATA.filter(item =>
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
          <Text numberOfLines={2} style={styles.description}>
            {item?.description}
          </Text>
          <View style={styles.ratings}>
            <Text>{item?.rating}</Text>
            <Image
              source={{
                uri: STAR_ICON,
              }}
              style={styles.imageStar}
              resizeMode="contain"
            />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TextInput
          onChangeText={handleOnChange}
          value={searchText}
          style={styles.input}
          placeholder="Search restaurant..."
        />
        <View style={styles.flatlist}>
          <FlatList
            data={availableRestaurants}
            renderItem={renderRestaurants}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
