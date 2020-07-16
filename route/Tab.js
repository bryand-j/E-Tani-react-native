import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile} from '../page';

const MyTab = createBottomTabNavigator();

export default function Tab() {
  return (
    <MyTab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#27ae60',
      }}>
      <MyTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <MyTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </MyTab.Navigator>
  );
}
