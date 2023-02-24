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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const OnBoarding = () => {
  const auth = React.useContext(AuthContext);
  const logoUrl = require('../../assets/images/logo/logo_text_at_bottom.png');
  const riderURLOne = require("../../assets/images/on_boarding/matched_on_boarding_get_match.png");
  const riderURLTwo = require("../../assets/images/on_boarding/driver_on_boarding_driver.png");
  const onLogoutPressed = async () => {
    await deleteJWToken();
    auth.signOut();
  };
 
  const [sloganText, sloganSetText] = useState("Get Matched!");
  const [tipText, tipSetText] = useState("Schedule you trip ahead and get a match with you potential driver/rider.");
  // const [imgStyle, imgSetStyle] = useState({});
  const [riderUrl, riderUrlSetPic] = useState(riderURLOne);

  const onPressHandler = (event) => {
    sloganSetText("Certified Driver and Rider");
    tipSetText("All drivers and riders are certified UCSD students.");
    riderUrlSetPic(riderURLTwo);
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
      <Text style={styles.skip}>Skip</Text>
        <Image source={logoUrl} style={styles.logo} />
        <Text style={styles.slogan}>{sloganText}</Text>

        <Image source={riderUrl} style={styles.rider} />

        <Text style={styles.tip}>{tipText}</Text>

        <AntDesign name="rightcircle" style={styles.rightArrow} title="Change Text"
        onPress={onPressHandler}></AntDesign>

      </View>
      <View style={styles.dot}>
        <Entypo name="dot-single" style={styles.dotOne}></Entypo>
        <Entypo name="dot-single" style={styles.dotTwo}></Entypo>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
