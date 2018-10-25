import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Searchbar from './Searchbar';
import '../index.css';

export class Header extends Component {
  render() {
    return (
      <div>
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
          <NavItem>
            <Searchbar />
          </NavItem>

  </Nav>

</Navbar>

        <a href=''>
          <h2 id="h2">Category 1</h2>
        </a>
        <a href=''>
          <h2 id="h2">Category 2</h2>
        </a>
        <a href=''>

          <h2 id="h2">Category 3</h2>
        </a>
        <a href=''>

          <h2 id="h2">Category 4</h2>
        </a>

</div>
    );
  }
}
