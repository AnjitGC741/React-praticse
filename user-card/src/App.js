import "./App.css";
import React from "react";
import Button from './Button'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Shitiz Adhikari",
    };
  }
  render() {
    const widthValue = {
      width: "60%",
    };
    return (
      <div className="main-user-card-box">
        <div className="wrapper">
          <div className="box-one">
            <p>{this.state.name[0].toUpperCase()}</p>
          </div>
          <div className="box-two">
            <p className="user-name">
              {this.state.name}
              <span className="green-dot"></span>
            </p>
            <p className="user-profession">Student</p>
            <div className="ProgressBarBox">
              <div className="progressBarValue" style={widthValue}></div>
            </div>
          </div>
        </div>
        <Button value={"Click me"}/>
      </div>
    );
  }
}
export default App;
