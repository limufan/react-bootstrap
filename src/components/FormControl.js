import React from 'react';
import "./css/formControl.css";
import ValidFeedbackPlaceholder from "./ValidFeedbackPlaceholder";

export default class FormControl extends React.Component {

    render() {
        return(
            <div className="ywpui_from_control">
                {this.props.children}
            </div>
        )

    }
}