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
      closeComponent: this.props.closeComponent.bind(this),
    };
    return (
      <ComponentWrapper {...componentProps}>
        <iframe src="https://player.vimeo.com/video/154568298" width="100%" height="100%" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
      </ComponentWrapper>
    );
  }
}

MediaVideo.displayName = 'MediaVideo';
MediaVideo.propTypes = {
  identifier: PropTypes.string.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
  closeComponent: PropTypes.func,
};
MediaVideo.defaultProps = {
  columns: 2,
  rows: 2,
};
