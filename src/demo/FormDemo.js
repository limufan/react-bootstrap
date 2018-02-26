import React, { Component } from 'react';
import Button from "../components/Button";
import Form from "../components/Form";
import FormGroup from "../components/FormGroup";
import {ValidateTextBox} from "../components/ValidateInput";
import TextBox from "../components/TextBox";

 
export default class FormDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: {
                account: null,
                name: null
            },
            valid: false
        }

        this.inputs = [];
    }

    handleSubmit = () =>{
        this.validate();
        if(this.props.onSubmit){
            this.props.onSubmit();
        }
    }

    handleReset = (event) =>{
        let value = this.state.value;
        value.account = "";
        this.setState({value: value})
    }

    handleInputChange = (event, args) =>{
        let value = this.state.value;
        value[args.name] = args.value;
        this.setState({value: value})
        this.setState({valid: args.valid});
    }

    refInput =(input) => {
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

    render(){
        const inputProps = {onInput: this.handleInputChange, ref: this.refInput};
        return (
            <Form>
                <FormGroup label={"用户名"} >
                    <ValidateTextBox 
                        name="account"
                        placeholder={"输入用户名"}
                        value={this.state.value.account}
                        rules={{required: true, message: "请输入用户名"}}
                        {...inputProps}>
                    </ValidateTextBox>
                </FormGroup>
                <FormGroup label={"姓名"} >
                    <ValidateTextBox 
                        name="name"
                        placeholder={"输入姓名"}
                        value={this.state.value.name}
                        rules={{required: true, message: "请输入姓名"}}
                        {...inputProps}>
                    </ValidateTextBox>
                </FormGroup>
                <Button onClick={this.handleSubmit}>提交</Button>
                <Button onClick={this.handleReset}>重置</Button>
                <p>{JSON.stringify(this.state.value)}</p>
                <p>valid: {JSON.stringify(this.state.valid)}</p>
            </Form>   
            
        );
    }
}