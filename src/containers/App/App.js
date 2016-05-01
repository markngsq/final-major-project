import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Header from '../Header';
import Footer from '../../components/Footer';

export class App extends Component {
  componentDidMount() {
    document.body.classList.toggle('wysiwyg', this.props.components.isWYSIWYG)
  }

  componentDidUpdate() {
    document.body.classList.toggle('wysiwyg', this.props.components.isWYSIWYG)
  }

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
  return {
    components: state.components,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      goto: (path) => dispatch(push(path)),
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
