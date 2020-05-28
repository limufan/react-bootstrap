import React from 'react';

export default class ValidFeedbackPlaceholder extends React.Component{
    render(){
        return (
            <div class="qiaozui_valid_feedback_error">{this.props.message}</div>
        );
    }
}
