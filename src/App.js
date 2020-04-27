import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Compiler from './components/compiler';
import Output from './components/Output'
import Language from './components/language';


class App extends Component {
 

  render(){
  return (
    <div className="App">
      <Language></Language>
     <Compiler></Compiler>
    
   
      </div>
  );
}
}

export default App;
