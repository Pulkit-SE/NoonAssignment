import {StyleSheet} from 'react-native';

import {HEIGHT, WIDTH} from '../../helper/constants';

export const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 12,
    borderWidth: 1,
    marginRight: 12,
    width: WIDTH * 0.7,
    borderColor: 'lightgray',
    backgroundColor: 'white',
  },
  restaurantImg: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: HEIGHT * 0.2,
    width: '100%',
  },
  restaurantDesc: {
    padding: 8,
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  contentContainer: {
    height: HEIGHT * 0.3,
    marginTop: 16,
  },
  restaurantHeading: {
    fontWeight: '500',
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});
