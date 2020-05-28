import React from "react";
import ReactDOM from "react-dom";

import "../css/message.css"

export default class Message extends React.Component{
    static defaultProps = {
        duration: 2000,
        show: false
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            show: props.show
        }
    }

    componentDidMount(){

    }

    render() {
        setTimeout(() => {
            this.hide();
        }, this.props.duration);

        let iconClassName = "qiaozui_icon_success";
        if(this.props.type === "error"){
            iconClassName = "qiaozui_icon_error"
        }
        else if(this.props.type === "warning"){
            iconClassName = "qiaozui_icon_warning"
        }

        let style = {};
        if(!this.state.show){
            style.display = "none";
        }

        return (
            <div className="qiaozui_messae_box" style={style}>
                <i className={iconClassName}></i>
                {this.props.message}
            </div>
        );
    }

    show(message, duration){
        this.setState({show: true})
    }

    hide(){
        this.setState({show: false});
        if(this.props.onHide){
            this.props.onHide();
        }
    }
}