import React, { Component } from "react";
import cloudImage from './handdrawn.png'; 


export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
    
              <div>
                <img src={cloudImage} alt="cloud" />
              </div>
            );
          }
        }
    