import { Component } from "react";
class Buttons extends Component{
    constructor(){
        super();
        this.state={
            color:"white",
        };
        this.changeColorToRed = this.changeColorToRed.bind(this);
        this.changeColorToGreen = this.changeColorToGreen.bind(this);
        this.changeColorToBlue = this.changeColorToBlue.bind(this);
        this.changeColorToYellow = this.changeColorToYellow.bind(this);
        this.changeColorToBlack = this.changeColorToBlack.bind(this);
    }
    changeColorToRed(){
        this.setState({color:"red"});
        document.body.style.backgroundColor = this.state.color;
    }
    changeColorToGreen(){
        this.setState({color:"green"});
        document.body.style.backgroundColor = this.state.color;
    }
    changeColorToBlue(){
        this.setState({color:"blue"});
        document.body.style.backgroundColor = this.state.color;
    }
    changeColorToYellow(){
        this.setState({color:"yellow"});
        document.body.style.backgroundColor = this.state.color;
    }
    changeColorToBlack(){
        this.setState({color:"black"});
        document.body.style.backgroundColor = this.state.color;
    }
    render(){
        return(
            <div>
            <button onClick={this.changeColorToRed}>Red</button>
            <button onClick={this.changeColorToGreen}>Green</button>
            <button onClick={this.changeColorToBlue}>Blue</button>
            <button onClick={this.changeColorToYellow}>Yellow</button>
            <button onClick={this.changeColorToBlack}>Black</button>
            </div>
        );
    }
}
export default Buttons;