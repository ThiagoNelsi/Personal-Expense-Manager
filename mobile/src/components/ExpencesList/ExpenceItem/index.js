import React from 'react';
import { View, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import styles from './styles';

function ExpenceItem() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.price}>R$ 5,00</Text>
        <Text style={styles.description}>Sem descrição</Text>
      </View> 
      <View>
        <EvilIcons name='location' size={25} color='#888' />
      </View> 
    </View>           
  );
}

export default ExpenceItem;