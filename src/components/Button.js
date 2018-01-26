import React from "react"

const ClassName = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    success: 'btn btn-success',
    danger: 'btn btn-danger',
    warning: 'btn btn-warning',
    info: 'btn btn-info',
    dark: 'btn btn-dark',
    outlinePrimary: 'btn btn-outline-primary',
    outlineSecondary: 'btn btn-outline-secondary',
    outlineSuccess: 'btn btn-outline-success',
    outlineDanger: 'btn btn-outline-danger',
    outlineWarning: 'btn btn-outline-warning',
    outlineInfo: 'btn btn-outline-info',
    outlineDark: 'btn btn-outline-dark',
    large: "btn-lg",
    small: "btn-sm",
    block: "btn-block"
  }

export default class Button extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let text = this.props.children;
        text = this.props.loading ? this.props.loadingText : text;
        let className = [ClassName[this.props.type]];
        if(this.props.size){
            className.push(className[this.props.size]);
        }
        if(this.props.block){
            className.push(className.block);
        }
        
        return (
            <button type="button" className={className} onClick={this.props.onClick} disabled={this.props.disabled}>{text}</button>
        );
    }
}

Button.defaultProps = {
    loadingText: 'loading...',
    loading: false,
    disabled: false,
    type: "primary"
};