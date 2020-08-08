/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import { Provider } from 'react-redux';
import Main from './Screen/Main/Main';
import { store, persistor } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>
);