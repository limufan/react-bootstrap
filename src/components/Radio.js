import React from 'react'
import PropTypes from 'prop-types';
import "./css/radio.css"

export default class Radio extends React.Component{
    
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
            this.setState({value: props.value});
        }
    }

    handleItemChecked = (item, sender) => {
        this.setState({
            text: item.text,
            value: item.value
        });

        this.triggerChange(item, sender);
    }

    triggerChange(item, sender){
        if(this.props.onChange){
            let args = {
                name: this.props.name,
                text: item.text,
                value: item.value
            };
            this.props.onChange(args, sender);
        }
    }

    render(){
        let items = null;
        if(this.props.items){
            items = this.props.items.map(item => {
                let checked = false;
                if(this.state.value === item.value){
                    checked = true;
                }
                return <RadioItem checked={checked} onChecked={this.handleItemChecked} {...item} />
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

class RadioItem extends React.Component{
    
    static defaultProps = {
        text: "",
        value: null
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
        this.setState({checked: true});
        this.triggerChanged(event);
    }

    triggerChanged(event){
        if(this.props.onChecked){
            let args = {
                checked: true,
                text: this.props.text,
                value: this.props.value
            };
            this.props.onChecked(args, this);
        }
    }

    render(){
        let className = ["ywpui_radio_ico"];
        if(this.state.checked){
            className.push("ywpui_radio_ico_on");
        }
        return (
            <a href="javascript:;" className="ywpui_radio__" onClick={this.handleClick}>
                <i className={className.join(" ")}></i>
                {this.props.text}
            </a>
        );
    }

    getValue(){
        return this.state.value;
    }
}