import React from "react"

const CLASS_NAME = {
    DEFAULT: "form-control",
    INVALID: "form-control is-invalid",
}

export default class TextBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.value
        }
    }

    componentWillReceiveProps(props){
        this.setState({value: props.value});
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        if(this.props.onChange){
            this.props.onChange(event);
        }
    }

    handleInput = (event) => {
        if(this.props.onInput){
            this.props.onInput(event);
        }
    }

    render(){
        let className = CLASS_NAME.DEFAULT
        if(!this.props.valid){
            className = CLASS_NAME.INVALID;
        }

        return (
            <input className={className}
                placeholder={this.props.placeholder}
                value={this.state.value} 
                type={this.props.type}
                onChange={this.handleChange}
                onInput={this.handleInput} />
        );
    }

    getValue(){
        return this.props.value;
    }
}

TextBox.defaultProps = {
    type: "text"
};
