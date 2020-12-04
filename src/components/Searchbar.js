import React, {Component} from 'react';
import "../styles/Searchbar.css";
import "../styles/App.css";
import Dropdown from "./Dropdown";
import { BiSearchAlt } from 'react-icons/bi';

class Searchbar extends React.Component {
    constructor(props) {
        super();
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
        console.log(query);
        if (query === "Who is Eric Zhou?") {
            // Handle display personal information/page.
        } else if (query === "What are his projects?") {
            // Handle display project page/components.
        } else {
            // Handle contact information page.
        }
    }

    render = () => {
        return (
            <div className="centerContainer searchBarContainer">
                <div 
                    id={"searchBar"}
                    onClick={this.displayHideDropdown}
                >
                    <div id="displayText"></div>
                    <div onClick={this.handleSearch} className="greyBackground">
                        <BiSearchAlt className="searchIcon" />
                    </div>
                </div>
                <Dropdown />
            </div>
        )
    }
}

export default Searchbar;