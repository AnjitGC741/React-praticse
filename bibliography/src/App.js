import Navbar from "./component/Navbar";
import Image from "./component/Image";
import Description from "./component/Description";
import "./assets/css/App.css";
import React from "react";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="image-description">
          <div className="for-Image">
            <Image className="App-image"/>
          </div>
          <div className="for-Description">
            <Description/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
