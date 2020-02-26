import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('expencesApp.db');

export function createTable() {
  db.transaction(tx => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS expences (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, value REAL NOT NULL, description TEXT);"
    );
  });
}

// export async function listExpences() {

//   const data = await
//   return data;
// }

export function createExpence(value, description, callback) {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO expences (value, description) VALUES (${value}, '${description}')`, [], callback(true), callback(false)
    );
  });
}
