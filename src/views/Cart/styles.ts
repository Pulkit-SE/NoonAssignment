import {StyleSheet} from 'react-native';

import {HEIGHT, WIDTH} from '../../helper/constants';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: HEIGHT,
  },
  parent: {
    padding: 12,
    flex:1
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: 16,
    borderRadius: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: {
    alignItems: 'center',
  },
  itemName: {
    marginLeft: 12,
  },
  qtyContainer: {
    flexDirection: 'row',
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgStyle: {
    height: 80,
    width: 80,
    borderRadius: 8,
  },
  flatlist: {},
  paymentMethods: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 12,
  },
  googlePay: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  payNow: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'lightgreen',
    padding: 16,
    borderRadius: 8,
    width: WIDTH * 0.95,
    left: '2.5%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightTick: {
    height: 40,
    width: 40,
  },
  leftIcon: {
    height: 40,
    width: 40,
    marginRight: 12,
  },
  bold: {
    fontWeight: '600',
    fontSize: 14,
  },
  payment: {
    marginBottom: 16,
  },
  payNowText: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
  activity: {
    marginLeft: 8,
  },
});
