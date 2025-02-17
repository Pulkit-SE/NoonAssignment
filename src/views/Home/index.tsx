import React from 'react';
import {View, Text, FlatList, Image, Pressable} from 'react-native';

import {
  CAROUSEL_DATA,
  RESTAURANT_DATA,
  HEIGHT,
  WIDTH,
} from '../../helper/constants';
import {styles} from './styles';

const HomeScreen = props => {
  const renderBannerItems = ({item, index}) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
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
    <View style={styles.container}>
      <View>
        {/* <Carousel
          renderItem={renderBannerItems}
          autoPlayInterval={2000}
          data={CAROUSEL_DATA}
          height={HEIGHT * 0.3}
          loop={true}
          mode="parallax"
          onSnapToItem={index => console.log('current index:', index)}
          pagingEnabled={true}
          snapEnabled={true}
          style={{width: '100%'}}
          width={WIDTH}
        /> */}
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
    </View>
  );
};

export default HomeScreen;
