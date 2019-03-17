import React, { Component } from 'react';

class Process extends Component {
  render() {
    return (
      <div className="bg-process">
          <p>THE PROCESS</p>
          <h1>Fast & Easy</h1>
          <div className="steps-container">
            <div className="steps stepOne">
                <div className="image">
                </div>
                <h2>1. Call or Text Us</h2>
                <p>Let us know the date, time and the bike you want to rent.</p>
              </div>
              <div className="steps stepTwo">
                <div className="image">
                </div>
                <h2>2. Fill up the form</h2>
                <p>Fill up our reservation form and read our terms of service.</p>
              </div>
              <div className="steps stepThree">
                <div className="image">
                </div>
                <h2>3. Get hooked up</h2> 
                <p>You get 100% well maintained, clean and dependable bike.</p>
              </div>
          </div>
      </div>
    );
  }
}

export default Process;
