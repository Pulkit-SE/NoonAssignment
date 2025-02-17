import {StyleSheet} from 'react-native';

import {HEIGHT, WIDTH} from '../../helper/constants';

export const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 16,
  },
  restaurantImg: {
    height: HEIGHT * 0.3,
    width: '100%',
  },
  restaurantDesc: {
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    height: HEIGHT * 0.3,
    marginTop: 16,
  },
  restaurantHeading: {
    fontWeight: '500',
    fontSize: 16,
  },
  titleStyle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  orderNowContainer: {
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 12,
    bottom: 30,
    left: '35%',
    padding: 12,
    position: 'absolute',
    width: 140,
  },
  imgStyle: {
    height: 80,
    width: 80,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
