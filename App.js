import React from 'react';
import Home from './app/Screens/Home';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import store, {peristedStore} from './app/Redux/store';

export default function App() {
  return <Home />;
}
