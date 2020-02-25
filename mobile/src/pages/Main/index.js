import React from 'react';
import { View, StatusBar } from 'react-native';

import Header from './components/Header';
import ExpencesList from './components/ExpencesList';
import Tab from './components/Tab';

import styles from './styles';

function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ExpencesList />
      <Tab navigation={navigation} />
    </View>
  );
}

export default Main;
