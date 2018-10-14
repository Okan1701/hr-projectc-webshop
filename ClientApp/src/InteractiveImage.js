import React, { Component, PureComponent } from 'react';
import './InteractiveImage.css';
import { Image, Grid, Row, Col, Popover, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';
import boat from './images/boat.png';
import category from './images/category.png';
import Searchbar from './Searchbar';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import App from './App';
import { Header } from './Header';

export class InteractiveImage extends Component {
  
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.setState({ show: !this.state.show });
  }
  
  render() {

    return (   
<Router>
<div>
      <Route path="/cat1/"  render={() => (
        
        <div>
          <Header/>
        
        </div>
      )} />

      <div id="container">

  

      <Link to={'/cat1/'}>
        <div>
          <Image src={category} id="image" className={this.state.show ? 'slide-tl' : 'slide-tl-reverse'} />
        </div>
        </Link>
        <div>
          <Image src={category} id="image2" className={this.state.show ? 'slide-tl2' : 'slide-tl-reverse2'} />
        </div>

         <div>
          <Image src={category} id="image3" className={this.state.show ? 'slide-tl3' : 'slide-tl-reverse3'} />
        </div>

        <div>
          <Image src={category} id="image4" className={this.state.show ? 'slide-tl4' : 'slide-tl-reverse4'} />
        </div>

        <div>
          <Image src={category} id="image5" className={this.state.show ? 'slide-tl5' : 'slide-tl-reverse5'} />
        </div>

        <div>
          <Image src={category} id="image6" className={this.state.show ? 'slide-tl6' : 'slide-tl-reverse6'} />
        </div>

         <div>
          <Image src={category} id="image7" className={this.state.show ? 'slide-tl7' : 'slide-tl-reverse7'} />
        </div>

        <div>
          <Image src={category} id="image8" className={this.state.show ? 'slide-tl8' : 'slide-tl-reverse8'} />
        </div>
        
      <div id="boat">
     
        <Image src={boat} onClick={this.handleClick} />
      </div>


      </div>
      </div>
      </Router>
    );
  }
}