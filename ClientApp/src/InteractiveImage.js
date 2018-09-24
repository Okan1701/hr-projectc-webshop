import React, { Component } from 'react';
import { Image, Grid, Row, Col, Popover, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';
import boat from './images/boat.png';
import Searchbar from './Searchbar';
import './index.css';

const popoverRight = (
<Popover id="popover-positioned-right" title={<Searchbar />}> 
    <Image src={boat} responsive />
    <Image src={boat} responsive />
    <Image src={boat} responsive />
    <Image src={boat} responsive />
  </Popover>
);

export class InteractiveImage extends Component {
  render() {
    return (
      
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <ButtonToolbar>
              <OverlayTrigger trigger="click" placement="right" overlay={popoverRight} >
                <Image src={boat} />
              </OverlayTrigger>
              
            </ButtonToolbar>
            <div id="div">
              <h1 id="h1">Suggested Product</h1>
            </div>
            <div id="div">
              <h1 id="h1">Suggested Product</h1>
            </div>
            <div id="div">
              <h1 id="h1">Suggested Product</h1>
            </div>
            <div id="div">
              <h1 id="h1">Suggested Product</h1>
            </div>

          </Col>
        </Row>

      </Grid>

    );
  }
}
