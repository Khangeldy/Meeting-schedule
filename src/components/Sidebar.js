import React, { Component } from 'react'
import {  Image,  Label, Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router'
// import faker from 'faker'
import './Sidebar.css'


function createLinkComponent(LnkComponent, data) {

  const LinkEnhanced = ({counter}) => {
    let label = '';
    if(data.label) {
      label = <Label color="teal" className="sidebar__label"> {counter}</Label>

    }
    return (<Link to={data.url} className="sidebar__link">
          {data.text}
          {label}
        </Link>)
  }


  return LinkEnhanced
}
const Lnk1 = createLinkComponent(Link, {url: '/', text: 'Scedules', label: true});
const Lnk2 = createLinkComponent(Link, {url: '/clients', text: 'clients', label: false});

class SidebarView extends Component {
  constructor(props) {
    super(props)
  }
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentSchouldUpdate(nextProps, nextState) {
    if(this.props.counter !== nextProps.counter) {
      return true
    }

    return false
  }

  render() {
    const { activeItem } = this.state
    
    return (
      <Menu vertical className="cp-sidebar" width="100%">
        <Menu.Header className="sidebar__header">
          <div className="sidebar__avatar">
            <Image src='img/avatar.jpg' shape="circular" />
          </div>
          <div className="sidebar__account_button">
            <Button circular icon="setting" />
            <Button circular icon="upload" />
          </div>
        </Menu.Header>
        <Menu.Item as={Lnk1} name='inbox' counter={this.props.counter} active={activeItem === 'inbox'} onClick={this.handleItemClick} />

        <Menu.Item name='spam' as={Lnk2} active={activeItem === 'spam'} onClick={this.handleItemClick} />

      </Menu>
    )
  }
}

SidebarView.propTypes = {
  counter: React.PropTypes.number.isRequired
}

export default SidebarView
