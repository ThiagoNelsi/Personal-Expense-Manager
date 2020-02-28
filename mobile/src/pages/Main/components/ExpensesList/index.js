import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl, Text } from 'react-native';
import { listItems } from '../../../../services/sqlite';

import ExpenseItem from './ExpenseItem';
import styles from './styles';

function ExpensesList({ type }) {

  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    onRefresh();
  }, [type]);

  function onRefresh() {
    setRefreshing(true);
    updateExpenseList();
    setTimeout(() => setRefreshing(false), 500);
  }

  function updateExpenseList() {
    listItems(type, data => {
      setList(data);
    });
  }

  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      { list.length > 0
        ? list.map(item => <ExpenseItem key={item.id} id={item.id} value={item.value} description={item.description} update={updateExpenseList} type={type} />)
        : <Text style={styles.noDataMessage}>Nenhum registro</Text>
      }
    </ScrollView>
  );
}

export default ExpensesList;
