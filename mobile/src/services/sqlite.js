import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('expencesApp.db');

export function createTable() {
  db.transaction(tx => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS expences (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, value REAL NOT NULL, description TEXT);"
    );
  });
}

export function listExpences(callback) {
  db.transaction(tx => {
    tx.executeSql(
      "SELECT * FROM expences ORDER BY id DESC;",
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

export function createExpence(value, description, callback) {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO expences (value, description) VALUES (${value}, '${description}')`, [], callback(true), callback(false)
    );
  });
}

export function deleteExpence(id) {
  console.log(id);
  db.transaction(tx => {
    tx.executeSql(
      `DELETE FROM expences WHERE id = ${id};`
    );
  });
}
