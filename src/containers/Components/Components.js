import _ from 'lodash';
import Packery from 'packery';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { componentsMap } from '../../config.js';
import * as componentsActions from '../../actions/components';
import BlankSpace from '../../components/BlankSpace';
import NavigationSidebar from '../../components/NavigationSidebar';
import NavigationHeader from '../../components/NavigationHeader';
import SocialTwitter from '../../components/SocialTwitter';
import SocialBlogPost from '../../components/SocialBlogPost';
import MediaMusic from '../../components/MediaMusic';
import MediaInstagram from '../../components/MediaInstagram';
import MediaVideo from '../../components/MediaVideo';

const reactComponentsMap = {
  BlankSpace,
  NavigationSidebar,
  NavigationHeader,
  SocialTwitter,
  SocialBlogPost,
  MediaMusic,
  MediaInstagram,
  MediaVideo,
};

export class Components extends Component {
  constructor() {
    super();
    this.pckry;
    this._updatePackery = _.throttle(this._updatePackery.bind(this), 20);
  }

  componentDidMount() {
    _.delay(this._updatePackery, 1000);
  }

  componentDidUpdate() {
    this._updatePackery();
  }

  _updatePackery() {
    this.pckry = new Packery( '#components-grid', {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
    });
  }

  _renderComponent(componentId, key) {
    const component = componentsMap[componentId];
    if (component) {
      const componentProps = {
        identifier: componentId,
        columns: component.columns,
        rows: component.rows,
        key: key,
        closeComponent: this.props.actions.closeComponent.bind(this, componentId),
      };
      const ComponentType = reactComponentsMap[component.type];
      return <ComponentType {...componentProps}/>;
    }
    return null;
  }

  render() {
    return (
      <div id="components">
        <div className="container-fluid">
          <div className="row">
            <div id="components-grid" className="grid">
              <div id="grid-sizer" className="grid-sizer"></div>
              {this.props.components.list.map((componentId, key) => this._renderComponent(componentId, key))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Components.displayName = 'Components';
Components.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    components: state.components,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      goto: (path) => dispatch(push(path)),
      closeComponent: (componentId) => dispatch(componentsActions.removeComponent(componentId)),
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Components);
