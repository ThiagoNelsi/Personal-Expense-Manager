import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

function NewExpence() {
  return (
    <View>
      <View>
        <Text>R$</Text>
        <TextInput />
        <TextInput />
      </View>
      <View>
        <TextInput />
      </View>
      <TouchableOpacity>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NewExpence;