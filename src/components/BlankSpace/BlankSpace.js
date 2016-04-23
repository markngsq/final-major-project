import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class BlankSpace extends Component {
  constructor() {
    super();
    this._handleResize = _.throttle(this._handleResize.bind(this), 30);
  }
  componentDidMount() {
    this._handleResize();
    window.addEventListener('resize', this._handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize() {
    const width = this.refs.blankspace.offsetWidth;
    const singleWidth = width / this.props.columns;
    const height = singleWidth * this.props.rows;
    this.refs.blankspace.setAttribute('style', `height:${height}px`);
  }

  render() {
    const divProps = {
      className: classnames(
        'component-blankspace',
        `component-blankspace-${this.props.identifier}`,
        `col-xs-${this.props.columns}`,
        `col-sm-${this.props.columns}`,
        `col-md-${this.props.columns}`,
        `col-lg-${this.props.columns}`,
        `row-${this.props.rows}`,
      ),
      ref: 'blankspace',
    };
    return (
      <div {...divProps}></div>
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
