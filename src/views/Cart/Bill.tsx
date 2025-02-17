import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

type TBillDetails = {
  totalPrice: string;
  addedTax: string;
  totalPriceWithTax: string;
};

const BillDetails = (props: TBillDetails) => {
  return (
    <View style={{marginVertical: 16}}>
      <View style={styles.totalPrice}>
        <Text>Total</Text>
        <Text style={styles.bold}>{`${parseFloat(props.totalPrice).toFixed(
          2,
        )}`}</Text>
      </View>
      <View style={styles.totalPrice}>
        <Text>Tax @9%</Text>
        <Text style={styles.bold}>{`${parseFloat(props.addedTax).toFixed(
          2,
        )}`}</Text>
      </View>
      <View style={styles.totalPrice}>
        <Text>Total price with tax</Text>
        <Text style={styles.bold}>{`${parseFloat(
          props.totalPriceWithTax,
        ).toFixed(2)}`}</Text>
      </View>
    </View>
  );
};

export default React.memo(BillDetails);
