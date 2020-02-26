import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { db } from '../../../../services/sqlite';

import ExpenceItem from './ExpenceItem';

function ExpencesList() {

  const [expences, setExpences] = useState();

  useEffect(() => {
    function getExpencesList() {
      return new Promise(
        function (resolve, reject) {
          db.transaction(tx => {
            tx.executeSql(
              "SELECT * FROM expences;",
              [],
              (_, { rows }) => {
                  resolve(setExpences(rows._array));
              },
              (_, err) => {
                reject(console.log(err));
              }
            );
          });
        }
      )
    }
    getExpencesList();
  }, []);

  if(!expences) return null;

  return (
    <ScrollView>
      {expences.map(expence => <ExpenceItem key={expence.id} value={expence.value} description={expence.description} />)}
    </ScrollView>
  );
}

export default ExpencesList;
