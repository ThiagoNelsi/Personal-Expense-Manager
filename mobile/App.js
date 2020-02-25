import React from 'react';
import { View, StatusBar } from 'react-native';

import Header from './src/components/Header';
import ExpencesList from './src/components/ExpencesList';
import Tab from './src/components/Tab';

import styles from './App.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Header style={styles.header} />
      <ExpencesList style={styles.expencesList} />
      <Tab style={styles.tab} />
    </View>
  );
}
