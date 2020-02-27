import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

function Tab({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addIconContainer} onPress={() => navigation.navigate('NewExpense')}>
          <Ionicons name='ios-add' color="white" size={35} />
      </TouchableOpacity>
    </View>
  );
}

export default Tab;
