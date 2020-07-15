import * as React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Login, Home, Profile} from './page';

const App = () => {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#27ae60"
        translucent={true}
      />
      <Profile />
    </View>
  );
};

export default App;
