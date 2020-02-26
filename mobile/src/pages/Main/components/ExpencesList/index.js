import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { listExpences } from '../../../../services/sqlite';

import ExpenceItem from './ExpenceItem';

function ExpencesList() {

  const [refreshing, setRefreshing] = useState(false);
  const [expences, setExpences] = useState([]);

  function updateExpenceList() {
    listExpences(data => {
      setExpences(data);
    });
  }

  useEffect(() => {
    updateExpenceList();
  }, []);

  function onRefresh() {
    setRefreshing(true);
    updateExpenceList();
    setTimeout(() => setRefreshing(false), 500);
  }

  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      {expences.map(expence => <ExpenceItem key={expence.id} id={expence.id} value={expence.value} description={expence.description} update={updateExpenceList} />)}
    </ScrollView>
  );
}

export default ExpencesList;
