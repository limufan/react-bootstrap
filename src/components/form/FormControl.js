import React from 'react';
import ValidFeedbackPlaceholder from "./ValidFeedbackPlaceholder";

export default class FormControl extends React.Component {

    render() {
        return(
            <div className="qiaozui_from_control">
                {this.props.children}
            </div>
        )

    }
}