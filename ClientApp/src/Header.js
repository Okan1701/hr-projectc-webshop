import React, { Component } from 'react';
import { Image, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Searchbar from './Searchbar';
import profiellogo from './images/profiellogo.png';
import boatlogo from './images/boatlogo.png';
import favorieten from './images/favorieten.png';
import winkelmandje from './images/winkelmandje.png';
import './index.css';
import './header.css';


export class Header extends Component {
  render() {
    return (
      <div>
<Navbar id="navbar_header">
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home"><Image src={boatlogo} id="logowebsite"/></a> 
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem>
      <Searchbar id="zoekfunctie" />
    </NavItem>

    <NavItem > 
    <div id="inloggen">
      <ul class="navbar-nav ml-auto"> 
        <li id="inloggenbutton">
          <a href="#Inloggen" id="inloggenbutton"><Image src={profiellogo}/></a>
        </li>
        <li id="inloggenbutton">
          <a href="#Favorieten" id="inloggenbutton"><Image src={favorieten}/></a>
        </li>
        <li id="inloggenbutton">
          <a href="#Winkelmandje" id="inloggenbutton"><Image src={winkelmandje}/></a>
        </li>
      </ul>
    </div>
    </NavItem>
  </Nav>
</Navbar>

<Navbar id="navbar_header2">
  <Nav>
    <NavDropdown eventKey={1} title="Categorie 1" id="basic-nav-dropdown">
      <MenuItem eventKey={1.1}>Onderdeel 1</MenuItem>
      <MenuItem eventKey={1.2}>Onderdeel 2</MenuItem>
      <MenuItem eventKey={1.3}>Onderdeel 3</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={1.4}>Onderdeel 1.1</MenuItem>
      <MenuItem eventKey={1.5}>Onderdeel 1.2</MenuItem>
    </NavDropdown>

    <NavDropdown eventKey={2} title="Categorie 2" id="basic-nav-dropdown">
      <MenuItem eventKey={2.1}>Onderdeel 1</MenuItem>
      <MenuItem eventKey={2.2}>Onderdeel 2</MenuItem>
      <MenuItem eventKey={2.3}>Onderdeel 3</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={2.4}>Onderdeel 2.1</MenuItem>
      <MenuItem eventKey={2.5}>Onderdeel 2.2</MenuItem>
    </NavDropdown>

    <NavDropdown eventKey={3} title="Categorie 3" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Onderdeel 1</MenuItem>
      <MenuItem eventKey={3.2}>Onderdeel 2</MenuItem>
      <MenuItem eventKey={3.3}>Onderdeel 3</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Onderdeel 3.1</MenuItem>
      <MenuItem eventKey={3.4}>Onderdeel 3.2</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
</div>


    );
  }
}

export default Header;
