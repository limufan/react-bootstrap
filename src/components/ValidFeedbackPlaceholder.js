import React from 'react';
import "./css/validFeedback.css";

export default class ValidFeedbackPlaceholder extends React.Component{
    render(){
        return (
            <div class="ywpui_valid_feedback_error">{this.props.message}</div>
        );
    }
}
