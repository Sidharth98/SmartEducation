import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';
import './Dashboard.css';

class Header extends Component {
 
  

  render() {
    
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <NavLink className='button' to='/login'>Home</NavLink>
          <NavLink className='button' to='/communities'>Communities</NavLink>
          <NavLink className='button' to='/health'>Mental Health</NavLink>
          
        </Menu>
      </Segment>
    )
  }
}

export default Header;