import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { components_options } from '../../config.js';
import * as searchActions from '../../actions/search';
import * as componentsActions from '../../actions/components';

export class Search extends Component {

  _handleOnChange(e) {
    this.props.actions.search.updateValue(e.target.value);
  }

  _handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.actions.components.add(e.target.value);
      this.props.actions.search.updateValue('');
    }
  }

  _filterOptions(options, filterString, values) {
    return options;
  }

  render() {
    return (
      <input
        id="search-input"
        className="form-control"
        type="text"
        value={this.props.search.value}
        onChange={this._handleOnChange.bind(this)}
        onKeyDown={this._handleKeyDown.bind(this)}
      />
    );
  }
}

Search.displayName = 'Search';
Search.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    search: state.search,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      goto: (path) => dispatch(push(path)),
      search: {
        updateValue: (value) => dispatch(searchActions.updateSearchValue(value)),
      },
      components: {
        add: (componentId) => dispatch(componentsActions.addComponent(componentId)),
        remove: (componentId) => dispatch(componentsActions.removeComponent(componentId)),
      },
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
