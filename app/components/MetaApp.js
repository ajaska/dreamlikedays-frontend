import React, { Component } from 'react';
import { RouteHandler } from 'react-router';

import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';

const redux = createRedux(stores);

export default class MetaApp extends React.Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => <RouteHandler />}
      </Provider>
    );
  }
}
