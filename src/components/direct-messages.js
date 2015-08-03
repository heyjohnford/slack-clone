'use strict';

import React from 'react';
import ReactTooltip from 'react-tooltip';

class DirectMessages extends React.Component {

  render() {
    return (
      <div className="DirectMessages">
        <div className="u-floatRight">
          <i className="icon icon_plus_circle u-cursor" data-tip="Open a direct message" data-position="{'top': 3, 'right': 10}"></i>
        </div>
        <div className="grid">
          <div className="grid-cell">
            <h3 className="DirectMessages-title u-cursor" data-tip="Open a direct message">Direct Messages</h3>
          </div>
        </div>
        <ReactTooltip effect="solid" />
      </div>
    );
  }

}

DirectMessages.defaultProps = {
};

export default DirectMessages;
