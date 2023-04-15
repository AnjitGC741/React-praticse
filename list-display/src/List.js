import React from "react";
import './style.css';
class List extends React.Component{
    constructor(){
        super();
        this.state={
          value : "",
          items : [],
        }
        this.updateValue = this.updateValue.bind(this);
        this.getValue = this.getValue.bind(this);
      }
    updateValue(event){
      this.setState({value:event.target.value});//used to get the current value of an input element when an event occurs
    }
    getValue(){
      // to insert the value in the array
      const newItem = this.state.value;
      const newItems = [...this.state.items, newItem];
      this.setState({ items: newItems, value: "" });
    }
    displayValue(){
      // to display all the value of array
      const numbers = this.state.items;
    return  numbers.map((iteam) =>
      <li>{iteam}</li>
    );
    }
      render(){
        return (
          <div className="style">
              <input value={this.state.value} onChange={this.updateValue}/>
              <button onClick={()=>{this.getValue()}}>Add</button>
              <ul>
                {this.displayValue()}
            </ul>
          </div>
        );
      }
} 
export default List;