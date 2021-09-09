import React, { Component } from 'react'
import Switch from './Components/Switch'
import ApiReact from './Components/ApiReact'

class App extends Component {

  constructor() {
    super()
    //console.log ('[constructor]')
    //console.log(this)
    //this.counter= 0
    //this.handleIncrement = this.handleIncrement.bind(this)
    this.state ={
      counter: 22,
      fullName: '',
      age: '',
    }
  }

  handleIncrement = () => {
    this.setState ({
      counter: this.state.counter +1
    })
    //this.counter += 1
    //console.log(this.counter)
  }

  handleDecrement = () => {
    this.setState ({
      counter: this.state.counter -1
    })
  }

  handleFullNameChange = (e) => {
   console.log(e.target.value)
    this.setState({
      fullName: e.target.value 
    })
  }

  handleAgeChange = (e) => {
    this.setState({
      age: e.target.value 
    })
  }
  handleSubmit = () => {
    this.setState({
      isSubmitted: true
    })

  }

  render() {
    return(
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick = {this.handleIncrement}>Increment</button>
        <button onClick = {this.handleDecrement}>Decrement</button>
       <Switch />
       <input type = "text" onChange = {this.handleFullNameChange} placeholder="Full Name" />
        <input type = "text" onChange = {this.handleAgeChange} placeholder="Age" />
        <button onClick = {this.handleSubmit}>Submit</button><br></br>
        {this.state.isSubmitted ? this.state.fullName : null}
        {this.state.isSubmitted ? this.state.age : null}
        <h1>{this.state.fullName}</h1>
        
        
      </div>
    )

  }

}
export default App



