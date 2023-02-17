import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {deleteJWToken} from '../../utils/jwt';
import {AuthContext} from '../../navigation/navigation';

const ForgetPassword = () => {
  const auth = React.useContext(AuthContext);

  const onLogoutPressed = async () => {
    await deleteJWToken();
    auth.signOut();
  };

  return (
    <SafeAreaView>
      <Text>ForgetPassword</Text>
    </SafeAreaView>
  );
};

export default ForgetPassword;
