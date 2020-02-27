import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import { deleteExpense } from '../../../../../services/sqlite';

import styles from './styles';

function ExpenseItem({ value, description, id, update }) {

  function handleDelete() {
    deleteExpense(id);
    update();
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.price}>R$ { value.toFixed(2) }</Text>
        <Text style={styles.description}>{ description ? description : 'Sem descrição' }</Text>
      </View>
      <TouchableOpacity onPress={() => handleDelete()}>
        <EvilIcons name='trash' size={25} color='#a83232' />
      </TouchableOpacity>
    </View>
  );
}

export default ExpenseItem;
