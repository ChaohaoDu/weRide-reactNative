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
const GetStarted = () => {
    const navigation = useNavigation();
    const auth = React.useContext(AuthContext);
    const logoTextOnRightUrl = require('../../assets/images/logo/square_logo_text_on_right.png');

    const onLogoutPressed = async () => {
    await deleteJWToken();
    auth.signOut();
    };

    return (
    <SafeAreaView>
        <View style={styles.root}>
            <Image source={logoTextOnRightUrl} style={styles.logo} />
            <LongBottom
                onPress={() => {
                    navigation.navigate('LocationAndNotification');
                }}
                text={'Get Started'}
                otherStyle={styles.btn}
            />
        </View>
    </SafeAreaView>
    );
};

export default GetStarted;
