import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home, Login, Profile, KelTani, Penanaman, Penyuluh} from '../page';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
const MyTab = createBottomTabNavigator();

function Tab() {
  return (
    <MyTab.Navigator
      initialRouteName="Home"
      backBehavior="none"
      tabBarOptions={{
        activeTintColor: '#27ae60',
        labelStyle: {fontSize: 13},
      }}>
      <MyTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-variant-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <MyTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </MyTab.Navigator>
  );
}

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
        component={Tab}
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
