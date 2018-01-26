import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import ModalDemo from './demo/ModalDemo';
import ButtonGroupDemo from './demo/ButtonGroupDemo';

class App extends Component {
  constructor(){
    super();
    
  }

  render() {

    return (
      <div className="App">
          <ModalDemo/>
          <hr />
          <ButtonGroupDemo/>
      </div>
    );
  }

  

}

export default App;
