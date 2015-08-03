'use strict';

import React from 'react';
import UserHeader from './user-header';
import Channels from './channels';
import DirectMessages from './direct-messages';
import PrivateGroups from './private-groups';

class SidebarPane extends React.Component {

  render() {
    return (
      <div className="SidebarPane u-relative">
        <UserHeader />
        <ul className="SidebarPane-list container">
          <li className="SidebarPane-listItem">
            <Channels />
          </li>
          <li className="SidebarPane-listItem">
              <DirectMessages />
          </li>
          <li className="SidebarPane-listItem">
            <PrivateGroups />
          </li>
        </ul>
      </div>
    );
  }

}

export default SidebarPane;
