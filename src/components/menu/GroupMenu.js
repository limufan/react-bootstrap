import React from "react";

export default class GroupMenu extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="qiaozui_menu_group_menu">
                {this.props.children}
            </div>
        )
    }
}