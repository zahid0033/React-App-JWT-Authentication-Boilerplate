import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';


class Counter extends Component {
  render() {
    return (
      <div>
        <p>Current counter state: {this.props.counter}</p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { counter: state.counter.counter }
}

export default connect(mapStateToProps, actions)(Counter);