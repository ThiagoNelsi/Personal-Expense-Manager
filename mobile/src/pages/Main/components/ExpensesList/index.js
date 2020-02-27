import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { listExpenses } from '../../../../services/sqlite';

import ExpenseItem from './ExpenseItem';

function ExpensesList() {

  const [refreshing, setRefreshing] = useState(false);
  const [expenses, setExpenses] = useState([]);

  function updateExpenseList() {
    listExpenses(data => {
      setExpenses(data);
    });
  }

  useEffect(() => {
    updateExpenseList();
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
      {expenses.map(expense => <ExpenseItem key={expense.id} id={expense.id} value={expense.value} description={expense.description} update={updateExpenseList} />)}
    </ScrollView>
  );
}

export default ExpensesList;
