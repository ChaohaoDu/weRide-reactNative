import type {Node} from 'react';
import React from 'react';
import Navigation from './src/navigation/navigation';
import Verification from './src/screens/Verification';
import Login from './src/screens/Login';
import setCustomText from './src/utils/setCustomText';
import {SafeAreaView, View} from 'react-native';
import ActivityBoard from './src/screens/ActivityBoard';
setCustomText();
const App: () => Node = () => {
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
