import React from 'react'
import PropTypes from 'prop-types';
import Checkbox from "./CheckBox";

export default class CheckBoxGroup extends React.Component{
    
    static defaultProps = {
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
    		let value = JSON.parse(JSON.stringify(props.value));
            this.setState({value: value});
        }
    }

    handleItemonChange = (args, event) => {
        let value = this.state.value;
        if(!value){
            value = [];
        }
        if(args.checked){
            value.push(args.value);
        }else{
            const valueIndex = value.indexOf(args.value);
            value.splice(valueIndex, 1);
        }
        
        this.setState({value: value});

        if(this.props.onChange){
    		value = JSON.parse(JSON.stringify(value));
            let args = {
                name: this.props.name,
                value: value
            };
            this.props.onChange(args, event);
        }
    }

    render(){
        const state = this.state;

        let items = null;
        if(this.props.items){
            items = this.props.items.map(item => {
                let checked = false;
                if(state.value && state.value.includes(item.value)){
                    checked = true;
                }
                return <CheckBoxGroupItem checked={checked} onChange={this.handleItemonChange} {...item} />
            })
        }

        return (
            <div>
                {items}
            </div>
        );
    }

    getValue(){
        return this.state.value;
    }
    
    setValue(value){
        this.setState({value: value});
    }
}

class CheckBoxGroupItem extends React.Component{
    
    static defaultProps = {
        text: "checkbox",
        name: null
    }

    constructor(props, context){
        super(props);
        this.state = {
            checked: props.checked
        }
    }

    componentWillReceiveProps(props){
        if(props.checked !== undefined){
            this.setState({checked: props.checked});
        }
    }

    handleClick = (event) => {
        let checked = !this.state.checked;
        this.setState({checked: checked});
        if(this.props.onChange){
            let args = {
                checked: checked,
                value: this.props.value
            };
            this.props.onChange(args, event);
        }
    }

    render(){
        let className = `ywpui_checkbox_ico ${this.state.checked ? "ywpui_checkbox_ico_on": ""}`
        return (
            <a href="javascript:;" className="ywpui_checkbox__" onClick={this.handleClick} style={{marginRight: "35px"}}>
                <i className={className}></i>{this.props.text}
            </a>
        );
    }
}