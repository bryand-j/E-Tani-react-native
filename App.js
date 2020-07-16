import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import Tab from './route/Tab';
import Route from './route/Route';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#27ae60"
        translucent={true}
      />
      <Route />
    </NavigationContainer>
  );
};
export default App;
