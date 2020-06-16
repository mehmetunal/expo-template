import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const Stack = createStackNavigator();

const Navigator = () => {
  const isLoggedIn = true

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
      >
        {isLoggedIn ? (
          <Stack.Screen name="App" component={AppNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator