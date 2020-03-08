import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import { appContext } from '../../../../../context';

import { deleteItem } from '../../../../../services/sqlite';
import { setItem } from '../../../../../services/asyncStorage';

import styles, { Container } from './styles';

function ExpenseItem({ value, description, id }) {

  const { updateList, type, balance, updateBalance } = useContext(appContext);

  async function handleDelete() {
    const newBalanceValue = Number(balance) + (type === 'revenues' ? -value : value);
    await setItem('balance', String(newBalanceValue.toFixed(2)));
    deleteItem(type, id);
    updateList();
    updateBalance();
  }

  return (
    <Container type={type} style={styles.container}>
      <View>
        <Text style={styles.price}>R$ { String(value.toFixed(2)).replace('.', ',') }</Text>
        <Text style={styles.description}>{ description ? description : 'Sem descrição' }</Text>
      </View>
      <TouchableOpacity onPress={() => handleDelete()}>
        <EvilIcons name='trash' size={25} color='#a83232' />
      </TouchableOpacity>
    </Container>
  );
}

export default ExpenseItem;
