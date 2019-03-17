import React, { Component } from 'react';

class Bike extends Component {
  render() {
    const description = this.props.description.split(',')
    console.log('description: ', description)

    const listDescription = description.map((info,idx) =>
      <li key={idx}>{info}</li>
    );

    return (
      <div className="bike">
          <div className="bike-content">
            <h2 className="bikeName">{this.props.name}</h2>
            {/* <hr className="customHr"/> */}
            <hr className="customHr"></hr>
            <p className="mainPrice">Php {this.props.price} <span> - per day (minimum)</span></p>
            <p>Php {this.props.extraPricePerHour} <span> - per hour (extra time) </span></p>
            <hr className="customHr"/>
            <ul>{listDescription}</ul>
            {/* <button className="btn-rentThisBike">RENT THIS BIKE</button> */}
          </div>
          <div className="gallery">
            <button className="btn-rentThisBike">RENT THIS BIKE</button>
            <div className="imageOne"></div>
            <div className="sub-gallery">
              <div className="item imageTwo"> </div>
              <div className="item imageThree"> </div>
              <div className="item imageFour"> </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Bike;
