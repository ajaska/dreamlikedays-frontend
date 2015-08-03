import React, { Component, PropTypes } from 'react';

export default class EntryEditor extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    addEntry: PropTypes.func.isRequired
  };

  handleSubmit(e) {
    e.preventDefault();
    let title = React.findDOMNode(this.refs.title).value.trim();                
    let text = React.findDOMNode(this.refs.text).value.trim();                  
    if (!title || !text) {
      return
    }

    React.findDOMNode(this.refs.title).value = '';
    React.findDOMNode(this.refs.text).value = '';

    this.props.addEntry(title, text); 

    return;
  }

  render() {
    const {title, body} = this.props;

    return (
      <div className="entry-editor">
        <form className="entry-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" ref="title" value={title} />
          <textarea placeholder="Say something..." rows="12" ref="text">{body}</textarea>
          <input type="submit" value="Save" />
        </form>
      </div>
    )
  }
}
