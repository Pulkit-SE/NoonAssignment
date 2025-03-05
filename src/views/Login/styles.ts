import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginBottom: 8,
    padding: 8,
    backgroundColor: 'white',
  },
  submitBtn: {
    padding: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray',
    backgroundColor: 'orange',
    marginTop: 8,
  },
  register: {alignItems: 'flex-end', marginTop: 8},
});
