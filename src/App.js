import React, {Component} from 'react';
import './App.css';


class App extends Component{
    state = {
      count: 0,
    }


  handleIncrement = () => {
    let counter = this.state.count
    this.setState({
      count: counter += 1
    })
  }
  handleDecrement = () => {
    let counter = this.state.count
    this.setState({
      count: counter -= 1 
    })
  }
  handleReset = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container" >
          <p>{this.state.count}</p>
          <div className="controls">
            <button onClick={this.handleDecrement} className={'decrement'}>-</button>
            <button onClick={this.handleReset} className={'reset'}>reset</button>
            <button onClick={this.handleIncrement} className={'increment'}>+</button>
          </div>
        </div>
        
      </div>
    );
  }

}

export default App;
