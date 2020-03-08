import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { appContext } from '../../../../context';

import styles, { Button, Balance } from './styles';

function Tab({ navigation }) {

  const { type, balance, updateBalance } = useContext(appContext);

  useEffect(() => {
    updateBalance();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Balance style={styles.headerTextBold} isNegative={Number(balance) < 0}>R$ { Number(balance).toFixed(2).replace('.', ',') }</Balance>
        <Text style={styles.headerTextRegular}>saldo</Text>
      </View>
      <View style={styles.item}>
        <Button type={type} style={styles.addIconContainer} onPress={() => navigation.navigate('NewExpenseOrRevenue') }>
            { type === 'revenues'
              ? <Ionicons name='ios-add' color='white' size={35} />
              : <AntDesign name='minus' color='white' size={35} />
            }
        </Button>
      </View>
      <View style={styles.item}>
        <Balance style={styles.headerTextBold} isNegative={false}>R$ 0,00</Balance>
        <Text style={styles.headerTextRegular}>últimos 7 dias</Text>
      </View>
    </View>
  );
}

export default Tab;
