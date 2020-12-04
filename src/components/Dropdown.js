import React, {Component} from 'react';
import "../styles/App.css";
import "../styles/Dropdown.css";

class Dropdown extends React.Component {
    /**
     * What might be really cool: upon changing the display test, have it so
     * that the background color matches the original background color of the
     * dropdown. that involves changing the rule since there is no direct
     * way of changing the :hover pseudoclass.
     */
    displayPersonal = () => {
        var displayText = document.getElementById("displayText");
        displayText.innerText = "Who is Eric Zhou?";
    }

    displayProjects = () => {
        var displayText = document.getElementById("displayText");
        displayText.innerText = "What are his projects?";
    }

    displayContact = () => {
        var displayText = document.getElementById("displayText");
        displayText.innerText = "Contact Information?";
    }

    render = () => {
        return(
            <div id="dropdownContainer">
                <div onClick={this.displayPersonal} className="dropdownItem">
                    Who is Eric Zhou?
                </div>
                <div onClick={this.displayProjects} className="dropdownItem">
                    What are his projects?
                </div>
                <div onClick={this.displayContact} className="dropdownItem">
                    Contact Information?
                </div>
            </div>
        );
    }
}

export default Dropdown;