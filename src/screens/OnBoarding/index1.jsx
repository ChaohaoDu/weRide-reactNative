import React, {useState} from 'react';
import {Image, Linking, SafeAreaView, Text, View} from 'react-native';
import {deleteJWToken} from '../../utils/jwt';
import {AuthContext} from '../../navigation/navigation';
import CheckBox from 'react-native';
import styles from './style';
import {ucsdEmailRegex} from '../../constants';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../components/LongButton';
import FormInput from '../../components/FormInput';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../constants/constants';
let first_click = true;
const OnBoarding1 = () => {
    const auth = React.useContext(AuthContext);
    const logoImg = require('../../assets/images/logo/logo_text_at_bottom.png');
    const driverImgTwo = require('../../assets/images/on_boarding/driver_on_boarding_driver.png');
    const navigation = useNavigation();

    const onLogoutPressed = async () => {
      await deleteJWToken();
      auth.signOut();
    };

    return (
        <SafeAreaView>
            <View style={styles.root}>
                <Text style={styles.skip} onPress={() => {
                        navigation.navigate('GetStarted');
                    }}>Skip
                </Text>
                <Text style={styles.slogan}>Certified Driver and Rider</Text>
                <Image source={logoImg} style={styles.logo} />
                <Image source={driverImgTwo} style={styles.driverTwo}/>
                <Text style={styles.tip}>All drivers and riders are certified
                 UCSD students.</Text>
                <AntDesign
                    name="rightcircle"
                    style={styles.rightArrow}
                    onPress={() => {
                        navigation.navigate('GetStarted');
                    }}
                />
                <View style={styles.dot}>
                    <Entypo name="dot-single" style={styles.dotOne} />
                    <Entypo name="dot-single" style={styles.dotTwo1} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default OnBoarding1;