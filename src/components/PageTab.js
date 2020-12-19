import React, {Component} from 'react';
import "../styles/App.css";
import HomePage from "./HomePage"

class PageTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.page !== prevProps.page) {
            this.setState({
                page: this.props.page,
            });
        }
    }

    render = () => {
        console.log(this.state.page);
        if (this.state.page === "none") {
            return (null);
        } else if (this.state.page === "personal") {
            return <HomePage />;
        } else if (this.state.page === "projects") {
            // return <ProjectPage />;
        } else {
            // return <ContactPage />;
        }
    }
}

export default PageTab;