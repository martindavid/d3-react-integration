import React, { Component } from 'react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { appName } = this.props;
    return (
      <Navbar color='dark' dark expand='md' fixed='top'>
        <NavbarBrand tag={RRNavLink} to='/'>{appName}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar className='mr-auto'>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                activeClassName='active'
                to='/'
              >Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                activeClassName='active'
                to='/map-example'
              >Map Example
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
