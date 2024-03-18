import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageKeys} from 'const';

class AsyncStorageService {
  saveAccessToken = async (token: string) => {
    try {
      await AsyncStorage.setItem(AsyncStorageKeys.AccessToken, token);
    } catch (e) {
      console.log('Error when save AccessToken: ', e);
    }
  };

  getAccessToken = async () => {
    try {
      const accessToken = await AsyncStorage.getItem(
        AsyncStorageKeys.AccessToken,
      );
      return accessToken;
    } catch (e) {
      console.log('Error when get AccessToken: ', e);
    }
  };
}

export const asyncStorageService = new AsyncStorageService();
