import React, { useState, useEffect, createContext } from 'react';

import { listItems } from '../services/sqlite';
import { getItem } from '../services/asyncStorage';

export const appContext = createContext();
function ContextProvider({ children }) {

  const [type, setType] = useState('expenses');
  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState([]);
  const [balance, setBalance] = useState(0);

  const updateBalance = async () => {
    setBalance(await getItem('balance'));
  }

  const onRefresh = () => {
    setRefreshing(true);
    updateList();
    setTimeout(() => setRefreshing(false), 500);
  }

  const updateList = () => {
    listItems(type, data => {
      setList(data);
    });
  }

  const state = {
    type,
    setType,
    refreshing,
    setRefreshing,
    onRefresh,
    list,
    setList,
    balance,
    setBalance,
    updateBalance,
    updateList
  }

  return <appContext.Provider value={state}>{ children }</appContext.Provider>
}

export default ContextProvider;
