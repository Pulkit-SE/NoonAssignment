import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

import {styles} from './styles';

const ConfirmationScreen = props => {
  const handleGoToHome = () => {
    // navigate and reset the entire stack so that back button won't come back to confirmation
    props.navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require('../../helper/lottie/success.json')}
        style={styles.lottie}
      />
      <Text style={styles.orderText}>Order Placed!</Text>
      <TouchableOpacity style={styles.homeText} onPress={handleGoToHome}>
        <Text>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmationScreen;
