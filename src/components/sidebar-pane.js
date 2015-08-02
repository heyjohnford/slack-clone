'use strict';

import React from 'react';
import UserHeader from './user-header';
import Channels from './channels';

class SidebarPane extends React.Component {

  render() {
    return (
      <div className="SidebarPane u-relative">
        <UserHeader />
        <div className="container">
          <Channels />
        </div>
      </div>
    );
  }

}

export default SidebarPane;
