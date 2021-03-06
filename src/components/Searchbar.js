import React, {Component} from 'react';
import "../styles/Searchbar.css";
import "../styles/App.css";
import Dropdown from "./Dropdown";
import { BiSearchAlt } from 'react-icons/bi';
import PageTab from "./PageTab";

class Searchbar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            page: "personal",
        }
    }

    displayHideDropdown = () => {
        var dropdown = document.getElementById('dropdownContainer');
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    }


    handleSearch = () => {
        var query = document.getElementById("displayText").innerText;
        if (query === "Who is Eric Zhou?") {
            this.setState({
                page: "personal"
            });
        } else if (query === "What are his projects?") {
            this.setState({
                page: "projects"
            });
        } else if (query === "Contact Information?") {
            this.setState({
                page: "contacts"
            });
        } else {
            this.setState(this.state);
        }
    }

    render = () => {
        return (
            <div className="centerContainer searchBarContainer">
                <div 
                    id={"searchBar"}
                    onClick={this.displayHideDropdown}
                >
                    <div id="displayText">Click on me...</div>
                    <div onClick={this.handleSearch} className="greyBackground">
                        <BiSearchAlt className="searchIcon" />
                    </div>
                </div>
                <Dropdown handleSearch={this.handleSearch}/>
                <PageTab page={this.state.page} />
            </div>
        )
    }
}

export default Searchbar;