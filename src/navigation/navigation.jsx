import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Verification from '../screens/Verification';
import Home from '../screens/Home';
import ForgetPassword from '../screens/ForgetPassword';
import VerificationSuccess from '../screens/VerificationSuccess';
import CreatePassword from '../screens/CreatePassword';
import OnBoarding from '../screens/OnBoarding/index';
import OnBoarding1 from '../screens/OnBoarding/index1';
import GetStarted from '../screens/GetStarted';
import LocationAndNotification from '../screens/LocationAndNotification/index';
import LocationAndNotification1 from '../screens/LocationAndNotification/index1';
import Teleport from '../screens/teleport';

const Stack = createNativeStackNavigator();
export const AuthContext = React.createContext();
const Navigation = () => {
  let authContext = null;

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: '#fff'},
          }}>
          <Stack.Screen name="Teleport" component={Teleport} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreatePassword" component={CreatePassword} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen
            name="LocationAndNotification"
            component={LocationAndNotification}
          />
          <Stack.Screen
            name="LocationAndNotification1"
            component={LocationAndNotification1}
          />
          <Stack.Screen
            name="VerificationSuccess"
            component={VerificationSuccess}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Navigation;
