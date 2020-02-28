import React from 'react';
import { View } from 'react-native';

import Header from './components/Header';
import ExpensesList from './components/ExpensesList';
import Tab from './components/Tab';

import { getItem } from '../../services/asyncStorage';

import styles from './styles';

function Main({ navigation }) {

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ExpensesList navigation={navigation} />
      <Tab navigation={navigation} />
    </View>
  );
}

export default Main;
