import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createTable } from './src/services/sqlite';

import Main from './src/pages/Main';
import NewExpence from './src/pages/NewExpence';

const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    createTable();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='NewExpence' component={NewExpence} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
