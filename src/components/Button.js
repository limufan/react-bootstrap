import React from "react";
import "./css/button.css";

export function getButtonClassName(props){
    let className = ["ywpui_button"];
    switch(props.type)
    {
        case Button.type.primary:
            className.push('ywpui_btn_primary');
            break;
        case Button.type.light:
            className.push('ywpui_btn_light');
            break;
        case Button.type.warning:
            className.push('ywpui_btn_warning');
            break;
        case Button.type.secondary:
            className.push('ywpui_btn_secondary');
            break;
        case Button.type.text:
            className.push('ywpui_btn_text');
            break;
        case Button.type.print:
            className = ['ywpui_btn_print'];
            break;
        case Button.type.link:
            className.push('ywpui_btn_link');
            break;
        default:
            className.push('ywpui_btn_default');
            break;
    }
    if(props.className){
        className.push(props.className);
    }

    return className.join(" ");
}

export default class Button extends React.Component{
    static type = {
        default: "default",
        primary: "primary",
        light: "light",
        warning: "warning",
        secondary: "secondary",
        text: "text",
        print: "print",
        link: "link"
    }

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        let className = getButtonClassName(this.props);
        const {disabled} = this.state;
        return(
            <button ref={el => this._element = el} type="button" disabled={disabled} className={className} style={this.props.style} onClick={this.props.onClick} >
                {this.props.children}
            </button>
        )
    }

    focus(){
        this._element.focus();
    }

    setDisabled(disabled){
        console.log("disabled:" + disabled)
        this.setState({disabled: disabled})
    }
}
