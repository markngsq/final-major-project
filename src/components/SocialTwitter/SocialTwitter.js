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
      closeComponent: this.props.closeComponent.bind(this),
    };
    return (
      <ComponentWrapper {...componentProps}>
        <div className="twitter-tweet" data-lang="en" ref={(c) => this._div = c}/>
        <div className="overlay">
          <p>// Twitter Feed <br /> <br />
          News travels fast in the digital age. Most of the time, it is through social networks like twitter.
          Scanning content straight from twitter’s database, Websnap pulls real-time updates straight to your layout without you needing to access twitter.
          </p>
      </div>
      </ComponentWrapper>
    );
  }
}

SocialTwitter.displayName = 'SocialTwitter';
SocialTwitter.propTypes = {
  identifier: PropTypes.string.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
  closeComponent: PropTypes.func,
};
SocialTwitter.defaultProps = {
  columns: 2,
  rows: 2,
};
