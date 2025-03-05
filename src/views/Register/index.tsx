import React, {useState} from 'react';
import {Text, SafeAreaView, Pressable, TextInput, View} from 'react-native';

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
    console.log('xxx')
    axios.post(REGISTER_API, userData).then(res=>console.log('res',res)).catch(ex=>console.log('xxx2',ex));
  };

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
        <Pressable onPress={handleSubmit} style={styles.submitBtn}>
          <Text>REGISTER</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Register;
