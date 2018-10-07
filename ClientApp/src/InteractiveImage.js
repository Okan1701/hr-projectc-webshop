//import React, { Component } from 'react';
import React, { Component, PureComponent } from 'react';
import { Image, Grid, Row, Col, Popover, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';
import boat from './images/boat.png';
import Searchbar from './Searchbar';
import './index.css';


import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';

const popoverRight = (
  <Popover id="popover-positioned-right" title={<Searchbar />}>
    <Image src={boat} responsive />
    <Image src={boat} responsive />
    <Image src={boat} responsive />
    <Image src={boat} responsive />
  </Popover>
);

const trackStyles = {
  borderRadius: 4,
  backgroundColor: 'rgb(240, 240, 232)',
  position: 'relative',
  margin: '5px 3px 10px',

};


export class InteractiveImage extends Component {

  handleEvent = () => {
    alert("I was clicked");
  };

  render() {

    return (

      <div>
        <OverlayTrigger trigger="click" placement="right" overlay={popoverRight} >
          <Image src={boat} onClick={this.handleEvent} />
        </OverlayTrigger>
      </div>
    );
  }
}
