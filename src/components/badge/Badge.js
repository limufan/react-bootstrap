import React from 'react';
import "./css/badge.css";

export default class Badge extends React.Component{
    static type = {
        success: "success",
        warning: "warning"
    }

    static defaultProps = {
        type: Badge.type.success
    }

    constructor(props, context){
        super(props, context);
    }

    render(){
        const {disabled, style, type} = this.props;
            
        let className = "qiaozui_badge";
        if(this.props.className){
            className += ` ${this.props.className}`
        }
        if(type === Badge.type.success){
            className += " qiaozui_badge_success";
        }
        else{
            className += " qiaozui_badge_warning";
        }
        return (
            <div className={className} style={style}>
                {this.props.children}
            </div>
        );
    }
}

