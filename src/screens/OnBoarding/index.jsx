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

var first_click = true;
const OnBoarding = () => {
  const auth = React.useContext(AuthContext);
  const logoUrl = require('../../assets/images/logo/logo_text_at_bottom.png');
  const riderURLOne = require("../../assets/images/on_boarding/matched_on_boarding_get_match.png");
  const riderURLTwo = require("../../assets/images/on_boarding/driver_on_boarding_driver.png");
  const navigation = useNavigation();
  const onLogoutPressed = async () => {
    await deleteJWToken();
    auth.signOut();
  };
 
  const [sloganText, sloganSetText] = useState("Get Matched!");
  const [tipText, tipSetText] = useState("Schedule you trip ahead and get a match with you potential driver/rider.");
  const [imgStyle, imgSetStyle] = useState({
    marginLeft:75,
    width:425,
    height:323,
  });
  const [tipStyle, tipSetStyle] = useState({
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  });
  const [dotStyle, dotSetStyle] = useState({
    marginLeft: -20,
    padding: -10,
    color: '#D9D9D9',
    fontSize: 40,
  });
  const [riderUrl, riderUrlSetPic] = useState(riderURLOne);


  const onPressHandler = (event) => {
    if (first_click) {
      sloganSetText("Certified Driver and Rider");
      tipSetText("All drivers and riders are certified UCSD students.");
      riderUrlSetPic(riderURLTwo);
      imgSetStyle({
        width:280,
        height:208,
        marginTop:50,
      });
      tipSetStyle({
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginTop: 20,
      })
      dotSetStyle({
        marginLeft: -20,
        padding: -10,
        color: '#171616',
        fontSize: 40,
      })
      first_click = false;
    }
    else {
      // change to get started
      navigation.navigate('GetStarted');
      first_click = !first_click;
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
      <Text style={styles.skip} onPress={() => {
                    navigation.navigate('GetStarted');
                }}>Skip</Text>
        <Image source={logoUrl} style={styles.logo} />
        <Text style={styles.slogan}>{sloganText}</Text>
        <Image source={riderUrl} style={imgStyle} />
        <Text style={tipStyle}>{tipText}</Text>
        <AntDesign name="rightcircle" style={styles.rightArrow} title="Change Text"
        onPress={onPressHandler}></AntDesign>
      </View>
      <View style={styles.dot}>
        <Entypo name="dot-single" style={styles.dotOne}></Entypo>
        <Entypo name="dot-single" style={dotStyle}></Entypo>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
