import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      headerMode='none'
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  )
}

export default AppNavigator