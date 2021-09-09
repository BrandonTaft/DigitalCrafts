import { Component } from "react";


class Counter extends Component {

    constructor() {
        super() 
        
        this.state = {
            counter: 0, 
            fancyCounter: 0, 
            name: 'johndoe'
          }
    }

    handleIncrement = () => {
        // this is not undefined inside the arrow function 
    
        // State is immutable, which means it CANNOT BE CHANGED 
        // this.state.counter += 1 DON'T DO THIS 
    
        // setState allows you to replace the old state with a brand new state object
        // When setState is called, it automatically calls the render function 
        // setState does a partial update 
        
        // setState is an async function 
        this.setState({
          counter: this.state.counter + 1, 
          fancyCounter: this.state.fancyCounter + 10
        }, () => {
          // this function is fired when the state has been updated successfully!
          console.log('[Second Argument to the setState]')
          console.log(this.state.counter)
        })
    
        // this will print the old state 
        console.log(this.state.counter)
      }

    render() {
        return (
            <div>
            <h1>{this.state.counter}</h1>
            <h3>{this.state.fancyCounter}</h3>
            <b>{this.state.name}</b>
            <button onClick = {this.handleIncrement}>Increment</button>
            </div>
        )
    }
}


export default Counter 