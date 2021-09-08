import React, { Component } from 'react'
import Header from './Header'
import ContainerOne from './ContainerOne'
import ContainerTwo from './ContainerTwo'
import BtmContainer from './BtmContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContainerOne />
        <ContainerTwo />
        <BtmContainer />
      </div>
    )

  }

}
export default App