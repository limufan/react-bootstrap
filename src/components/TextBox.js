import React from 'react';
import {Row, Col} from "./layout";


export default class TextBox extends React.Component{

    static defaultProps = {
        type: "text",
        name: null,
        valid: true
    }

    constructor(props, context){
        super(props);
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
        if(this.props.onFocus){
            this.props.onFocus(event);
        }
    }

    handleBlur = (event) => {
        this.setState({focused: false});
        if(this.props.onBlur){
            this.props.onBlur(event);
        }
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

    handleClick = (event) => {
        if(this.props.onClick){
            this.props.onClick(event);
        }
    }

    render(){
        const {disabled, className} = this.props;
        let classNames = ["textbox"];
        if(className){
            classNames.push(className);
        }
        if(disabled){
            classNames.push("disabled");
        }

        if(this.state.focused){
            classNames.push("focused");
        }

        let text = this.state.value;
        if(text === undefined || text === null){
            text = "";
        }
        
        return (
            <div className = {classNames.join(" ")} style={this.props.style}>
                <Row>
                    <Col style={{padding: "0"}}>
                        <input
                            ref={i => this._input = i}
                            disabled = {this.props.disabled}
                            placeholder = {this.props.placeholder}
                            value = {text}
                            type = {this.props.type}
                            onFocus = {this.handleFocus}
                            onBlur = {this.handleBlur}
                            onChange = {this.handleChange}
                            onInput = {this.handleInput} 
                            onClick = {this.handleClick} 
                            onKeyDown={this.props.onKeyDown}
                        />
                    </Col>
                    <Col auto={true} marginLeftAuto={true} style={{padding: "0 5px"}}>
                        {this.props.children}
                    </Col>
                </Row>
            </div>

        );
    }

    blur(){
        this._input.blur();
        if(this.props.onBlur){
            this.props.onBlur();
        }
    }

    focus(){
        this._input.focus();
        if(this.props.onFocus){
            this.props.onFocus();
        }
    }

    getValue(){
        return this.state.value;
    }

    setValue(value){
        this.setState({value: value});
    }


    getFormValue(){
        return {[this.props.name]: this.state.value};
    }
}