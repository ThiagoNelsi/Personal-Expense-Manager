import React from 'react';
import { View } from 'react-native';

import ExpenceItem from './ExpenceItem';

function ExpencesList() {
  return (
    <View>
      <ExpenceItem />
      <ExpenceItem />
      <ExpenceItem />
      <ExpenceItem />
      <ExpenceItem />
    </View>
  );
}

export default ExpencesList;