import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ComponentWrapper from '../ComponentWrapper';

export default class BlankSpace extends Component {
  render() {
    const componentProps = {
      identifier: this.props.identifier,
      type: 'blankspace',
      columns: this.props.columns,
      rows: this.props.rows,
      closeComponent: this.props.closeComponent.bind(this),
    };
    return (
      <ComponentWrapper {...componentProps}>
        <div className="overlay">
          <p>// Blank Space <br /> <br />
          Use blank space when you want space between other components.
          This helps offset the layout by the specified amount of space you need it to have. </p>
        </div>
      </ComponentWrapper>

    );
  }
}

BlankSpace.displayName = 'BlankSpace';
BlankSpace.propTypes = {
  identifier: PropTypes.string.isRequired,
  columns: PropTypes.number,
  rows: PropTypes.number,
  closeComponent: PropTypes.func,
};
BlankSpace.defaultProps = {
  columns: 2,
  rows: 2,
};
