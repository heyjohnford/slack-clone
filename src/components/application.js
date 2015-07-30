'use strict';

import React from 'react';
import Header from './header';
import SidebarPane from './sidebar-pane';
import ChatPane from './chat-pane';

class Application extends React.Component {
  render() {
    return (
      <div className="SlackClone">
        <div className="grid grid-cell">
          <Header />
          <SidebarPane />
          <ChatPane />
        </div>
      </div>
    );
  }
}

export default Application;
