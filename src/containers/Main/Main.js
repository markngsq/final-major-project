import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Search from '../../containers/Search';
import Components from '../../containers/Components';

export class Main extends Component {
  render() {
    return (
      <div id="main">
        <div className="container-fluid">
          <Search/>
          <Components/>
        </div>

      </div>
    );
  }
}

Main.displayName = 'Main';
Main.propTypes = {};

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
export default connect(mapStateToProps, mapDispatchToProps)(Main);
