import React, { useState } from 'react';
import { View } from 'react-native';

import Header from './components/Header';
import ExpensesList from './components/ExpensesList';
import Tab from './components/Tab';

import { getItem } from '../../services/asyncStorage';

import styles from './styles';

function Main({ navigation }) {

  const [type, setType] = useState('expenses');

  console.log(type);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} setType={setType} />
      <ExpensesList navigation={navigation} type={type} />
      <Tab navigation={navigation} />
    </View>
  );
}

export default Main;
