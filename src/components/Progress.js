import React from "react";

export default class Progress extends React.Component{
    static defaultProps = {
        percent: 1
    }

    constructor(props){
        super(props);
    }

    render(){
        let style = {width: `${this.props.percent}%`}
        return (
            <div className="progress">
                <div className="progress-bar" style={style}></div>
            </div>
        );
    }
}