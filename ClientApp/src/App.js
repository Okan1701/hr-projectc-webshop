import React, { Component } from 'react';
import { Route } from 'react-router';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import { Header } from './Header';
import { InteractiveImage } from './InteractiveImage';
import { Footer } from './Footer'
import { InteractiveImageGrid } from './InteractiveImageGrid';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
    //   <div>
    //     {/* <Header /> */}

    //     <InteractiveImageGrid />

    //     {/* <Footer /> */}
    //  </div>
    <div>
        <Route path='/' component={Header} />
        <Route exact path='/' component={InteractiveImage} />
        {/* <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} /> */}
    
    </div>
      
    );
  }
}


