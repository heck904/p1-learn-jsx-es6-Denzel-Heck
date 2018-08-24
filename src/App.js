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


    //Example 2: Arrow Functions
    console.log(`Example 2: Arrow Functions`)
    var num = (num1 , num2) => {
      var total = num1 + num2;
      return total;
    }
    console.log(`Addition Problem For 2nd grader`)
    console.log(`Student was asked to add five plus six = ` + num(5, 6));
    console.log(`---------------`)


    //Example 3: Destructuring Assignment
    console.log(`Example 3 : Destructuring Assignment`)
    var [firstscore] = [21, 42, 7]
    console.log(`Array: 21,42,7`)
    var [,secondScore,] = [14, 35, 10]
    console.log(`The second number is ` + secondScore)
    console.log(`----------------`)

    //Example 4 : The Spread Operator
    
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
