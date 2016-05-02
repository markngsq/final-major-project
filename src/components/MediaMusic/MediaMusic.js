import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ComponentWrapper from '../ComponentWrapper';

export default class MediaMusic extends Component {
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
        <iframe width="100%" height="100%" scrolling="no" frameBorder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/220583402&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        <div className="overlay">
          <p>// Soundcloud <br /> <br />
            Using the SoundCloud API, you can build layouts that take audio on the web from Soundcloud’s database. <br />
            Soundcloud enables you to grab not just a single song, but a whole playlist as well as the comments and user information.</p>
        </div>
      </ComponentWrapper>
    );
  }
}

MediaMusic.displayName = 'MediaMusic';
MediaMusic.propTypes = {
  identifier: PropTypes.string.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
  closeComponent: PropTypes.func,
};
MediaMusic.defaultProps = {
  columns: 2,
  rows: 2,
};
