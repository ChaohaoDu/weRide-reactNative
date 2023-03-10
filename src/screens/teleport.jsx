import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import VerificationSuccess from './VerificationSuccess';

const Teleport = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Signup')}>SignUp</Text>
      <Text onPress={() => navigation.navigate('Login')}>Login</Text>
      <Text onPress={() => navigation.navigate('Verification')}>
        Verification
      </Text>
      <Text onPress={() => navigation.navigate('ForgetPassword')}>
        ForgetPassword
      </Text>
      <Text onPress={() => navigation.navigate('Login')}>Login</Text>
      <Text onPress={() => navigation.navigate('VerificationSuccess')}>
        VerificationSuccess
      </Text>
      <Text onPress={() => navigation.navigate('Main')}>main</Text>
      <Text onPress={() => navigation.navigate('OnBoarding')}>OnBoarding</Text>
    </SafeAreaView>
  );
};

export default Teleport;
