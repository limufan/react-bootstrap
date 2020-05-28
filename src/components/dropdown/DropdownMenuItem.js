import React from 'react';
import {Link} from 'react-router-dom';

export default class DropdownMenuItem extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state = {}
    }

    render(){
        const {item} = this.props;
        const {to, href, text, icon, onClick} = item;
        if(to){
            return(
                <Link className="qiaozui_dropdown_menu_item" to={to}>
                    {icon}{text}
                </Link>
            )
        }
        else{
            return(
                <a className="qiaozui_dropdown_menu_item" href={href} onClick={onClick}>
                    {icon}{text}
                </a>
            )
        }
    }
}