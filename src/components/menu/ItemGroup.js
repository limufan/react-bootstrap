import React from "react";

export default class ItemGroup extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {title} = this.props;
        return(
            <div className="qiaozui_menu_item_group">
                <div className="qiaozui_menu_item_group_title">{title}</div>
                {this.props.children}
            </div>
        )
    }
}