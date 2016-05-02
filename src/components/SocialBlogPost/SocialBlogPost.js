import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ComponentWrapper from '../ComponentWrapper';

export default class SocialBlogPost extends Component {
  render() {
    const componentProps = {
      identifier: this.props.identifier,
      type: 'social',
      columns: this.props.columns,
      rows: this.props.rows,
      closeComponent: this.props.closeComponent.bind(this),
    };
    return (
      <ComponentWrapper {...componentProps}>
      <div className="overlay">
        <p>// Blogpost <br /> <br />
          Nowadays, content is read through various arrays of news sites and blogs. <br />
          Using RSS (Rich Site Summary), Websnap can feed content from another site straight into your layout.
        </p>
    </div>
  </ComponentWrapper>
    );
  }
}

SocialBlogPost.displayName = 'SocialBlogPost';
SocialBlogPost.propTypes = {
  identifier: PropTypes.string.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
  closeComponent: PropTypes.func,
};
SocialBlogPost.defaultProps = {
  columns: 2,
  rows: 2,
};
