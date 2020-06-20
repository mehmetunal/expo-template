import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const Stack = createStackNavigator();

const Navigator = () => {
  const isLoggedIn = false

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={AppNavigator} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator