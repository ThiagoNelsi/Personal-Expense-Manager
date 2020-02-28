import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { getItem } from '../../../../services/asyncStorage';

import styles, { Button } from './styles';

function Tab({ navigation, type }) {

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    updateBalance();
  }, []);

  async function updateBalance() {
    setBalance(await getItem('balance'));
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTextBold}>R$ { Number(balance).toFixed(2).replace('.', ',') }</Text>
        <Text style={styles.headerTextRegular}>saldo</Text>
      </View>
      <Button type={type} style={styles.addIconContainer} onPress={async () => { navigation.navigate('NewExpenseOrRevenue', { type: type, updateBalance } ); }} >
          { type === 'revenues'
            ? <Ionicons name='ios-add' color='white' size={35} />
            : <AntDesign name='minus' color='white' size={35} />
          }
      </Button>
      <View>
        <Text style={styles.headerTextBold}>R$ 0,00</Text>
        <Text style={styles.headerTextRegular}>últimos 7 dias</Text>
      </View>
    </View>
  );
}

export default Tab;
