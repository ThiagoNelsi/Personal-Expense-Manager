import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { getItem } from '../../../../services/asyncStorage';

import styles from './styles';

function Tab({ navigation }) {

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    updateBalance();
  }, []);

  async function updateBalance() {
    setBalance(await getItem('balance'));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('NewExpenseOrRevenue', { type: 'revenues', updateBalance })}>
        <Text style={styles.headerTextBold}>R$ { Number(balance).toFixed(2).replace('.', ',') }</Text>
        <Text style={styles.headerTextRegular}>saldo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addIconContainer} onPress={async () => { navigation.navigate('NewExpenseOrRevenue', { type: 'expenses', updateBalance } ); }} >
          <Ionicons name='ios-add' color="white" size={35} />
      </TouchableOpacity>
      <View>
        <Text style={styles.headerTextBold}>R$ 25,00</Text>
        <Text style={styles.headerTextRegular}>últimos 7 dias</Text>
      </View>
    </View>
  );
}

export default Tab;
