'use strict';

import React, { PropTypes } from 'react';
import UserStatus from './user-status';

class UserHeader extends React.Component {

  render() {
    return (
      <div className="UserHeader">
        <div className="container">
          <div className="UserHeader-content grid grid--3of4">
            <div className="grid-cell">
              <h4 className="UserHeader-teamTitle u-textTruncate">{this.props.teamName}</h4>
              <UserStatus />
            </div>
            <div className="grid grid--1of4">
              <div className="grid-cell">
                <i className="icon icon_chevron_large_down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

UserHeader.propTypes = {
  teamName: PropTypes.string
};

UserHeader.defaultProps = {
  teamName: 'Slack Clone'
};

export default UserHeader;
