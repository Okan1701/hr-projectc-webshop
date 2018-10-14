import React, { Component } from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import { Header } from './Header';
import { InteractiveImage } from './InteractiveImage';
import { Footer } from './Footer'

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div className>
        <Header />

        <InteractiveImage />

        <Footer />
     </div>
    );
  }
}


