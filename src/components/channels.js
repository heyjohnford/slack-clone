'use strict';

import React from 'react';
import ReactTooltip from 'react-tooltip';

class Channels extends React.Component {

  render() {
    return (
      <div className="Channels">
        <div className="u-floatRight">
          <i className="icon icon_plus_circle u-cursor" data-tip="Create new channel" data-position="{'top': 3, 'right': 10}"></i>
        </div>
        <div className="grid">
          <div className="grid-cell">
            <h3 className="Channels-title u-cursor" data-tip="Browse all channels">Channels</h3>
          </div>
        </div>
        <ReactTooltip effect="solid" />
      </div>
    );
  }

}

Channels.defaultProps = {
};

export default Channels;
