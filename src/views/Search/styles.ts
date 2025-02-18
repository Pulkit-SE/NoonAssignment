import {StyleSheet} from 'react-native';

import {HEIGHT, WIDTH} from '../../helper/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    padding: 12,
    flex: 1,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 8,
  },
  itemRow: {
    padding: 8,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    backgroundColor: 'white',
    borderColor: 'lightgray',
  },
  nameContainer: {
    justifyContent: 'center',
    marginLeft: 12,
  },
  flatlist: {
    marginTop: 12,
  },
  itemName: {
    fontWeight: '500',
    fontSize: 16,
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStar: {
    width: 12,
    height: 12,
    marginLeft: 2,
  },
  description: {
    maxWidth: '88%',
    color: 'gray',
  },
  lottie: {
    height: 250,
    width: 250,
  },
  lottieParent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
