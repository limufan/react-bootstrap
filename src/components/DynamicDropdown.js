import React from "react"
import Dropdown, {DropdownMenu} from "./Dropdown"

export default class DynamicDropdown extends React.Component{
    static defaultProps = {
        show: false,
        value: null
    }

    constructor(props){
        super(props);
    }

    handleMenuSelect = (event, args) =>{
        if(this.props.onChange){
            this.props.onChange(event, args);
        }
    }

    render(){
        let menus = this.props.menus.map(menu => {
            let active = false;
            if(this.props.value === menu.value){
                active = true;
            }
            return <DropdownMenu text={menu.text} value={menu.value} active={active} onSelect={this.handleMenuSelect} />
        });
        
        return (
            <Dropdown show={this.props.show}>
                {menus}
            </Dropdown>
        );
    }
}
