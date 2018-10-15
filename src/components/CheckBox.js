import React from 'react'
import PropTypes from 'prop-types';

import "./css/checkbox.css";

export default class CheckBox extends React.Component{

    static defaultProps = {
        label: "",
        name: null
    }

    constructor(props, context){
        super(props);
        this.state = {
            value: props.value
        }
    }

    componentWillReceiveProps(props){
        if(props.value !== undefined){
            this.setState({value: props.value});
        }
    }

    handleClick = (event) => {
        let value = this.props.disabled ? this.state.value : !this.state.value;
        this.setState({value: value});
        if(this.props.onChange){
            let args = {
                name: this.props.name,
                value: value
            };
            this.props.onChange(args, event);
        }
    }

    render(){
        return (
            <a href="javascript:;" className="ywpui_checkbox__" onClick={this.handleClick}>
                {this.renderIcon()}
                {this.renderLable()}
            </a>
        );
    }

    renderIcon(){
        let className = `ywpui_checkbox_ico__ ${this.state.value ? "ywpui_checkbox_ico_on__": ""}`
        return(
            <i className={className}></i>
        )
    }

    renderLable(){
        if(!this.props.label){
            return null;
        }

        return(
            <div className="ywpui_checkbox_label">
                {this.props.label}
            </div>
        )
    }

    getValue(){
        return this.state.value;
    }

    setValue(value){
        this.setState({value: value});
    }
}