import React, { useEffect, useContext } from 'react';
import { ScrollView, RefreshControl, Text } from 'react-native';

import { appContext } from '../../../../context';

import ExpenseItem from './ExpenseItem';
import styles from './styles';

function ExpensesList() {

  const { type, refreshing, onRefresh, list } = useContext(appContext);

  useEffect(() => {
    onRefresh();
  }, [type]);

  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      { list.length > 0
        ? list.map(item => <ExpenseItem key={item.id} id={item.id} value={item.value} description={item.description} />)
        : <Text style={styles.noDataMessage}>Nenhum registro</Text>
      }
    </ScrollView>
  );
}

export default ExpensesList;
