import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import CustomHeader from '../../components/CustomHeader';

import {styles} from './styles';
import {LOGIN_API} from '../../helper/api';
import {setUserToken} from '../../redux/slices/user';
import {storeDataInAsyncStorge} from '../../helper/functions';

const Login = (props: any) => {
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
          dispatch(setUserToken({token: res.data.data.token}));
          storeDataInAsyncStorge('user-token', res.data.data.token);
        } else {
          Alert.alert(res.data.data);
        }
      })
      .catch();
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const isSubmitDisabled = !email && !password;

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
        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.submitBtn}
          disabled={isSubmitDisabled}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.register} onPress={handleRegister}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
