import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// function component
function App() {
  // This will not increment value in UI but It will increment value in console. To render value in UI we need to rerender ther component . for that we need to use {states}
 // let counter =0; insted of this we need to use useState hook. In useState we need to provide initial value
 let [counter, setCounter]=useState(0);
  const incrementFunction=()=>{
    counter=counter+1;
    console.log(counter); 

  };
  return (
  //  to use javascript component inside JSX code -use {}
   <div class="container">
    <h1>Counter:{counter}</h1>
    <button className="btn btn-primary" onClick={incrementFunction}>Increment</button>
   </div>
  );
}

// // class component
// // do not add bracket at end like- 
// // class App2 extends React.Component()

// class App2 extends React.Component {
//   render(){
//     return (
//    <h1>Class Component</h1>
//   );
// }}
export default App;
