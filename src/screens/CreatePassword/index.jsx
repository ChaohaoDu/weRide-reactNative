import React, {useState} from 'react';
import {Image, Linking, SafeAreaView, Text, View} from 'react-native';
import styles from './style';
import {ucsdEmailRegex} from '../../constants/constants';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../components/LongButton';
import FormInput from '../../components/FormInput';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
const CreatePassword = () => {
  // const auth = React.useContext(AuthContext);
  //     const onLogoutPressed = async () => {
  //     await deleteJWToken();
  //     auth.signOut();
  // };
  const invalidPasswordErrorMessage = 'Please enter valid password';
  const PasswordUnmatch = "The password doesn't match";
  const navigation = useNavigation();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [password, setPassword] = useState(''); //I guess write like this?
  const validatePassword = () => {
    // todo
    return;
  };
  const checkPasswordSame = () => {
    //todo
    return;
  };
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Create New Password</Text>
        <Text>Create your new password to login </Text>
        <FormInput
          tag={'Password'}
          icon={<Feather name={'lock'} style={{marginRight: 8}} size={16} />}
          onChangeText={setPassword}
          errorMessage={invalidPasswordErrorMessage}
          value={password}
          autoCorrect={false}
          autoCapitalize={'none'}
          inputMode={'password'}
          onBlur={validatePassword} //todo how to onblue this
          placeholder={'Enter your password'}
        />

        <FormInput
          tag={'Password'}
          icon={<Feather name={'lock'} style={{marginRight: 8}} size={16} />}
          onChangeText={setPassword}
          errorMessage={PasswordUnmatch}
          value={password}
          autoCorrect={false}
          autoCapitalize={'none'}
          inputMode={'password'}
          onBlur={validatePassword} //todo how to onblue this
          placeholder={'Enter your password'}
        />

        <LongBottom
          onPress={() => {
            navigation.navigate('Home');
          }} //Todo verify login infos
          disabled={btnDisabled}
          text={'Submit'}
          otherStyle={styles.btn}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreatePassword;
