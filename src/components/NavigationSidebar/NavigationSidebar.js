import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ComponentWrapper from '../ComponentWrapper';

export default class NavigationSidebar extends Component {
  render() {
    const componentProps = {
      identifier: this.props.identifier,
      type: 'navigation',
      columns: this.props.columns,
      rows: this.props.rows,
      closeComponent: this.props.closeComponent.bind(this),
    };
    return (
      <ComponentWrapper {...componentProps}>
      <div className="overlay">
        <p>// Navigation <br /> <br />
        While Websnap creates a single page site, Navigation allows you to create a multi-page site layout.
        </p>
      </div>
    </ComponentWrapper>
    );
  }
}

NavigationSidebar.displayName = 'NavigationSidebar';
NavigationSidebar.propTypes = {
  identifier: PropTypes.string.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
  closeComponent: PropTypes.func,
};
NavigationSidebar.defaultProps = {
  columns: 2,
  rows: 2,
};
