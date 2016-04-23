import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { componentsMap } from '../../config.js';
import * as componentsActions from '../../actions/components';
import BlankSpace from '../../components/BlankSpace';

export class Components extends Component {
  _renderComponent(componentId, key) {
    const component = componentsMap[componentId];
    if (component) {
      switch (component.type) {
      case 'BlankSpace':
        return (
          <BlankSpace
            identifier={componentId}
            columns={component.columns}
            rows={component.rows}
            key={key}
          />
        );
      }
    }
    return null;
  }

  render() {
    return (
      <div id="components">
        <div className="container-fluid">
          <div className="row">
            {this.props.components.list.map((componentId, key) => this._renderComponent(componentId, key))}
          </div>
        </div>
      </div>
    );
  }
}

Components.displayName = 'Components';
Components.propTypes = {};

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
export default connect(mapStateToProps, mapDispatchToProps)(Components);
