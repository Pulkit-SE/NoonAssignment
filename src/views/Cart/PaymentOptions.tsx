import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {PAYMENT_METHOD} from '../../helper/constants';
import {styles} from './styles';

const PaymentOptions = () => {
  return (
    <View>
      <Text style={styles.payment}>Available Payment Options</Text>
      <TouchableOpacity style={styles.paymentMethods}>
        <View style={styles.googlePay}>
          <Image
            source={{
              uri: PAYMENT_METHOD.icon,
            }}
            style={styles.leftIcon}
          />
          <Text>{PAYMENT_METHOD.name}</Text>
        </View>
        <Image
          source={{
            uri: PAYMENT_METHOD.tick,
          }}
          style={styles.rightTick}
        />
      </TouchableOpacity>
    </View>
  );
};
export default React.memo(PaymentOptions);
