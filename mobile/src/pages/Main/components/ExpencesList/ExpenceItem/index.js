import React from 'react';
import { View, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import styles from './styles';

function ExpenceItem({ value, description = 'Sem descrição' }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.price}>R$ { value.toFixed(2) }</Text>
        <Text style={styles.description}>{ description }</Text>
      </View>
      <View>
        <EvilIcons name='location' size={25} color='#888' />
      </View>
    </View>
  );
}

export default ExpenceItem;
