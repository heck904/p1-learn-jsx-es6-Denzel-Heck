import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    //Example 1: Default Parameter
    console.log(`Example 1: Default Paramater`)
    var BlazerGrill = {
    food: {
      pizza: "Pepperoni or Cheese",
      chickenWings: "BBQ, Buffalo, Spicy",
      dessert: "Brownie, Cookies"
    },
  }
    function example (d = BlazerGrill){
      console.log(`Menu: ${d.food.pizza} , ${d.food.chickenWings} , ${d.food.dessert}`)

    }
    example();
    console.log(`----------------`)

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
