import React from 'react'

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
        const {value} = this.state;
        
        return (
            <div className="form-checkbox" onClick={this.handleClick}>
                <input type="checkbox" checked={value} className="form-check-input" />
                {this.renderLable()}
            </div>
        );
    }

    renderLable(){
        if(!this.props.label){
            return null;
        }

        return(
            <label className="form-check-label">
                {this.props.label}
            </label>
        )
    }

    getValue(){
        return this.state.value;
    }

    setValue(value){
        this.setState({value: value});
    }
}