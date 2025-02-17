import {StyleSheet} from 'react-native';

import {HEIGHT, WIDTH} from '../../helper/constants';

export const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 12,
    borderWidth: 1,
    marginRight: 12,
    width: WIDTH * 0.7,
  },
  restaurantImg: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: HEIGHT * 0.2,
    width: '100%',
  },
  restaurantDesc: {
    paddingHorizontal: 8,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  contentContainer: {
    height: HEIGHT * 0.3,
    marginTop: 16
  },
  restaurantHeading:{
    fontWeight: '500',
    fontSize: 16
  }
});
