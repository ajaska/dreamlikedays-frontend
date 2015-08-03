import React, { Component, PropTypes } from 'react';
import Entry from './Entry';
import EntryEditor from './EntryEditor';
import * as actions from '../actions/EntryActions';

import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';

@connect(state => ({
  entries: state.entries
}))
export default class EntryList extends Component {
  static propTypes = {
    entries: PropTypes.array.isRequired
  }

  render() {
    const { entries, dispatch } = this.props;

    const creators = bindActionCreators(actions, dispatch);

    return (
      <div>
        This is entries!
        <div className='entry-list-container'>
          <EntryEditor {...creators} />
          <ul className="entry-list">
            {entries.map(entry =>
              <Entry key={entry.id} title={entry.title} body={entry.body} />
            )}
          </ul>
        </div>
      </div>
    );
  }
}
