import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { appContext } from '../../../../context';

import styles, { Button } from './styles';

function Tab({ navigation }) {

  const { type, balance, updateBalance } = useContext(appContext);

  useEffect(() => {
    updateBalance();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTextBold}>R$ { Number(balance).toFixed(2).replace('.', ',') }</Text>
        <Text style={styles.headerTextRegular}>saldo</Text>
      </View>
      <Button type={type} style={styles.addIconContainer} onPress={() => navigation.navigate('NewExpenseOrRevenue') }>
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
