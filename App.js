import React from 'react';
import Drawer from './routes/homeStack';
import { Provider } from 'react-redux'
import store from './store/index'

export default function App() {
  return (
    <Provider store={store}>
      <Drawer />
    </Provider>
  );
}

