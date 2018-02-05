import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import bsStyle from "./bootstrap.css";
import Button from "./components/Button";
import ModalDemo from './demo/ModalDemo';
import ButtonGroupDemo from './demo/ButtonGroupDemo';
import FormDemo from './demo/FormDemo';
import TabDemo from './demo/TabDemo';
import AlertDemo from './demo/AlertDemo';
import TooltipDemo from './demo/TooltipDemo';
import PopoverDemo from './demo/PopoverDemo';
import DropdownDemo from './demo/DropdownDemo';

class App extends Component {
  constructor(props){
    super(props);
    
  }

  render() {

    return (
      <Router>
        <div>
          <ul class="nav">
            <li class="nav-item">
              <Link className="nav-link" to="/ModalDemo" >ModalDemo</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/ButtonGroupDemo" >ButtonGroupDemo</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/FormDemo" >FormDemo</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/TabDemo" >TabDemo</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/AlertDemo" >AlertDemo</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/TooltipDemo" >TooltipDemo</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/PopoverDemo" >PopoverDemo</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/DropdownDemo" >DropdownDemo</Link>
            </li>
          </ul>
          <div style={{"margin-left": "350px", "margin-top": "150px"}}>
              <Route path="/ModalDemo" component={ModalDemo}/>
              <Route path="/ButtonGroupDemo" component={ButtonGroupDemo}/>
              <Route path="/FormDemo" component={FormDemo}/>
              <Route path="/TabDemo" component={TabDemo}/>
              <Route path="/AlertDemo" component={AlertDemo}/>
              <Route path="/TooltipDemo" component={TooltipDemo}/>
              <Route path="/PopoverDemo" component={PopoverDemo}/>
              <Route path="/DropdownDemo" component={DropdownDemo}/>
          </div>
              
        </div>
    </Router>
    );
  }

  

}

export default App;
