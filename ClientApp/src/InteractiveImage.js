import React, { Component, PureComponent } from 'react';
import './InteractiveImage.css';
import { Image, Grid, Row, Col, Popover, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';
import boat from './images/boat.png';
import category from './images/category.png';
import Searchbar from './Searchbar';
import './index.css';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';
import { Spring } from 'react-spring'
import classNames from 'classnames/bind';


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

        <div id="three-container" >
          <Image src={category} id="image" className={this.state.show ? 'slide-tl' : 'slide-tl2'} />
        </div>
        
      <div id="boat">
     
        <Image src={boat} onClick={this.handleClick} />
      </div>
      

      </div>
    );
  }
}

        {/* <div>

          <Fade bottom when={this.state.show}>
            <img src={category} id="image" />
          </Fade>
          
          <Fade bottom when={this.state.show}>
            <img src={category} id="image2" />
          </Fade>

          <Fade bottom when={this.state.show}>
            <img src={category} id="image3" />
          </Fade>

          <Fade bottom when={this.state.show}>
            <img src={category} id="image4" />
          </Fade>
          
        </div> */}


// export class InteractiveImage extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: false};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {

//     return (
//       <div>

//         <div >

//           {this.state.isToggleOn ? (
//             <Rotate top left>
//               <img src={category} id="image" />
//             </Rotate>
//           ) : null }

//           {!this.state.isToggleOn ? (
//             <Slide right>
//               {/* <img src={category} id="image" /> */}
//             </Slide>
//           ) : null }

//           {this.state.isVisible ? (
//             <Fade bottom>
//               <img src={category} id="image2" />
//             </Fade>
//           ) : null}

//           {this.state.isVisible ? (
//             <Fade bottom>
//               <img src={category} id="image3" />
//             </Fade>
//           ) : null}

//           {this.state.isVisible ? (
//             <Rotate top right>
//               <img src={category} id="image4" />
//             </Rotate>
//           ) : null}

//         </div>

//       <div >
     
//         <Image src={boat} id="boat" onClick={this.handleClick} />
//           {console.log(this.state.isToggleOn ? 'ON' : 'OFF')}
        
//       </div>
//       </div>
//     );
//   }
// }

// export class InteractiveImage extends Component {

//   constructor() {
//     super();
//     this.state = {
//       isVisible: true,
//     };
//   }

//   handleEvent = () => {
//     console.log("I was clicked");
//   };

//   render() {

//     return (
//       <div responsive >

//         <div >

//           {this.state.isVisible ? (
//             <Rotate top left>
//               <img src={category} id="image" />
//             </Rotate>
//           ) : null }

//           {this.state.isVisible ? (
//             <Fade bottom>
//               <img src={category} id="image2" />
//             </Fade>
//           ) : null}

//           {this.state.isVisible ? (
//             <Fade bottom>
//               <img src={category} id="image3" />
//             </Fade>
//           ) : null}

//           {this.state.isVisible ? (
//             <Rotate top right>
//               <img src={category} id="image4" />
//             </Rotate>
//           ) : null}

//         </div>

//       <div >
     
        
//         <Image src={boat} id="boat" onClick={() => this.setState({
//           isVisible: !this.state.isVisible
//         })} />




//       </div>
//       </div>
//     );
//   }
// }
