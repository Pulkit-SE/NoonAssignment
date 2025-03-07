import AsyncStorage from '@react-native-async-storage/async-storage';

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId); // Clear the previous timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Execute the function after the delay
    }, delay);
  };
};

export const storeDataInAsyncStorge = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getDataFromAsyncStorge = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
