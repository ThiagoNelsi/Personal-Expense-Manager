import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { listItems } from '../../../../services/sqlite';
import { getItem } from '../../../../services/asyncStorage';

import ExpenseItem from './ExpenseItem';

function ExpensesList() {

  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState([]);

  function updateExpenseList() {
    listItems('expenses', data => {
      setList(data);
    });
  }

  useEffect(() => {
    onRefresh();
  }, []);

  function onRefresh() {
    setRefreshing(true);
    updateExpenseList();
    setTimeout(() => setRefreshing(false), 500);
  }

  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      {list.map(item => <ExpenseItem key={item.id} id={item.id} value={item.value} description={item.description} update={updateExpenseList} />)}
    </ScrollView>
  );
}

export default ExpensesList;
