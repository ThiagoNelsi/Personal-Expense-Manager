import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTextBold}>R$ 10,00</Text>
        <Text style={styles.headerTextRegular}>saldo</Text>
      </View>
      <View>
        <Text style={styles.headerTextBold}>R$ 25,00</Text>
        <Text style={styles.headerTextRegular}>últimos 7 dias</Text>
      </View>
    </View>
  );
}

export default Header;

