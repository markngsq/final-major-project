import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { componentsArray, componentsMap } from '../../config.js';
import Search from '../Search';
import * as componentsActions from '../../actions/components';

export class Header extends Component {
  _renderComponentListItem(componentId) {
    const component = componentsMap[componentId];
    return (
      <li key={componentId}>
        <a href="#" className="component-item-link" onClick={this.props.actions.components.add.bind(this, componentId)}>
          <div className="component-item">
            <h2>{componentId}</h2>
            <div className="content">
              <p>
                Size: {component.columns}x{component.rows}<br/>
                Type: {component.type_string}
              </p>
              <p>{component.description}</p>
            </div>
          </div>
        </a>
      </li>
    );
  }

  render() {
    return (
      <header role="header" id="header" className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">snap.web</a>
          </div>
          <div className="navbar-form navbar-left">
            <div className="form-group">
              <Search/>
            </div>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Components <span className="caret"></span>
              </a>
              <ul className="dropdown-menu component-list">
                {componentsArray.map((componentId) => this._renderComponentListItem(componentId))}
              </ul>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

Header.displayName = 'Header';
Header.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      goto: (path) => dispatch(push(path)),
      components: {
        add: (componentId) => dispatch(componentsActions.addComponent(componentId)),
      },
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
