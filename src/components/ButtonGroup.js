import React from "react"

export default class ButtonGroup extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <div class="btn-group">
                {this.props.children}
            </div>
        );
    }
}
