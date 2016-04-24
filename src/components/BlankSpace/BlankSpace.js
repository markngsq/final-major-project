import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ComponentWrapper from '../ComponentWrapper';

export default class BlankSpace extends Component {
  render() {
    const componentProps = {
      identifier: this.props.identifier,
      type: 'blankspace',
      columns: this.props.columns,
      rows: this.props.rows,
    };
    return (
      <ComponentWrapper {...componentProps}/>
    );
  }
}

BlankSpace.displayName = 'BlankSpace';
BlankSpace.propTypes = {
  identifier: PropTypes.string.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
};
BlankSpace.defaultProps = {
  columns: 2,
  rows: 2,
};
