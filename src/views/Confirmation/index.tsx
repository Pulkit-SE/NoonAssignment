import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';

import {styles} from './styles';

const ConfirmationScreen = props => {
  const {orderStatus = 'success'} = props.route.params;
  const handleGoToHome = () => {
    // navigate and reset the entire stack so that back button won't come back to confirmation
    props.navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  const lottieToShow = orderStatus === 'success' ? require('../../helper/lottie/success.json') : require('../../helper/lottie/pending.json');

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={lottieToShow}
        style={styles.lottie}
      />
      <Text style={styles.orderText}>Order Placed!</Text>
      <TouchableOpacity style={styles.homeText} onPress={handleGoToHome}>
        <Text>Go to home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
