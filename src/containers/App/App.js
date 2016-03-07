import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <section id="content" role="main">{this.props.children}</section>
      </div>
    );
  }
}

App.displayName = 'App';
App.propTypes = {
  children: PropTypes.element
};
