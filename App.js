import { Navigation } from 'react-native-navigation';
import { registerScreens, SCREEN_IDS } from './src/screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: SCREEN_IDS.auth,
    title: 'Auth',
  },
});
