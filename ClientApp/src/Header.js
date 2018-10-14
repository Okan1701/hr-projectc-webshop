import React, { Component } from 'react';
import { Image, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import boatlogo from './images/boatlogo.png';
import './index.css';
import './header.css';




export class Header extends Component {
  render() {
    return (
<div>
<div>
<nav id="niffobar" class="navbar ">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#home"><Image src={boatlogo} id="logowebsite"/></a>
    </div>
     

    <div>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span></a></li>
        <li><a href="#"><span class="glyphicon glyphicon-heart"></span></a></li>
        <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span></a></li>
      </ul>
    </div>
  </div>
</nav>
</div>

<Navbar id="niffobar2">
<ul class="nav navbar-nav navbar-left">
      <li><a href="#"><span class="glyphicon glyphicon-home"></span></a></li>           
</ul>
  <Nav  class="nav navbar-nav" >
    <NavDropdown eventKey={1} title="Motorboten" id="basic-nav-dropdown">

      <MenuItem eventKey={1.1}>Motorkruisers</MenuItem>
      <MenuItem eventKey={1.2}>Sloepen</MenuItem>
      <MenuItem eventKey={1.3}>Consoleboten en Visboten</MenuItem>
      <MenuItem eventKey={1.4}>Woonboten</MenuItem>
      <MenuItem eventKey={1.5}>Grachtenbootjes</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={1.6}>Quiksilver</MenuItem>
      <MenuItem eventKey={1.7}>Mercury</MenuItem>
      <MenuItem eventKey={1.8}>Bayliner</MenuItem>
      <MenuItem eventKey={1.9}>Sea Ray</MenuItem>
    </NavDropdown>

    <NavDropdown eventKey={2} title="Zeilboten" id="basic-nav-dropdown">
      <MenuItem eventKey={2.1}>Zeiljachten</MenuItem>
      <MenuItem eventKey={2.2}>Platbodems zeil</MenuItem>
      <MenuItem eventKey={2.3}>Motorsailers</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={2.4}>Bavaria</MenuItem>
      <MenuItem eventKey={2.5}>Beneteau</MenuItem>
    </NavDropdown>

    <NavDropdown eventKey={3} title="Sportboten" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Speedboten</MenuItem>
      <MenuItem eventKey={3.2}>Skiboten</MenuItem>
      <MenuItem eventKey={3.3}>Rubberboten</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Brig</MenuItem>
      <MenuItem eventKey={3.5}>Cobalt</MenuItem>
    </NavDropdown>

    <NavDropdown eventKey={4} title="Accesoires" id="basic-nav-dropdown">
      <MenuItem eventKey={4.1}>Bootwrap </MenuItem>
      <MenuItem eventKey={4.2}>Bootshelters</MenuItem>
      <MenuItem eventKey={4.3}>Zeilen</MenuItem>
      <MenuItem eventKey={4.4}>Koelboxen</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>

<div id="alertbericht" class="alert alert-primary" role="alert">
<ul class="nav navbar-nav navbar-center">
        <li id="bericht1"><p><span id="berichticon" class="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Professioneel</b> en <b>persoonlijk</b> advies!</p></li>
        <li id="bericht2"><p><span id="berichticon" class="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;&nbsp;&nbsp;Vrijwel alles <b>direct</b> uit voorraad leverbaar!</p></li>
        <li id="bericht3"><p><span id="berichticon" class="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;&nbsp;&nbsp;<b>Gratis bezorgt</b> vanaf $50,00!</p></li>
</ul>
</div>

</div>

    );
  }
}

export default Header;
