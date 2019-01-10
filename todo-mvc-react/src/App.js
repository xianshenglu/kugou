import React, { Component } from 'react'
import './assets/reset.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoListContainer from './containers/TodoListContainer'
import TodoFilterContainer from './containers/TodoFilterContainer'
import TodoInputContainer from './containers/TodoInputContainer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoInputContainer />
        <TodoListContainer />
        <TodoFilterContainer />
        <Footer />
      </div>
    )
  }
}

export default App
