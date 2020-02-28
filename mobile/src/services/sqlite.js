import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('expensesApp.db');


export function createTable(tableName) {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, value REAL NOT NULL, description TEXT);`, [],()=>{}, (_,err) => console.log(err)
    );
  });
}

export function listItems(tableName, callback) {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM ${tableName} ORDER BY id DESC;`,
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

export function createItem(tableName, value, description, callback) {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO ${tableName} (value, description) VALUES (${value}, '${description}')`, [], callback(true), (_,err) => console.log(err)
    );
  });
}

export function deleteItem(tableName, id) {
  db.transaction(tx => {
    tx.executeSql(
      `DELETE FROM ${tableName} WHERE id = ${id};`
    );
  });
}
