import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createTable } from './src/services/sqlite';
import { createIfNotExists } from './src/services/asyncStorage';

import Main from './src/pages/Main';
import NewExpenseOrRevenue from './src/pages/NewExpenseOrRevenue';

const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    createTable('expenses');
    createTable('revenues');
    createIfNotExists('balance', '0.0');
  }, []);

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='NewExpenseOrRevenue' component={NewExpenseOrRevenue} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
