import React, { Component } from 'react';
import bsStyle from "./bootstrap.css";
import Button from "./components/Button";
import ModalDemo from './demo/ModalDemo';
import ButtonGroupDemo from './demo/ButtonGroupDemo';
import FormDemo from './demo/FormDemo';
import TabDemo from './demo/TabDemo';
import AlertDemo from './demo/AlertDemo';
import TooltipDemo from './demo/TooltipDemo';

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
          <hr />
          <TooltipDemo/>
      </div>
    );
  }

  

}

export default App;
