import React, {Component} from 'react';
import "../styles/Searchbar.css";
import "../styles/App.css";
import { BiSearchAlt } from 'react-icons/bi';

class Searchbar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            dropdown: props.dropdown
        }
    }

    displayDropdown = () => {
        if (this.state.dropdown) {
            return <Dropdown />;
        }
    }

    render = () => {
        return (
            <div className="centerContainer searchBarContainer">
                <div 
                    id={"searchBar"}
                    onClick={this.displayDropdown}
                > 
                    <div className="greyBackground">
                        <BiSearchAlt className="searchIcon" />
                    </div>
                    {this.state.dropdown}
                </div>
            </div>
        )
    }
}

export default Searchbar;