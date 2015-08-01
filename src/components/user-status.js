'use strict';

import React from 'react';

class UserStatus extends React.Component {

  render() {
    return (
      <div className="UserStatus">
        <div className="grid--fit">
          <div className="grid-cell">
            <span title={this.props.userStatus} className="UserStatus-indicator"></span>
            <small>username</small>
          </div>
        </div>
      </div>
    );
  }

}

UserStatus.defaultProps = {
  userStatus: 'offline'
};

export default UserStatus;
