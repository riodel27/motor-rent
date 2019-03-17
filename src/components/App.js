import React, { Component } from 'react';
import Header from './Header'
import Rides from './Rides'
import Process from './Process'
import ContactUs from './ContactUs'
// import ImageGallery from './ImageGalleryComponent'
import '../styles/App.scss';

class App extends Component {
  state = {
    bikes : [
      {
          "id":1,
          "name":"Yamaha Mio Aerox 155cc",
          "price":500,
          "extraPricePerHour":100,
          "images":[],
          "description":"Fully automatic transmission,Wide bench seat with 25 liters storage space,LED light system,Comes with Electric Socket so you can charge your devices even when you ride"
      },
      {
          "id":2,
          "name":"Honda Beat FI 110cc",
          "price":500,
          "extraPricePerHour":100,
          "images":[],
          "description":"Fully Automatic transmission with fuel injection engine.,Soft suspension very smooth ride"
      }
    //   {
    //     "id":1,
    //     "name":"Yamaha Mio Aerox 155cc",
    //     "price":500,
    //     "extraPricePerHour":100,
    //     "images":[],
    //     "description":"Fully automatic transmission,Wide bench seat with 25 liters storage space,LED light system,Comes with Electric Socket so you can charge your devices even when you ride"
    // },
  ]
  }
  render() {
    return (
      <div className="App">
       <div className="flex-container">
          <Header/>
          <Rides rides={this.state.bikes}/>
          <Process />
          <ContactUs />
          {/* <ImageGallery /> */}
       </div>
      </div>
    );
  }
}

export default App;
