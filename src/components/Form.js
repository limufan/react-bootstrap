import React from "react"

export default class Form extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form>
                {this.props.children}
            </form>
        );
    }
}

export class FormContext{
    constructor(props){
        this.props = {...props};
        this.inputs = [];
    }

    addInput(input){
        if(!this.inputs.includes(input)){
            this.inputs.push(input);
        }
    }

    validate(){
        this.inputs.forEach(input => {
            input.validate();
        })
    }

    getValue(){
        let value = this.inputs.map(input => {
            return input.getFormValue();
        })

        return value;
    }
}