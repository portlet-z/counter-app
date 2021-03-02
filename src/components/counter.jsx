import React, { Component } from 'react';

class Counter extends Component {

  renderTags() {
    if (this.state.tags.length === 0){
      return <p>There are no tags!</p>
    }
    return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>
  }

  componentDidUpdate() {

  }
 
  render() {
    console.log('Counter - Rendered')
    return (
      <div className='row'>
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button 
            onClick={() => this.props.onIncrement(this.props.counter)} 
            className='btn btn-secondary btn-sm'
          >
            +
          </button>
          <button 
            onClick={() => this.props.onDecrement(this.props.counter)} 
            className='btn btn-secondary btn-sm m-2'
            disabled={this.props.counter.value === 0}
          >
            -
          </button>
          <button 
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm">
              Delete
          </button>
        </div>  
      </div>
    )
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count
  }
}
 
export default Counter;