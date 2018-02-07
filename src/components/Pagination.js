import React from "react";

export default class Pagination extends React.Component{
    static defaultProps = {
        total: 180,
        pageSize: 10,
        pageIndex: 1,
        dispalyPageCount: 5
    }

    constructor(props){
        super(props);
        let pageCount = this.getPageCount();
        this.state = {
            pageIndex: props.pageIndex,
            pageSize: props.pageSize,
            pageCount: pageCount
        }
    }

    componentWillReceiveProps(props){
        let pageCount = this.getPageCount();
        this.setState({
            pageSize: props.pageSize,
            pageCount: pageCount
        });
    }

    handlePageItemClick = (event, pageIndex) => {
        this.setPageIndex(event, pageIndex);
    }

    handlePreviousPageClick = (event) => {
        let pageIndex = this.state.pageIndex;
        pageIndex--;
        if(pageIndex < 1){
            pageIndex = 1;
        }

        this.setPageIndex(event, pageIndex);
    }

    handleNextPageClick = (event) => {
        let pageIndex = this.state.pageIndex;
        pageIndex++;
        if(pageIndex > this.state.pageCount){
            pageIndex = this.state.pageCount;
        }

        this.setPageIndex(event, pageIndex);
    }

    setPageIndex(event, pageIndex){
        this.setState({pageIndex: pageIndex});

        if(this.props.onChange){
            let args = {
                pageIndex: pageIndex,
                pageSize: this.state.pageSize
            };
            this.props.onChange(event, args);
        }
    }

    render(){
        let pageItems = [];
        const {pageCount, pageIndex} = this.state;
        const {dispalyPageCount} = this.props;
        
        let index = 1;
        
        pageItems.push(this.getPageItem(index++));

        let remainPageCount = pageCount - pageIndex;
        if(pageIndex > 3 && pageCount > dispalyPageCount + 1){
            index = pageIndex - Math.floor(dispalyPageCount / 2);

            if(index >= pageCount - dispalyPageCount){
                index = pageCount - dispalyPageCount;
            }
        }
        
        if(index > 2){
            pageItems.push(<PageItem disabled={true}>...</PageItem>);
        }

        let dispalyPageItemLength = 0;
        for(; index <= pageCount; index++){
            pageItems.push(this.getPageItem(index));
            dispalyPageItemLength++;
            if(dispalyPageItemLength >= dispalyPageCount){
                break;
            }
        }
        if(index < pageCount - 1){
            pageItems.push(<PageItem disabled={true}>...</PageItem>);
        }
        if(index < pageCount){
            pageItems.push(this.getPageItem(pageCount));
        }

        return (
            <nav>
                <ul className="pagination">
                    <PageItem disabled={this.state.pageIndex <= 1} onClick={this.handlePreviousPageClick}>上一页</PageItem>
                    {pageItems}
                    <PageItem disabled={this.state.pageIndex >= pageCount} onClick={this.handleNextPageClick}>下一页</PageItem>
                </ul>
            </nav>
        );
    }

    getPageItems(index){
        const {pageCount, pageIndex} = this.state;
        const {dispalyPageCount} = this.props;
        let pageItems = [];
        for(; index <= pageCount; index++){
            pageItems.push(this.getPageItem(index));
            if(pageItems.length > dispalyPageCount){
                break;
            }
        }

        return pageItems;
    }

    getPageItem(index){
        return (
            <PageItem 
                active={this.state.pageIndex === index} 
                onClick={event => this.handlePageItemClick(event, index)}>
                {index}
            </PageItem>
        )
    }

    getPageCount(){
        let pageCount = Math.floor(this.props.total / this.props.pageSize);
        if(this.props.total % this.props.pageSize > 0){
            pageCount += 1;
        }

        return pageCount;
    }
}

class PageItem extends React.Component{
    static defaultProps = {
        active: false,
        disabled: false
    }

    constructor(props){
        super(props);
    }

    handleClick = (event) => {
        event.preventDefault();
        if(this.props.onClick){
            this.props.onClick(event);
        }
    }

    render(){
        let classNames = ["page-item"];
        if(this.props.active){
            classNames.push("active");
        }
        if(this.props.disabled){
            classNames.push("disabled");
        }
        return (
            <li className={classNames.join(" ")}><a className="page-link" href="#" onClick={this.handleClick}>{this.props.children}</a></li>
        );
    }
}