import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {
  CAROUSEL_DATA,
  HEIGHT,
  RESTAURANT_DATA,
  WIDTH,
} from '../../helper/constants';
import {styles} from './styles';

const HomeScreen = props => {
  const renderCarouselData = ({item, index}) => {
    const handleDetailScreenNavigation = () => {
      props.navigation.navigate('Details', {item});
    };

    return (
      <TouchableOpacity
        style={styles.banner}
        onPress={handleDetailScreenNavigation}>
        <Image
          source={{uri: item?.image}}
          style={styles.bannerItem}
          resizeMode="stretch"
        />
      </TouchableOpacity>
    );
  };

  const renderCarouselItems = ({item}) => {
    const handleDetailScreenNavigation = () => {
      props.navigation.navigate('Details', {item});
    };

    return (
      <Pressable
        onPress={handleDetailScreenNavigation}
        style={styles.itemContainer}>
        <Image source={{uri: item?.image}} style={styles.restaurantImg} />
        <View style={styles.restaurantDesc}>
          <Text style={styles.title}>{item.name}</Text>
          <Text numberOfLines={3}>{item.description}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.restaurantHeading}>Top Picks</Text>
        <FlatList
          data={CAROUSEL_DATA}
          renderItem={renderCarouselData}
          horizontal={true}
          contentContainerStyle={styles.carouselContainer}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.restaurantHeading}>Available Restaurants</Text>
        <FlatList
          horizontal={true}
          bounces={false}
          renderItem={renderCarouselItems}
          data={RESTAURANT_DATA}
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
