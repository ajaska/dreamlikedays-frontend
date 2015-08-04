import React, { Component, PropTypes } from 'react';
import { RouteHandler } from 'react-router';

import { Provider } from 'redux/react';

export default class MetaApp extends React.Component {
  static propTypes = {
    redux: PropTypes.object.isRequired
  };

  render() {
    return (
      <Provider redux={this.props.redux}>
        {() => <RouteHandler />}
      </Provider>
    );
  }
}
