import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ComponentWrapper from '../ComponentWrapper';

export default class MediaVideo extends Component {
  render() {
    const componentProps = {
      identifier: this.props.identifier,
      type: 'media',
      columns: this.props.columns,
      rows: this.props.rows,
    };
    return (
      <ComponentWrapper {...componentProps}/>
    );
  }
}

MediaVideo.displayName = 'MediaVideo';
MediaVideo.propTypes = {
  identifier: PropTypes.string.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
};
MediaVideo.defaultProps = {
  columns: 2,
  rows: 2,
};
