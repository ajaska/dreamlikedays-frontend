import React from 'react';
import Router from 'react-router';
import routes from './routes';

import { createRedux } from 'redux';
import * as stores from './stores';

let initialState = window.__INITIAL_STATE__;
const redux = createRedux(stores, initialState);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler redux={redux}/>, document.getElementById('root'));
});
