import './App.css';
import React from 'react';
class App extends React.Component{
  constructor(){
    super();
    this.state={
        name:"Anjit",
    };
}
  render(){
    const widthValue = {
        width : '60%'
    };
    return(
        <>
         <h1>{this.state.name}</h1>
        <h1>{this.state.name[0]}</h1>
        <div className='ProgressBarBox'>
              <div className='progressBarValue' style={widthValue}>

              </div>
        </div>
        </>
    );
  }
}
export default App;
