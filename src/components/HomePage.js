import React, {Component} from 'react';
import "../styles/App.css";
import "../styles/HomePage.css";
import profile from "../resources/profile.jpg";

export default class HomePage extends Component {
    render = () => {
        return (
        <div className="pageContainer homePageBackground">
            <img id="profile" src={profile} alt="Profile of Eric Zhou in St. Louis"/>
            <p className="subtextProfile information">My girlfriend Sophia Weil and me, on WashU campus.</p>
            <p className="information">
            My name is <strong>Eric Zhou</strong>, and I am a sophomore majoring in Computer Science at the <strong>University of Wisconsin-Madison</strong>. I graduated from the Commonwealth School, located in Boston, Massachusetts. I grew up in Lexington, Massachusetts (yes, the one from the Battle of Lexington and Concord!).
            Along with schoolwork, I have taken part in research (The Gilroy Lab), project teams (Coding For Good), and have taught introductory coding classes (Software Training for Students). I'm interested in learning about <strong>bioinformatics</strong>, <strong>web-development and design</strong>,
            and <strong>databases</strong>.
            In my spare time, I enjoy playing video games, hanging out with friends and family, and going on runs/hikes.
            </p>
        </div>
        )
    }
}