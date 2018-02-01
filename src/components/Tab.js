import React from "react"

export default class Tab extends React.Component{
    static defaultProps = {
        activeTab: null
    }

    constructor(props){
        super(props);
        this.state = {
            activeTab: props.activeTab
        }
    }

    componentWillReceiveProps(props){
        this.setState({activeTab: props.activeTab});
    }

    handleTabOnClick = (event, tabName) =>{
        this.setState({activeTab: tabName});
        event.preventDefault();
        if(this.props.onChange){
            this.props.onChange(event, tabName);
        }
    }

    render(){
        let items = React.Children.map(this.props.children, pane =>{
            let paneName = pane.props.name;
            let className = "nav-item nav-link";
            if(paneName === this.state.activeTab){
                className = "nav-item nav-link active";
            }
            return <a href="#" class={className} onClick={event => this.handleTabOnClick(event, paneName)}>{pane.props.title}</a>
        });

        let panes = React.Children.toArray(this.props.children);
        let activePane = panes.filter(pane => {
            return pane.props.name === this.state.activeTab;
        });

        return (
            <React.Fragment>
                <div class="nav nav-tabs">
                    {items}
                </div>
                <div class="tab-content" id="nav-tabContent">
                    {activePane}
                </div>
            </React.Fragment>
        );
    }
}

export class TabPane extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        let className = "tab-pane fade show active";

        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}