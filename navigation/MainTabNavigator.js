import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Foundation } from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
import FacebookScreen from '../screens/FacebookScreen';
import TwitterScreen from '../screens/TwitterScreen';
import InstaScreen from '../screens/InstaScreen';
import YoutubeScreen from '../screens/YoutubeScreen';
import WebScreen from '../screens/WebScreen';
import MerchandiseScreen from '../screens/Merchandise';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const FbStack = createStackNavigator(
  {
    FB: FacebookScreen,
  },
  config
);

FbStack.navigationOptions = {
  tabBarLabel: 'Facebook',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `facebook-square${focused ? '' : '-outline'}`
          : 'facebook-square'
      }
    />
  ),
};

FbStack.path = '';

const TwitterStack = createStackNavigator(
  {
    Twitter: TwitterScreen,
  },
  config
);

TwitterStack.navigationOptions = {
  tabBarLabel: 'Twitter',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} 
    name={
      Platform.OS === 'ios'
        ? `twitter-square${focused ? '' : '-outline'}`
        : 'twitter-square'
    } />
  ),
};

TwitterStack.path = '';

const InstaStack = createStackNavigator(
  {
    Instagram: InstaScreen,
  },
  config
);

InstaStack.navigationOptions = {
  tabBarLabel: 'Instagram',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} 
    name={
      Platform.OS === 'ios'
        ? `instagram${focused ? '' : '-outline'}`
        : 'instagram'
    } />
  ),
};

InstaStack.path = '';

const YoutubeStack = createStackNavigator(
  {
    Youtube: YoutubeScreen,
  },
  config
);

YoutubeStack.navigationOptions = {
  tabBarLabel: 'Youtube',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} 
    name={
      Platform.OS === 'ios'
        ? `youtube-square${focused ? '' : '-outline'}`
        : 'youtube-square'
    } />
  ),
};

const WebStack = createStackNavigator(
  {
    Website: WebScreen,
  },
  config
);

const Merchandise = createStackNavigator(
  {
    Website: MerchandiseScreen,
  },
  { headerMode: 'none' },
);

WebStack.navigationOptions = {
  tabBarLabel: 'Web',
  tabBarIcon: ({ focused }) => (
    <Foundation focused={focused} 
    size={32}
    name={
      Platform.OS === 'ios'
        ? `web${focused ? '' : '-outline'}`
        : 'web'
    } />
  ),
};

const tabNavigator = createBottomTabNavigator({
  Merchandise,
  FbStack,
  TwitterStack,
  InstaStack,
  YoutubeStack,
  WebStack,
});

tabNavigator.path = '';

export default tabNavigator;
