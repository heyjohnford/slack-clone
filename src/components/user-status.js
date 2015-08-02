'use strict';

import React from 'react';
import OnlineIndicator from './online-indicator';

class UserStatus extends React.Component {

  render() {
    return (
      <div className="UserStatus">
        <div className="grid--fit">
          <div className="grid-cell">
            <OnlineIndicator
              title={this.props.userStatus}
              className="UserStatus-indicator"
              online={false}
              height="8px"
              width="8px" />
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
