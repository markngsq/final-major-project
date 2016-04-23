import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class NavigationSidebar extends Component {
  render() {
    const divProps = {
      className: classnames(
        'component-navigation-sidebar',
        `col-xs-${this.props.columns}`,
        `col-sm-${this.props.columns}`,
        `col-md-${this.props.columns}`,
        `col-lg-${this.props.columns}`,
        `row-${this.props.rows}`,
      ),
    };
    return (
      <div {...divProps}></div>
    );
  }
}

NavigationSidebar.displayName = 'NavigationSidebar';
NavigationSidebar.propTypes = {
  columns: PropTypes.number,
  rows: PropTypes.number,
};
NavigationSidebar.defaultProps = {
  columns: 2,
  rows: 2,
};
