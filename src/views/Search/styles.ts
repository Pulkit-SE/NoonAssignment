import {StyleSheet} from 'react-native';

import {HEIGHT, WIDTH} from '../../helper/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
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
    borderColor: 'gray',
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
});
