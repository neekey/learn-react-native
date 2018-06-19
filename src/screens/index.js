import { Navigation } from 'react-native-navigation';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';
import { default as AuthScreen, SCREEN_ID as authScreenId } from './auth';
import { default as SharePlaceScreen, SCREEN_ID as sharePlaceScreenId } from './sharePlace';
import { default as FindPlaceScreen, SCREEN_ID as findPlaceScreenId } from './findPlace';
import { default as PlaceDetailScreen, SCREEN_ID as placeDetailScreenId } from './placeDetail';
import { default as SideMenuScreen, SCREEN_ID as sideMenuScreenId } from './sideMenu';


const store = configureStore();

export function registerScreens() {
  Navigation.registerComponent(authScreenId, () => AuthScreen, store, Provider);
  Navigation.registerComponent(sharePlaceScreenId, () => SharePlaceScreen, store, Provider);
  Navigation.registerComponent(findPlaceScreenId, () => FindPlaceScreen, store, Provider);
  Navigation.registerComponent(placeDetailScreenId, () => PlaceDetailScreen, store, Provider);
  Navigation.registerComponent(sideMenuScreenId, () => SideMenuScreen, store, Provider);
}

export const SCREEN_IDS = {
  auth: authScreenId,
  sharePlace: sharePlaceScreenId,
  findPlace: findPlaceScreenId,
  placeDetail: placeDetailScreenId,
  sideMenu: sideMenuScreenId,
};
