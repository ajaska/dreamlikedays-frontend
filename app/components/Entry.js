import React, { Component, PropTypes } from 'react';

export default class Entry extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  };

  render() {
    const {title, body} = this.props;

    return (
      <div>
        <div className='entry'>
          <div className='entry-title'>
            Title: { title }
          </div>
          <div className='entry-body'>
            Body: { body }
          </div>
        </div>
      </div>
    );
  }
}
