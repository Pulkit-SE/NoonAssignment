import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import {storeDataInAsyncStorge} from '../../helper/functions';
import {logout} from '../../redux/slices/user';

const ProfileScreen = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  
  const handleLogout = async () => {
    await storeDataInAsyncStorge('user-token', null);
    dispatch(logout());
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.mobile}</Text>
      </View>
      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;
