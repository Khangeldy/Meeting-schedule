import React, { Component } from 'react'
// import {  Image,  Label, Menu } from 'semantic-ui-react'

import SidebarContainer from '../containers/SidebarContainer'

class LayoutView extends Component {

  render() {
    return (
      <div className="App">
        <aside className="content--left">
          <SidebarContainer />
        </aside>
        <main className="content--right">
          { this.props.children }
        </main>
      </div>
    )
  }
}

export default LayoutView
