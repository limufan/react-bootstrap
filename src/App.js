import React, { Component } from 'react';
import bsStyle from "./bootstrap.css";
import Button from "./components/Button";
import ModalDemo from './demo/ModalDemo';
import ButtonGroupDemo from './demo/ButtonGroupDemo';
import FormDemo from './demo/FormDemo';
import TabDemo from './demo/TabDemo';
import AlertDemo from './demo/AlertDemo';

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
          <hr />
          <FormDemo/>
          <hr />
          <TabDemo/>
          <hr />
          <AlertDemo/>
      </div>
    );
  }

  

}

export default App;
