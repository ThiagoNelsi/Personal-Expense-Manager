import React, { useState, useContext } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';

import { createItem } from '../../services/sqlite';
import { getItem, setItem } from '../../services/asyncStorage';

import { appContext } from '../../context';

import styles from './styles';

function NewExpenseOrRevenue({ navigation }) {

  const { updateBalance, type, onRefresh } = useContext(appContext);

  const [money, setMoney] = useState('');
  const [cents, setCents] = useState('00');
  const [description, setDescription] = useState('');

  async function handleSubmit() {

    const value = Number(money + '.' + cents);
    createItem(type, value, description, (success) => {
      if (success) navigation.navigate('Main');
    });

    if (type === 'revenues') {
      const lastValue = Number(await getItem('balance'));
      await setItem('balance', (lastValue + value).toFixed(2));
    } else {
      const lastValue = Number(await getItem('balance'));
      await setItem('balance', (lastValue - value).toFixed(2));
    }

    onRefresh();
    updateBalance();
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.subContainer}>
        <View style={styles.moneyInputContainer}>
          <Text style={styles.moneyInputText}>R$</Text>
          <TextInput style={styles.moneyInput} keyboardType='decimal-pad' maxLength={5} autoFocus={true} value={money} onChangeText={setMoney} />
          <TextInput style={styles.centsInput} keyboardType='decimal-pad' maxLength={2} value={cents} onChangeText={setCents} />
        </View>
        <View>
          <TextInput style={styles.descriptionInput} placeholder='Descrição...' maxLength={35} value={description} onChangeText={setDescription} />
        </View>
        <TouchableOpacity style={styles.btnContainer} onPress={() => handleSubmit()}>
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default NewExpenseOrRevenue;
