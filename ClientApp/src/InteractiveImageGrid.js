import React, { Component } from 'react';
import { Image, Grid, Row, Col, Popover, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';
import boat from './images/boat.png';
import Searchbar from './Searchbar';
import './index.css';
import { InteractiveImage, Example } from './InteractiveImage';



export class InteractiveImageGrid extends Component {
  render() {
    return (
      
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <ButtonToolbar>
                <InteractiveImage />
               
              
            </ButtonToolbar>
            {/* <div id="div">
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
            </div> */}

          </Col>
        </Row>

      </Grid>

    );
  }
}
