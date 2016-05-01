import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ComponentWrapper from '../ComponentWrapper';

export default class SocialTwitter extends Component {
  componentDidMount() {
    if (this.props.rows === 2) {
      window.twttr.widgets.createTweet('725972485167026176', this._div, {
        cards: 'hidden',
      });
    } else {
      window.twttr.widgets.createTweet('725972485167026176', this._div);
    }
  }

  render() {
    const componentProps = {
      identifier: this.props.identifier,
      type: 'social',
      columns: this.props.columns,
      rows: this.props.rows,
    };
    return (
      <ComponentWrapper {...componentProps}>
        <div className="twitter-tweet" data-lang="en" ref={(c) => this._div = c}/>
      </ComponentWrapper>
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
