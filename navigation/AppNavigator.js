import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WebScreen from '../screens/WebScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Apps: MainTabNavigator,
    Merchandise: {
      screen: WebScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Web',
      }),
    },
  })
);
