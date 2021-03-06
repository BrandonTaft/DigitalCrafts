import React, { Component } from 'react'
import TaskList from './TaskList'
import Header from './Header'
import Name from './Name'
import Friends from './Friends'


// App component inherits from the Component class 
class App extends Component {

  render() {
    const tasks = [
      {name: 'Mow lawn', priority: 'high'},
      {name: 'Wash car', priority: 'low'}
    ]
    const friends = [
        { name: 'Bob', age: '33' },
        { name: 'jon', age: '22' },
        { name: 'Bob', age: '33' }
      ]


    // JSX JavaScript and XML
    return (
      <div>
        <Header />
        <Name lastName='Doe' firstName='John' />
        <Friends allFriends={friends} />
        <TaskList allTasks = {tasks} />


      </div>


    )
  }
}

export default App