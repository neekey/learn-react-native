import { createStore, combineReducers, compose } from 'redux';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default function configureStore() {
  return createStore(rootReducer, composeEnhancers());
}
