import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Home, Login, Profile, KelTani, Penanaman, Penyuluh} from '../page';

const Stack = createStackNavigator();

export default function Route() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Penanaman"
        component={Penanaman}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KelTani"
        component={KelTani}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Penyuluh"
        component={Penyuluh}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
