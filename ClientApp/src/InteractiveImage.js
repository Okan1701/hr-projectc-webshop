import React, { Component, PureComponent } from 'react';
import './InteractiveImage.css';
import { Image, Grid, Row, Col, Popover, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';
import boat from './images/boat.png';
import category from './images/category.png';
import Searchbar from './Searchbar';
import './index.css';

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

      <div id="container">

        <div>
          <Image src={category} id="image" className={this.state.show ? 'slide-tl' : 'slide-tl-reverse'} />
        </div>

        <div>
          <Image src={category} id="image2" className={this.state.show ? 'slide-tl2' : 'slide-tl-reverse2'} />
        </div>

         <div>
          <Image src={category} id="image3" className={this.state.show ? 'slide-tl3' : 'slide-tl-reverse3'} />
        </div>

        <div>
          <Image src={category} id="image4" className={this.state.show ? 'slide-tl4' : 'slide-tl-reverse4'} />
        </div>
        
      <div id="boat">
     
        <Image src={boat} onClick={this.handleClick} />
      </div>
      

      </div>
    );
  }
}