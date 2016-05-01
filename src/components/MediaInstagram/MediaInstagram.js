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
      closeComponent: this.props.closeComponent.bind(this),
    };
    return (
      <ComponentWrapper {...componentProps}>
        <iframe src="//instagram.com/p/BEjan22wdGQ/embed/" width="100%" height="100%" frameBorder="0" allowTransparency="true"></iframe>
      </ComponentWrapper>
    );
  }
}

MediaInstagram.displayName = 'MediaInstagram';
MediaInstagram.propTypes = {
  identifier: PropTypes.string.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
  closeComponent: PropTypes.func,
};
MediaInstagram.defaultProps = {
  columns: 2,
  rows: 2,
};
