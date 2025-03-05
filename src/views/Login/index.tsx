import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Pressable,
  Alert,
} from 'react-native';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import CustomHeader from '../../components/CustomHeader';

import {styles} from './styles';
import {LOGIN_API} from '../../helper/api';
import {setUserData} from '../../redux/slices/user';

const Login = props => {
  const {navigation} = props;
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  const handleChange = (type: string, value: string) => {
    if (type === 'email') {
      updateEmail(value);
    } else {
      updatePassword(value);
    }
  };

  const handleSubmit = () => {
    axios
      .post(LOGIN_API, {
        email,
        password,
      })
      .then(res => {
        if (res.status === 201) {
          dispatch(setUserData({...res.data.data, token: res.data.data.token}));
        } else {
          Alert.alert(res.data.data);
        }
      })
      .catch();
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView>
      <CustomHeader title="Login" showBackButton={false} />
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
        <Pressable onPress={handleSubmit} style={styles.submitBtn}>
          <Text>LOGIN</Text>
        </Pressable>
        <Pressable style={styles.register} onPress={handleRegister}>
          <Text>Register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
