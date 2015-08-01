'use strict';

import React from 'react';
import UserHeader from './user-header';

class SidebarPane extends React.Component {

  render() {
    return (
      <div className="SidebarPane u-relative">
        <UserHeader />
        <div className="container">
        </div>
      </div>
    );
  }

}

export default SidebarPane;
