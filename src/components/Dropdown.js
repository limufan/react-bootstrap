import React from "react"

const CLASS_NAME = {
    DROPDOWN: 'dropdown',
    SHOW: 'show',
    DROPDOWN_MENU: 'dropdown-menu',
    DROPDOWN_ITEM: 'dropdown-item',
    ACTIVE: 'active'
  }

export default class Dropdown extends React.Component{
    static defaultProps = {
        show: false,
        value: null
    }

    constructor(props){
        super(props);
    }

    render(){
        let dropdownClassName = [CLASS_NAME.DROPDOWN];
        if(this.props.show){
            dropdownClassName.push(CLASS_NAME.SHOW);
        }

        let menuClassName = [CLASS_NAME.DROPDOWN_MENU];
        if(this.props.show){
            menuClassName.push(CLASS_NAME.SHOW);
        }
        return (
            <div className={dropdownClassName.join(" ")}>
                <div className={menuClassName.join(" ")}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export class DropdownMenu extends React.Component{
    static defaultProps = {
        
    }

    constructor(props){
        super(props);
    }

    handleMenuClick = (event) =>{
        if(this.props.onSelect){
            let text = this.props.text || this.props.children;
            let args = {text: text, value: this.props.value};
            this.props.onSelect(event, args);
        }
        event.preventDefault();
    }

    render(){
        let classNames = [CLASS_NAME.DROPDOWN_ITEM];
        if(this.props.active){
            classNames.push(CLASS_NAME.ACTIVE);
        }

        let children = this.props.children || this.props.text;
        return (
            <a className={classNames.join(" ")} href="#" onClick={this.handleMenuClick}>{children}</a>
        );
    }
}
