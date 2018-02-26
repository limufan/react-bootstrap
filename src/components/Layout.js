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
            <div className="container-fluid">
                <div className="row">
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
            <div className="border-right" style={{width: "200px"}}>
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
            <div className="col" style={this.props.style}>
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                {this.props.children}
            </nav>
        );
    }
}