import React, { Component } from 'react';
import Bike from './Bike'
class Rides extends Component {
  render() {
      const bikes = this.props.rides.map(ride => (
          <Bike 
            key={ride.id}
            id={ride.id}
            name={ride.name}
            price={ride.price}
            extraPricePerHour={ride.extraPricePerHour}
            description={ride.description}
          />
      ))
    return (
      <div className="bg-rides">
        <p className="pickYourRide">PICK YOUR RIDE</p>
        <h1>The Bikes</h1>
        {bikes}
      </div>
    );
  }
}

export default Rides;
