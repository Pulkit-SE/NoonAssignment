/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, SafeAreaView} from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';

import {store} from './src/redux/store';
import {getDataFromAsyncStorge} from './src/helper/functions';
import styles from './styles';
import {setUserToken} from './src/redux/slices/user';

const Navigator = () => {
  const dispatch = useDispatch();
  const {token: userToken} = useSelector((state: any) => state.user);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await getDataFromAsyncStorge('user-token');
      dispatch(setUserToken(storedToken || undefined));
    };
    if (!userToken) {
      fetchToken();
    }
  }, [userToken]);

  if (userToken === undefined) {
    return (
      <SafeAreaView style={styles.wrapper}>
        <ActivityIndicator size={'large'} />
      </SafeAreaView>
    );
  }

  return userToken ? <AppNavigator /> : <AuthNavigator />;
};

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
