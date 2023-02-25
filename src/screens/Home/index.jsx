import React, {useState} from 'react';
import {Image, Linking, SafeAreaView, Text, View} from 'react-native';
import {deleteJWToken} from '../../utils/jwt';
import {AuthContext} from '../../navigation/navigation';
import CheckBox from 'react-native'
import styles from './style';
import {ucsdEmailRegex} from '../../constants/constants';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../components/LongButton';
import FormInput from '../../components/FormInput';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
const Home = () => {
  const auth = React.useContext(AuthContext);
  const logoUrl = require('../../assets/images/logo/logo_text_at_bottom.png');
  const driverURL = require("../../assets/images/choose_your_role/driver.png");
  const riderURL = require("../../assets/images/choose_your_role/rider.png");
  const onLogoutPressed = async () => {
    await deleteJWToken();
    auth.signOut();
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Image source={logoUrl} style={styles.logo} />
        <Text>Home</Text>
        <Image source={driverURL} style={styles.driver} />
        <Image source={riderURL} style={styles.rider} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
