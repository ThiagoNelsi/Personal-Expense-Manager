import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';

import { createExpence, listExpences } from '../../services/sqlite';

import styles from './styles';

function NewExpence({ navigation }) {

  const [money, setMoney] = useState('');
  const [cents, setCents] = useState('00');
  const [description, setDescription] = useState('');

  function handleSubmit() {
    const value = Number(money + '.' + cents);
    createExpence(value, description, (success) => {
      if(success) navigation.navigate('Main');
    });

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

export default NewExpence;
