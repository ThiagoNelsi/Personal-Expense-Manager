import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import { deleteItem } from '../../../../../services/sqlite';

import styles, { Container } from './styles';

function ExpenseItem({ value, description, id, update, type }) {

  function handleDelete() {
    deleteItem(type, id);
    update();
  }

  return (
    <Container type={type} style={styles.container}>
      <View>
        <Text style={styles.price}>R$ { value.toFixed(2) }</Text>
        <Text style={styles.description}>{ description ? description : 'Sem descrição' }</Text>
      </View>
      <TouchableOpacity onPress={() => handleDelete()}>
        <EvilIcons name='trash' size={25} color='#a83232' />
      </TouchableOpacity>
    </Container>
  );
}

export default ExpenseItem;
