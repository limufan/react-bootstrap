import React from "react"
import TextBox from "./TextBox";

const CLASS_NAME = {
    FORM_GROUP_ROW: "form-group row",
    INVALID_FEEDBACK: "invalid-feedback",
    FORM_LABEL: "col-sm-2 col-form-label",
    COL_SM: "col-sm-"
}

function validateInput(Input){
    return class extends React.Component{
        static defaultProps = {
            valid: true,
            value: null
        };    

        constructor(props) {
            super(props);
    
            this.state = {
                message: "",
                valid: props.valid,
                value: props.value
            }

        }

        componentWillReceiveProps(props){
            this.setState({value: props.value});
        }
    
        handleInputChange = (event) =>{
            let value = event.target.value;
            this.setState({value: value});
            let validateResult = this.validateValue(value);
            if(this.props.onChange){
                let args = {
                    name: this.props.name,
                    value: value
                }
                Object.assign(args, validateResult);
                this.props.onChange(event, args);
            }

        }
    
        render() {
            let message = null;
            if(!this.state.valid){
                message = <div className={CLASS_NAME.INVALID_FEEDBACK}>{this.state.message}</div>
            }
            return (
                <React.Fragment>
                    <Input ref={input => this.input = input} {...this.props} valid={this.state.valid} onChange={this.handleInputChange}/>
                    {message}
                </React.Fragment>
            )
        }

        validate(){
            return this.validateValue(this.state.value);
        }
    
        validateValue(value){
            let validateResult = {valid: true, message: null};
            if(Array.isArray(this.props.rules)){
                for(let rule of this.props.rules){
                    validateResult.valid = this.validateRule(rule, value);
                    if(!validateResult.valid){
                        validateResult.message = rule.message;
                        break;
                    }
                }
            }
            else
            {
                let rule = this.props.rules;
                validateResult.valid = this.validateRule(rule, value);
                if(!validateResult.valid){
                    validateResult.message = rule.message;
                }
            }

            this.setState({message: validateResult.message});
            this.setState({valid: validateResult.valid});
    
            return validateResult;
        }

        validateRule(rule, value){
            let valid = true;
            if(rule.required){
                valid = this.requiredValidate(value);
            }

            return valid;
        }
    
        requiredValidate(value){
            if(Array.isArray(value) && value.length === 0){
                return false
            }
            else if(value === null || value === undefined || value === ""){
                return false
            }
            else{
                return true
            }
        }

        getName(){
            return this.props.name;
        }

        getValue(){
            if(this.input.getValue){
                return this.input.getValue();
            }
            return this.state.value;
        }

        getFormValue(){
            return {[this.getName()]: this.getValue()};
        }
    }
}


export const ValidateTextBox = validateInput(TextBox)