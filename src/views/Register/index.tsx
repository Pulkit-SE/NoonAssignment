import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

import CustomHeader from '../../components/CustomHeader';
import {styles} from '../Login/styles';
import axios from 'axios';
import {REGISTER_API} from '../../helper/api';

const Register = props => {
  const {navigation} = props;

  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [name, updateName] = useState('');
  const [mobile, updateMobile] = useState('');

  const handleChange = (type: string, value: string) => {
    switch (type) {
      case 'email':
        return updateEmail(value);
      case 'password':
        return updatePassword(value);
      case 'mobile':
        return updateMobile(value);
      case 'name':
        return updateName(value);
    }
  };

  const handleSubmit = () => {
    const userData = {
      name,
      email,
      password,
      mobile,
    };
    console.log('xxx');
    axios
      .post(REGISTER_API, userData)
      .then(res => {
        if (res.data.status === 'failure') {
          Alert.alert(res.data.data);
        } else {
          navigation.navigate('Login');
        }
      })
      .catch();
  };

  const isSubmitDisabled = !email && !password && !mobile && !name;

  return (
    <SafeAreaView>
      <CustomHeader
        title="Register"
        showBackButton={true}
        onLeftPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={val => handleChange('email', val)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={val => handleChange('password', val)}
          style={styles.input}
        />
        <TextInput
          placeholder="Mobile"
          value={mobile}
          onChangeText={val => handleChange('mobile', val)}
          style={styles.input}
        />
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={val => handleChange('name', val)}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.submitBtn}
          disabled={isSubmitDisabled}>
          <Text>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
