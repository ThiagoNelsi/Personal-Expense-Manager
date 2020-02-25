import React from 'react';
import { View, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

function ExpenceItem() {
  return (
    <View>
      <View>
        <Text>R$ 5,00</Text>
        <Text>Sem descrição</Text>
      </View> 
      <View>
        <EvilIcons name='location' />
      </View> 
    </View>           
  );
}

export default ExpenceItem;