import {StyleSheet} from 'react-native';

import {HEIGHT, WIDTH} from '../../helper/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    backgroundColor: 'orange',
    borderRadius: 8,
    marginTop: 18,
    padding: 12,
  },
  orderText: {
    fontSize: 20,
  },
  lottie: {
    height: 250,
    width: 250,
    marginBottom: 200,
  },
});
