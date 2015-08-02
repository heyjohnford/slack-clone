'use strict';

import React from 'react';

class OnlineIndicator extends React.Component {

  render() {
    let style = {
      height: this.props.height,
      width: this.props.width
    };

    return (
      <span className="OnlineIndicator" style={style}></span>
    );
  }

}

export default OnlineIndicator;
