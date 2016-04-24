import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ComponentWrapper from '../ComponentWrapper';

export default class NavigationHeader extends Component {
  render() {
    const componentProps = {
      identifier: this.props.identifier,
      type: 'navigation',
      columns: this.props.columns,
      rows: this.props.rows,
    };
    return (
      <ComponentWrapper {...componentProps}/>
    );
  }
}

NavigationHeader.displayName = 'NavigationHeader';
NavigationHeader.propTypes = {
  identifier: PropTypes.string.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
};
NavigationHeader.defaultProps = {
  columns: 2,
  rows: 2,
};
