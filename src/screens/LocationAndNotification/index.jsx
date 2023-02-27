import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {deleteJWToken} from '../../utils/jwt';
import {AuthContext} from '../../navigation/navigation';
import styles from './style';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../components/LongButton';

var first_click = true;
const OnBoarding = () => {
  const auth = React.useContext(AuthContext);
  const navigation = useNavigation();
  const addressIcon = require('../../assets/images/location_notification/addressCuate.png');
  const notificationIcon = require('../../assets/images/location_notification/enableNotifications.png');

  const onLogoutPressed = async () => {
    await deleteJWToken();
    auth.signOut();
  };

  const [sloganText, sloganSetText] = useState('Access Your Location');
  const [slogantyle, sloganSetStyle] = useState({
    marginTop: 80,
    fontSize: 38,
    fontWeight: '800',
    color: '#172B4D',
  });
  const [imgStyle, imgSetStyle] = useState({
    width: 383,
    height: 380,
    marginTop: 10,
    marginLeft: 20,
  });
  const [imgUrl, imgUrlSetPic] = useState(addressIcon);
  const [tipText, tipSetText] = useState(
    'We will need your location to give you better experience.',
  );
  const [tipStyle, tipSetStyle] = useState({
    marginTop: -50,
    fontSize: 18,
    fontWeight: '500',
    color: '#172B4D',
  });

  const onPressHandler = event => {
    sloganSetText('Enable Notifications');
    tipSetText(
      'Enable notifications so you don’t miss any important information',
    );
    imgUrlSetPic(notificationIcon);
    imgSetStyle({
      width: 200,
      height: 250,
      marginTop: 40,
      marginLeft: 20,
    });
    tipSetStyle({
      marginTop: 95,
      fontSize: 18,
      fontWeight: '500',
      color: '#172B4D',
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={slogantyle}>{sloganText}</Text>
        <Image source={imgUrl} style={imgStyle} />
        <Text style={tipStyle}>{tipText}</Text>
        <LongBottom onPress={onPressHandler} text={'Allow Access'} />
        <Text onPress={onPressHandler}>Not Now</Text>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
