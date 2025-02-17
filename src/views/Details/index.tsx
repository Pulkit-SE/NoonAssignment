import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import cloneDeep from 'lodash.clonedeep';

import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader';

const DetailsScreen = props => {
  const {item = {}} = props.route.params;

  const [menuItem, setMenuItem] = useState([]);

  useEffect(() => {
    setMenuItem(item?.menu);
  }, []);

  const renderItem = ({item}) => {
    const itemData = menuItem?.filter(menu => menu?.title === item?.title)[0];

    const handleAddItem = () => {
      const index =
        menuItem?.findIndex(menu => menu?.title === item?.title) || 0;
      const updatedMenu = cloneDeep(menuItem);
      updatedMenu[index].qty = menuItem[index].qty + 1;
      setMenuItem(updatedMenu);
    };

    const handleRemoveItem = () => {
      const index =
        menuItem?.findIndex(menu => menu?.title === item?.title) || 0;
      const updatedMenu = cloneDeep(menuItem);
      updatedMenu[index].qty = menuItem[index].qty - 1;
      setMenuItem(updatedMenu);
    };

    const isAddItemDisabled = itemData?.qty >= itemData?.maxItems;
    const isRemoveItemDisabled = itemData?.qty < 1;

    return (
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.titleStyle}>{item?.title}</Text>
          <Text>{item?.price}</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image source={{uri: itemData?.image}} style={styles.imgStyle} />
          <View style={styles.row}>
            <TouchableOpacity
              disabled={isRemoveItemDisabled}
              onPress={handleRemoveItem}>
              <Text style={styles.handlerText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qty}>{itemData?.qty}</Text>
            <TouchableOpacity
              disabled={isAddItemDisabled}
              onPress={handleAddItem}>
              <Text style={styles.handlerText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const cartItems = menuItem.reduce((accumulator, item) => {
    return accumulator + item?.qty;
  }, 0);

  const itemOrItems = cartItems === 1 ? 'item' : 'items';

  const handleGoToCart = () => {
    const menuData = menuItem.filter(item => item?.qty > 0);
    props.navigation.navigate('Cart', {menuItem: menuData});
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Details"
        onLeftPress={() => props.navigation.goBack()}
      />
      <Image source={{uri: item?.image}} style={styles.restaurantImg} />
      <View style={styles.restaurantDesc}>
        <Text style={styles.labelStyle}>{item.name}</Text>
        <Text numberOfLines={4} style={styles.desc}>
          {item?.description}
        </Text>
        <Text>Menu</Text>
      </View>
      <FlatList
        data={menuItem}
        renderItem={renderItem}
        contentContainerStyle={{padding: 12}}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
      {cartItems > 0 && (
        <TouchableOpacity
          onPress={handleGoToCart}
          style={styles.orderNowContainer}>
          <Text>{`${cartItems} ${itemOrItems} in cart`}</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default DetailsScreen;
