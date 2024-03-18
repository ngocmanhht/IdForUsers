/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Provider} from 'mobx-react';
import stores from './src/stores';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {I18nextProvider} from 'react-i18next';
import {i18nextService} from './src/i18n/i18n';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/services/query-client';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationService} from './src/navigators/navigation-services';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/config/toast-config';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <I18nextProvider i18n={i18nextService.i18next}>
        <QueryClientProvider client={queryClient}>
          <Provider {...stores}>
            <NavigationContainer ref={NavigationService.navigationRef}>
              <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
              <SafeAreaView>
                <Text>Hello</Text>
              </SafeAreaView>
            </NavigationContainer>

            <Toast config={toastConfig as any} />
          </Provider>
        </QueryClientProvider>
      </I18nextProvider>
    </>
  );
}

export default App;
