import React from "react"
import { Link } from 'react-router-dom';

export default class Layout extends React.Component{
    static defaultProps = {
        
    }

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="container-fluid">
                <div class="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export class Sider extends React.Component{
    static defaultProps = {
        
    }

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="border-right" style={{width: "200px"}}>
                {this.props.children}
            </div>
        );
    }
}

export class Content extends React.Component{
    static defaultProps = {
        
    }

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="col" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export class Header extends React.Component{
    static defaultProps = {
        
    }

    constructor(props){
        super(props);
    }

    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                {this.props.children}
            </nav>
        );
    }
}