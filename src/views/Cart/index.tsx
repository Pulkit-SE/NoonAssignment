import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import BillDetails from './Bill';
import PaymentOptions from './PaymentOptions';

import {styles} from './styles';
import {HEIGHT} from '../../helper/constants';
import CustomHeader from '../../components/CustomHeader';

const CartScreen = props => {
  const {menuItem = {}} = props.route.params;
  const [isLoading, setIsLoading] = useState(false);

  const renderItem = ({item}) => (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={{uri: item?.image}} style={styles.imgStyle} />
        <Text style={styles.itemName}>{item?.title}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text>{item?.price}</Text>
        <View style={styles.qtyContainer}>
          <Text>Quantity : </Text>
          <Text>{item?.qty}</Text>
        </View>
      </View>
    </View>
  );

  const totalPrice = menuItem.reduce((accumulator, item) => {
    const itemPrice = parseFloat(item.price.replace('$', ''));
    return accumulator + item.qty * itemPrice;
  }, 0);

  // 9% tax added on final item
  const addedTax = totalPrice * 0.09;
  const totalPriceWithTax = totalPrice + addedTax;

  const handleSuccess = async () => {
    try {
      setIsLoading(true);
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Random decision between 'pending' and 'success'. I am currently handling 2 scenarios
          const randomOutcome = Math.random();
          if (randomOutcome > 0.5) {
            resolve('success');
          } else {
            resolve('pending');
          }
        }, 2000);
      });
      props.navigation.navigate('Confirmation', {orderStatus: result});
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <CustomHeader
        title="Cart"
        onLeftPress={() => props.navigation.goBack()}
      />
      <View style={styles.parent}>
        <View style={{maxHeight: HEIGHT * 0.45}}>
          <FlatList
            data={menuItem}
            renderItem={renderItem}
            contentContainerStyle={styles.flatlist}
          />
        </View>
        <BillDetails
          totalPrice={totalPrice}
          addedTax={addedTax}
          totalPriceWithTax={totalPriceWithTax}
        />
        <PaymentOptions />
        <TouchableOpacity style={styles.payNow} onPress={handleSuccess}>
          <Text style={styles.payNowText}>Pay Now</Text>
          {isLoading && <ActivityIndicator style={styles.activity} />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
