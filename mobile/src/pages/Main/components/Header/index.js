import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { appContext } from '../../../../context';

import styles from './styles';

function Header() {

  const { setType } = useContext(appContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ borderRightWidth: 1, ...styles.headerIcon }} onPress={() => setType('revenues') } >
        <Text style={styles.headerIconTextGreen}>Receita</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerIcon} onPress={() => setType('expenses') } >
        <Text style={styles.headerIconTextRed}>Despesas</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Header;

