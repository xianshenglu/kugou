import React, { Component } from 'react'
import { render } from 'react-dom'
import './assets/reset.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoInput from './components/TodoInput'
import TodoFilter from './components/TodoFilter'
import TodoListContainer from './containers/TodoListContainer'
import store from './reducers/index'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.unsubscribe = store.subscribe(() => {
      this.setState(() => store.getState())
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <TodoInput />
        <TodoListContainer
          todos={this.state.todos}
          filterMode={this.state.filterMode}
        />
        <TodoFilter mode={this.state.filterMode} />
        <Footer />
      </div>
    )
  }
}

export default App
