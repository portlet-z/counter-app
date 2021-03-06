import React, { Component } from 'react';
import NavBar from './components/navbar'
import './App.css';
import Counters from './components/counters'

class App extends Component {
  state = { 
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }
  constructor() {
    super()
    console.log('App - Constructor ')
  }
  componentDidMount() {
    //
    console.log('App - Mounted')
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counter.value++
    counters[index] = counter
    this.setState({counters})
  }
  handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    if (counter.value == 0) {
      return
    }
    counter.value--
    counters[index] = counter
    this.setState({counters})
  }
  handleDelete = (id) => {
    this.setState({ counters: this.state.counters.filter(counter => counter.id !== id) })
  }
  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0
      return counter
    })
    this.setState({counters})
  }
  render() {
    console.log('App - Rendered')
    return (
      <React.Fragment>
        <NavBar totalCounter={this.state.counters.filter(c => c.value > 0).length}/>
        <main className='container'>
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
