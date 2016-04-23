import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export class App extends Component {
  render() {

    return (
      <div>
        <Header/>
        <section id="content" role="main">{this.props.children}</section>
        <Footer/>
      </div>
    );
  }
}

App.displayName = 'App';
App.propTypes = {
  children: PropTypes.element
};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      goto: (path) => dispatch(push(path)),
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
