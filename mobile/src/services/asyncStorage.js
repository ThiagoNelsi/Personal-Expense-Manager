import { AsyncStorage } from 'react-native';

export async function createIfNotExists(key, value) {
  try {
    const data = await getItem(key);

    if (!data) AsyncStorage.setItem(key, value);
    else throw new Error('item already exists');

  } catch (err) {
    console.log(err);
  }
}

export async function setItem(key, value) {
  await AsyncStorage.setItem(key, value);
}

export async function getItem(key) {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch (err) {
    console.log('err' + err);
  }
}

