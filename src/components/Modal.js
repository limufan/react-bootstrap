import React from "react"
import ReactDom from "react-dom"
import bsStyle from "../bootstrap.css";
import $ from "jquery"

const ClassName = {
    SCROLLBAR_MEASURER : 'modal-scrollbar-measure',
    BACKDROP           : 'modal-backdrop',
    OPEN               : 'modal-open',
    FADE               : 'fade',
    SHOW               : 'show'
}

export default class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: props.show
        }
    }

    componentWillReceiveProps(props){
        if(this.state.show !== props.show){
            this.setState({show: props.show});
        }
    }

    render(){
        let modalStyle = null;
        let modalClassName = "modal fade";
        if(this.state.show){
            modalStyle = {display: "block"};
            modalClassName = "modal fade show";
            this.showBackdrop();
        }
        else{
            this.hideBackdrop();
        }

        return (
            <div className={modalClassName} tabindex="-1" style={modalStyle}>
                <div className="modal-dialog modal-dialog-centered" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" >{this.props.title}</h5>
                            <button type="button" className="close" onClick={this.btnCloseOnClick}>
                                <span>&times;</span>
                            </button>
                        </div>                        
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            {this.props.footer}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    triggerEvent(){
        if(this.state.show){
            if(this.props.onShow){
                this.props.onShow();
            }
        }
        else{
            if(this.props.onHide){
                this.props.onHide();
            }
        }
    }

    btnCloseOnClick = ()=>{
        this.setState({show: false});
        if(this.props.onColse){
            this.props.onColse();
        }
    }

    showBackdrop(){
        this._backdrop = $("<div class='modal-backdrop fade show'></div>");
        $(this._backdrop).appendTo(document.body)
        $(document.body).addClass(ClassName.OPEN)
    }

    hideBackdrop(){
        if(this._backdrop){
            this._backdrop.remove();
            $(document.body).removeClass(ClassName.OPEN)
        }
    }
    
    componentWillUnmount(){
        if(this._backdrop){
            ReactDom.unmountComponentAtNode(this._backdrop);
            this._backdrop.remove();
            this._backdrop = null;
        }
    }
}