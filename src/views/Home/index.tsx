import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import {setUserData} from '../../redux/slices/user';
import CustomHeader from '../../components/CustomHeader';
import {getDataFromAsyncStorge} from '../../helper/functions';

import {CAROUSEL_DATA, RESTAURANT_DATA} from '../../helper/constants';
import {UDER_DETAILS_API} from '../../helper/api';
import {styles} from './styles';

const HomeScreen = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await getDataFromAsyncStorge('user-token');
      if (storedToken) {
        axios.post(UDER_DETAILS_API, {token: storedToken}).then(res => {
          const {name, email, mobile} = res.data.data;
          dispatch(setUserData({name, email, mobile}));
        });
      }
    };
    fetchToken();
  }, []);

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
      <CustomHeader title="Home" showBackButton={false} />
      <View style={styles.parent}>
        <Text style={styles.restaurantHeading}>Top Picks</Text>
        <FlatList
          data={CAROUSEL_DATA}
          renderItem={renderCarouselData}
          horizontal={true}
          contentContainerStyle={styles.carouselContainer}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={[styles.restaurantHeading, styles.margin16]}>
          Available Restaurants
        </Text>
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
