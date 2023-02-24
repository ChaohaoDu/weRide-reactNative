import React, {useState} from 'react';
import {Image, Linking, SafeAreaView, Text, View} from 'react-native';
import {deleteJWToken} from '../../utils/jwt';
import {AuthContext} from '../../navigation/navigation';
import CheckBox from 'react-native'
import styles from './style';
import {ucsdEmailRegex} from '../../constants';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../components/LongButton';
import FormInput from '../../components/FormInput';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

const OnBoarding = () => {
  const auth = React.useContext(AuthContext);
  const logoUrl = require('../../assets/images/logo/logo_text_at_bottom.png');
  const riderURL = require("../../assets/images/on_boarding/matched_on_boarding_get_match.png");
  const onLogoutPressed = async () => {
    await deleteJWToken();
    auth.signOut();
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
      <Text style={styles.skip}>Skip</Text>
        <Image source={logoUrl} style={styles.logo} />
        <Text style={styles.slogan}>Get Matched!</Text>
        <Image source={riderURL} style={styles.rider} />
        <Text style={styles.tip}>Schedule you trip ahead and get a match 
        with you potential driver/rider. </Text>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
