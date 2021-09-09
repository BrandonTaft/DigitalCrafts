import React, { Component } from 'react'
import BookList from './BookList'

class App extends Component {

  constructor() {
    super()
   
    this.state = {
      allBooks: [] 
    }

  }

  // fired when the component is mounted on the virtual dom 
  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(books => {
     console.log(books)
      this.setState({
        allBooks: books 
      })
    })
  }

 
  render() {

    console.log('render')
    return (

      <BookList books = {this.state.allBooks} />


     

    )
  }
}

export default App