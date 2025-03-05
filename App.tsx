/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider, useSelector} from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';

import {store} from './src/redux/store';

const Navigator = () => {
  const userToken = useSelector((state: any) => state.user.token);
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
