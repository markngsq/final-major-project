import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    return (
      <div>
        <header></header>
        <section id="content" role="main">{this.props.children}</section>
        <footer></footer>
      </div>
    );
  }
}

App.displayName = 'App';
App.propTypes = {
  children: PropTypes.element
};

function mapStateToProps(state, ownProps) {
  return {
    app: state.app,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {}
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
