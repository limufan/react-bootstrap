import React from 'react';
import PropTypes from 'prop-types';
import "./css/textarea.css";

export default class Textarea extends React.Component{

    static defaultProps = {
        valid: true
    }

    constructor(props, context){
        super(props, context);

        this.state = {
            focused: false,
            value: props.value
        }
    }

    componentWillReceiveProps(props){
        if(props.value !== undefined){
            this.setState({value: props.value});
        }
    }

    handleFocus = (event) => {
        this.setState({focused: true});
    }

    handleBlur = (event) => {
        this.setState({focused: false});
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        if(this.props.onChange){
            let args = {
                name: this.props.name,
                value: event.target.value
            };
            this.props.onChange(args, event);
        }
    }

    handleInput = (event) => {
        this.setState({value: event.target.value});
        if(this.props.onInput){
            let args = {
                name: this.props.name,
                value: event.target.value
            };
            this.props.onInput(args, event);
        }
    }

    render(){
        const {disabled} = this.props;

        let classNames = ["ywpui_textarea__"];
        if(this.props.className){
            classNames.push(this.props.className);
        }

        if(disabled){
            classNames.push("disabled");
        }

        if(this.state.focused){
            classNames.push("green_border");
        }
        let errorItem = null;
        if(!this.props.valid){
            errorItem = <div class="from_item_error boxs">{this.props.validMessage}</div>;
        }
        return (
                <React.Fragment>
                    <textarea type="textarea"
                        className={classNames.join(" ")}
                        style={this.props.style}
                        placeholder={this.props.placeholder}
                        disabled = {this.props.disabled}
                        maxlength={this.props.maxLength}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        onInput={this.handleInput}
                        value={this.state.value}
                    />
                    {errorItem}
                </React.Fragment>
        );
    }

    getValue(){
        return this.state.value;
    }

    setValue(value){
        this.setState({value: value});
    }
}