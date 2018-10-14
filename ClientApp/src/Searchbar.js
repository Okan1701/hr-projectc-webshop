import React, { Component } from 'react';
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';
import './Searchbar.css';


export default class Searchbar extends React.Component {
  
    render() {
      return (
        
          <div class="container">
            <div class="row">
                  <div class="col-sm-6 col-sm-offset-3">
                      <div id="imaginary_container"> 
                          <div class="input-group stylish-input-group">
                              <input type="text" class="form-control"  placeholder="Zoeken naar producten..." />
                              <span class="input-group-addon">
                                  <button type="submit">
                                      <span class="glyphicon glyphicon-search"></span>
                                  </button>  
                              
                              </span>
                          </div>
                      </div>
                  </div>
            </div>
          </div>
      );
    }
  }


