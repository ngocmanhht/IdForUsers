export enum Screens {
  Walkthrough = 'Walkthrough',
  Login = 'Login',
  Register = 'Register',
  ResetPassword = 'ResetPassword',
  Home = 'HomeScreen',
}

export const DEFAULT_REFETCH_TIME = 30000;
export const API_URL = process.env.REACT_APP_API_URL || '';
export enum AsyncStorageKeys {
  AccessToken = 'access_token',
}
