import React from "react"

const CLASS_NAME = {
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
    BLOCK: "btn-block",
    DROPDOWN_TOGGLE: "dropdown-toggle"
  }

export default class Button extends React.Component{
    static defaultProps = {
        loadingText: 'loading...',
        loading: false,
        disabled: false,
        type: "primary"
    }

    constructor(props){
        super(props);
    }

    render(){
        let text = this.props.children;
        text = this.props.loading ? this.props.loadingText : text;
        let classNames = [CLASS_NAME[this.props.type]];
        if(this.props.size){
            classNames.push(CLASS_NAME[this.props.size]);
        }
        if(this.props.block){
            classNames.push(CLASS_NAME.BLOCK);
        }
        if(this.props.dropdownToggle){
            classNames.push(CLASS_NAME.DROPDOWN_TOGGLE);
        }
        
        return (
            <button type="button" className={classNames.join(" ")} {...this.props}>{text}</button>
        );
    }
}