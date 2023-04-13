import { Component } from "react";
class Buttons extends Component{
    constructor(){
        super();
        this.state={
            color:"white",
        };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(colorName){
        this.setState({color:colorName});
        document.body.style.backgroundColor = this.state.color;
    }
    render(){
        return(
            <div>
            <button onClick={()=>this.changeColor("red")}>Red</button>
            <button onClick={()=>this.changeColor("green")}>Green</button>
            <button onClick={()=>this.changeColor("blue")}>Blue</button>
            <button onClick={()=>this.changeColor("yellow")}>Yellow</button>
            <button onClick={()=>this.changeColor("black")}>Black</button>
            </div>
        );
    }
}
export default Buttons;