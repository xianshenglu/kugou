import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import NewSongContainer from './containers/newSong/NewSongContainer'

class App extends Component {
  render() {
    console.log('props', this.props)
    return (
      <div className="App">
        <Route path="/" exact component={NewSongContainer} />
      </div>
    )
  }
  componentDidMount() {
    document.documentElement.style.setProperty(
      '--vh',
      window.innerHeight / 100 + 'px'
    )
  }
}

export default App
