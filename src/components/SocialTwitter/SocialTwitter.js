import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ComponentWrapper from '../ComponentWrapper';

export default class SocialTwitter extends Component {
  render() {
    const componentProps = {
      identifier: this.props.identifier,
      type: 'social',
      columns: this.props.columns,
      rows: this.props.rows,
    };
    return (
      <ComponentWrapper {...componentProps}/>
    );
  }
}

SocialTwitter.displayName = 'SocialTwitter';
SocialTwitter.propTypes = {
  identifier: PropTypes.string.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
};
SocialTwitter.defaultProps = {
  columns: 2,
  rows: 2,
};
