import React, { Component } from 'react';
import { Col, Container, Row } from "mdbreact";

import './footer.css';
import './index.css';




export class Footer extends Component {
  render() {
    return (
        
<div id="footerr" className="font-small pt-4 mt-4">
  <div ID="footerr2" className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">The Sailling Boys</h5>
      <p>
        Sergen is hier geweest!
      </p>
      </Col>
      <Col md="6">
      <h5 className="title"><b>Je vind ons ook op:</b></h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">Facebook</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Instagram</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Twitter</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Google+</a>
        </li>
      </ul>
      </Col>
    </Row>
  </div>
  <div id="footerr3" className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <p> The Sailling Boys </p>
    </Container>
  </div>
</div>

    );
  }
}
