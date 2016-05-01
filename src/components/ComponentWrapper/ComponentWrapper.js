import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class ComponentWrapper extends Component {
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
    const width = this.refs.component.offsetWidth;
    const singleWidth = width / this.props.columns;
    const height = singleWidth * this.props.rows;
    this.refs.component.setAttribute('style', `height:${height}px`);
  }

  render() {
    const divProps = {
      className: classnames(
        'grid-item',
        `grid-item-width-${this.props.columns}`,
        `grid-item-height-${this.props.rows}`,
        //`col-xs-${this.props.columns}`,
        //`col-sm-${this.props.columns}`,
        //`col-md-${this.props.columns}`,
        //`col-lg-${this.props.columns}`,
        //`row-${this.props.rows}`,
      ),
    };
    const contentProps = {
      className: classnames(
        'grid-item-content',
        'component',
        `component-${this.props.type}`,
        `component-${this.props.type}-${this.props.identifier}`,
        `row-${this.props.rows}`,
      ),
      ref: 'component',
    };
    return (
      <div {...divProps}>
        <div {...contentProps}>
          <a className="close" onClick={this.props.closeComponent}>x</a>
          {this.props.children}
        </div>
      </div>
    );
  }
}

ComponentWrapper.displayName = 'ComponentWrapper';
ComponentWrapper.propTypes = {
  type: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  children: PropTypes.node,
  columns: PropTypes.number,
  rows: PropTypes.number,
  closeComponent: PropTypes.func,
};
ComponentWrapper.defaultProps = {
  columns: 2,
  rows: 2,
};
