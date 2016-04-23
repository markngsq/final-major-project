import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header role="header" id="header" className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">snap.web</a>
          </div>
        </div>
      </header>
    );
  }
}

Header.displayName = 'Header';
Header.propTypes = {};
