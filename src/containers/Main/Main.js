import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as appActions from '../../actions/app';

export class Main extends Component {
  _handleClick(e) {
    e.preventDefault();
    this.props.actions.app.test();
  }

  render() {
    return (
      <div id="main">
        <a href="#" onClick={this._handleClick.bind(this)}>Test</a>
      </div>
    );
  }
}

Main.displayName = 'Main';
Main.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    app: state.app,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      app: {
        goto: (path) => dispatch(push(path)),
        test: () => dispatch(appActions.test()),
      }
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
