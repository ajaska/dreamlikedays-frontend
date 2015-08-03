import React from 'react';
import {DefaultRoute, Route} from 'react-router';
import MetaApp from './components/MetaApp';
import App from './components/App';
import Home from './components/Home';
import EntryList from './components/EntryList';

// import EntryList from './components/EntryList';
// import Editor from './components/Editor';
  //  <Route path='/entries' handler={EntryList} />
  //  <Route path='/new' handler={Editor} />

export default (
  <Route handler={MetaApp}>
    <Route name='index' path='/' handler={App}>
      <Route name='home' handler={Home} />
      <Route name='entries' handler={EntryList} />
      { /* <DefaultRoute handler={Home} /> */ }
    </Route>
  </Route>
);
