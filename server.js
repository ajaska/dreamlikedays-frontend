var express = require('express');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');

var swig = require('swig');
var routes = require('./app/routes');
var React = require('react');
var Router = require('react-router');

import { fetchEntries } from './app/actions/EntryActions.js'
import { createRedux } from 'redux';
import * as stores from './app/stores';

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));
// Serve favicon
app.use(favicon(path.join(__dirname, 'public/favicon.ico')));

// Serve all other requests; pre-render react on server
app.use(function(req, res) {
  Router.run(routes, req.path, async function(Handler) {
    var redux = createRedux(stores);
    await redux.dispatch(fetchEntries());
    var html = React.renderToString(React.createElement(Handler, {redux: redux}));
    var page = swig.renderFile('./index.html', { html: html, initialState: redux.getState() });
    res.send(page);
  });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
