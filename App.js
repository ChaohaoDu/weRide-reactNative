import React from 'react';
import Navigation from './src/navigation/navigation';
import Verification from './src/screens/Auth/Verification';
import Login from './src/screens/Auth/Login';
import setCustomText from './src/utils/setCustomText';
import {SafeAreaView, View} from 'react-native';
import ActivityBoard from './src/components/ActivityBoard';
setCustomText();
const App = () => {
  // return (
  //   <SafeAreaView>
  //     <View style={{padding: 10}}>
  //       <ActivityBoard />
  //     </View>
  //   </SafeAreaView>
  // );
  return <Navigation />;
  // return <Verification />;
  // return <Login />;
};

export default App;
