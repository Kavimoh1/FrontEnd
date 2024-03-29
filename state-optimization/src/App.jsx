
import './App.css';
import React, { useState } from 'react';
import NewsCard from './Components/PropsExample/NewsCard';
// function component
function App() {
//   This will not increment value in UI but It will increment value in console. To render value in UI we need to rerender ther component . for that we need to use {states}
//  let counter =0; insted of this we need to use useState hook. In useState we need to provide initial value
// state is something which is local to the component and whenever change happens ,component gets rerender
// you can not create state conditionaly like -
// if (true){
//   let [counter, setCounter]=useState(0);
// }
const newsArray=[
  {
    img:'',
    title:"laptop",
    body:"fgbdfhfgjghjg"
  },
  {
    img:'',
    title:"laptop",
    body:"fgbdfhfgjghjg"
  },
  {
    img:'',
    title:"laptop",
    body:"fgbdfhfgjghjg"
  }
]
console.log("component render");
 let [counter, setCounter]=useState(0);
 
  const incrementFunction=()=>{
    setCounter(counter+1);
  };

  return (
    <div class="container">
  {/* //  to use javascript component inside JSX code -use {}
  //  <div class="container">
  //   <h1>Counter:{counter}</h1>
  //   <button className="btn btn-primary" onClick={incrementFunction}>Increment</button>
  //  </div> */}
  <NewsCard news={newsArray[0]}/>
  <NewsCard news={newsArray[1]}/>
  {/* <NewsCard name="ABC" age="50"/> */}
  </div>
  );
}

// class component
// do not add bracket at end like- 
// class App2 extends React.Component()

// class App extends React.Component {
// // state is a object in class component
//   state={
//     counter:0
//   }
//  incrementFunction=()=>{
//    this.setState({counter:this.state.counter+1})
//   }
//   render() {
//     console.log("component render");  
//     return(
//   //  to use javascript component inside JSX code -use {}
//    <div className="container">
//     <h1>Counter:{this.state.counter}</h1>
//     <button className="btn btn-primary" onClick={this.incrementFunction}>Increment</button>
//    </div>
//   )}}
export default App;
