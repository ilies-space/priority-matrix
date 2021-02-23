import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import ListsReducer from './ListsReducer';

const AppReducers = combineReducers({
  ListsReducer,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['ListsReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
export const peristedStore = persistStore(store);

export default store;
