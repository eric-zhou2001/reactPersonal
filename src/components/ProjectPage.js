import React, {Component} from 'react';
import "../styles/App.css";
import "../styles/ProjectPage.css";
import Pytutor from "../resources/Pytutor.svg";
import personal from "../resources/personalwebsite.png";
import banvas from "../resources/Banvas.png";

export default class ProjectPage extends Component {
    render = () => {

        return (
            <div className="pageContainer" id="projectPageContainerBackground">
                <h1>Projects?</h1>
                <div className="projectContainer">
                    <h2 className="projectHeader">Pytutor</h2>
                    <div className="projGridItemInfo">
                        <a href="https://github.com/sjain75/pytutor"><img className="projItem" src={Pytutor} alt="Pytutor, an Interactive Homework Submission Interface"></img></a>
                        <p className="projInfo">
                            <strong>Pytutor</strong> is an interactive homework submission interface, aiming to provide professor's a detailed insight onto concepts that are troubling.
                            Pytutor provides trace and explain questions for the user, teaching students how to read basic Python control flow. These worksheets can be generated easily 
                            using a PIP package that is being developed. Pytutor is also developing a forum for students to post interactive trace examples to help explain their questions 
                            and answers. Built using <strong>Python</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and other technologies. Click on the logo for the GitHub, and <strong><a href="http://pytutor.ddns.net/">here</a> </strong>
                             for the website Pytutor. This project has been used for CS 220, Introduction to Python Programming I, at the University of Wisconsin-Madison. Ongoing development for a browser
                             based UI built in <strong>Django</strong> to allow for worksheet creation in a more intuitive sense.
                        </p>
                    </div>

                    <h2 className="projectHeader">React Personal Website</h2>
                    <div className="projGridInfoItem">
                        <p className="projInfo">
                            Over the Summer of 2020, I wanted to learn more about Web Development and Design. I initially built this website in native HTML and CSS, but I wanted to add some JavaScript
                            and interactivity to it. This <strong>React</strong> Page was built over Fall Semester 2020, and is still in development. I aim to learn more about the powers of React and CSS animations to add
                            more interactivity and sleekness to this website.
                        </p>
                        <a href="https://github.com/eric-zhou2001/reactPersonal"><img className="projItem" src={personal} alt="Personal Website, which you are viewing now..."></img></a>
                    </div>

                    <h2 className="projectHeader">Course Dependency Tracker</h2>
                    <div className="projGridItemInfo">
                        <a href="https://github.com/FranklinWang2001/Course-Dependencies-Tracker"><img className="projItem" src={banvas} alt="Course Dependency Photo"></img></a>
                        <p className="projInfo" style={{marginTop: -8}}>
                            Built as the final project for Data Structures and Algorithms II (CS400) at the University of Wisconsin-Madison, the Course Dependency Tracker (CDT) was built entirely in
                             <strong>Java</strong>, including frameworks like <strong>JavaFX</strong> and testers like <strong>JUnit</strong>. CDT helps users plan out their degree plans, letting users
                            input courses that they have previously taken to see if it fulfills their graduation requirement. CDT also helps users see if what prerequisites are needed for higher up classes,
                            something that the course catalog at Madison lacked. Each degree is stored within a hash table for efficient access, and each degree is an individual graph that the user can
                            call certain methods on (Prims, DepthFirstSearch, Djikstra). Thorough testing is included using JUnit. Click on the photo for more information.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}