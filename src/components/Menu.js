import React from "react"
import { Link } from 'react-router-dom';

export default class Menu extends React.Component{
    static defaultProps = {
        
    }

    constructor(props){
        super(props);
    }

    render(){
        return (
            <ul className="nav nav-pills flex-column">
                {this.props.children}
            </ul>
        );
    }
}

export class MenuItem extends React.Component{
    static defaultProps = {
        active: false
    }

    constructor(props){
        super(props);
    }

    onClick = (event) => {
        if(this.props.onClick){
            this.props.onClick(event);
        }
    }

    render(){
        let linkClassNames = ["nav-link"];
        if(this.props.active){
            linkClassNames.push("active");
        }
        
        return (
            <li className="nav-item">
                <Link className={linkClassNames.join(" ")} to={this.props.to} onClick={this.onClick}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}

export class DynamicMenu extends React.Component{
    static defaultProps = {
        
    }

    constructor(props){
        super(props);
        this.state = {
            activeMenu: props.activeMenu
        }
    }

    componentWillReceiveProps(props){
        this.setState({activeMenu: props.activeMenu});
    }

    handleMenuClick = (event, menu) => {
        if(this.props.onClick){
            this.props.onClick(event);
        }

        this.setState({activeMenu: menu});
    }

    render(){
        const state = this.state;
        let menuItems = this.props.menus.map(menu => {
            let active = state.activeMenu === menu;
            return(
                <MenuItem key={menu.text}
                    active={active} 
                    to={menu.to} 
                    onClick={event => this.handleMenuClick(event, menu)}>
                    {menu.text}
                </MenuItem>
            ) 
        });
        
        return (
            <Menu >
                {menuItems}
            </Menu>
        );
    }
}