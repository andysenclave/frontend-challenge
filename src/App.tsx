import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Router from './Routes';

const app = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default app;
