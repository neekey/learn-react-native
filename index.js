import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('learnreactnative', () => () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
));
