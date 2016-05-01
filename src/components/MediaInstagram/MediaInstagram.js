import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ComponentWrapper from '../ComponentWrapper';

export default class MediaInstagram extends Component {
  render() {
    const componentProps = {
      identifier: this.props.identifier,
      type: 'media',
      columns: this.props.columns,
      rows: this.props.rows,
    };
    return (
      <ComponentWrapper {...componentProps}>
        <iframe src="//instagram.com/p/BEjan22wdGQ/embed/" width="100%" height="100%" frameBorder="0" scrolling="no" allowTransparency="true"></iframe>
      </ComponentWrapper>
    );
  }
}

MediaInstagram.displayName = 'MediaInstagram';
MediaInstagram.propTypes = {
  identifier: PropTypes.string.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
};
MediaInstagram.defaultProps = {
  columns: 2,
  rows: 2,
};
