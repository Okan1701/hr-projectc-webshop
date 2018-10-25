import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={9}>
            <Header />
          </Col>
          <Col sm={9}>
            {this.props.children}
          </Col>
          <Col sm={9}>
            <Footer />
          </Col>
        </Row>
      </Grid>
    );
  }
}
