'use strict';

import React from 'react';
import ReactTooltip from 'react-tooltip';

class PrivateGroups extends React.Component {

  render() {
    return (
      <div className="PrivateGroups">
        <div className="u-floatRight">
          <i className="icon icon_plus_circle u-cursor" data-tip="Create new group" data-position="{'top': 3, 'right': 10}"></i>
        </div>
        <div className="grid">
          <div className="grid-cell">
            <h3 className="PrivateGroups-title u-cursor" data-tip="Browse your groups">Private Groups</h3>
          </div>
        </div>
        <ReactTooltip effect="solid" />
      </div>
    );
  }

}

PrivateGroups.defaultProps = {
};

export default PrivateGroups;
