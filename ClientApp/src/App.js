import React, { Component } from 'react';
import { Route } from 'react-router';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import { Header } from './Header/Header';
import { InteractiveImage } from './InteractiveImage/InteractiveImage';
import { Footer } from './Footer/Footer'
import { Layout } from './Layout';
import boat from './images/boat.png';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
    <Layout>
      <Route exact path='/' component={InteractiveImage} />
      <Route path='/cat1' component={Header} />
      {/* <Route path='/fetchdata' component={FetchData} /> */}
    </Layout>
    
      
    );
  }
}


