import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import { SCREEN_IDS } from './index';
import Icon from 'react-native-vector-icons/Ionicons';
const IS_ANDROID = Platform.OS === 'android';

function loadIcons(icons) {
  return Promise.all(
    icons.map(icon => Icon.getImageSource(icon, 30))
  );
}

export function startMainScreen() {
  loadIcons([
    IS_ANDROID ? 'md-map' : 'ios-map',
    IS_ANDROID ? 'md-share-alt' : 'ios-share',
    IS_ANDROID ? 'md-menu' : 'ios-menu',
  ]).then(iconSources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: SCREEN_IDS.findPlace,
          label: 'Find Place',
          title: 'Find Place',
          icon: iconSources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: iconSources[2],
                title: 'Menu',
                id: 'drawerMenuButton'
              },
            ],
          },
        },
        {
          screen: SCREEN_IDS.sharePlace,
          label: 'Share Place',
          title: 'Share Place',
          icon: iconSources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: iconSources[2],
                title: 'Menu',
                id: 'drawerMenuButton'
              },
            ],
          },
        }
      ],
      drawer: {
        left: {
          screen: SCREEN_IDS.sideMenu,
        }
      }
    });
  });

}
