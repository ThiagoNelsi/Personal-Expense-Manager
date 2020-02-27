import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('expensesApp.db');


export function createTable() {
  db.transaction(tx => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, value REAL NOT NULL, description TEXT);", [],()=>{}, (_,err) => console.log(err)
    );
  });
}

export function listExpenses(callback) {
  db.transaction(tx => {
    tx.executeSql(
      "SELECT * FROM expenses ORDER BY id DESC;",
      [],
      (_, { rows }) => {
          callback(rows._array);
      },
      (_, err) => {
        console.log(err);
      }
    );
  });
}

export function createExpense(value, description, callback) {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO expenses (value, description) VALUES (${value}, '${description}')`, [], callback(true), callback(false)
    );
  });
}

export function deleteExpense(id) {
  console.log(id);
  db.transaction(tx => {
    tx.executeSql(
      `DELETE FROM expenses WHERE id = ${id};`
    );
  });
}
