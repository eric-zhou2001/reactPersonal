import React, {Component} from 'react';
import "../styles/App.css";
import "../styles/HomePage.css";
import profile from "../resources/profile.jpg";
import jonahEmmaAugust from "../resources/augustjonahemma.jpg"
import madison from "../resources/madison.jpg";
import olive from "../resources/olive.png";
import owen from "../resources/owen.jpg";
import solo from "../resources/solo.png";
import sofachilling from "../resources/sofachilling.jpg";
import studydog from "../resources/studydog.jpg";
import aasu from "../resources/aasu.jpg";

export default class HomePage extends Component {
    render = () => {
        return (
        <div className="pageContainer homePageBackground">
            <h1 className="information">Who is Eric Zhou?</h1>
            <img id="profile" src={profile} alt="Profile of Eric Zhou in St. Louis"/>
            <p className="information" id="intro">
            My name is <strong>Eric Zhou</strong>, and I am a sophomore majoring in Computer Science at the <strong>University of Wisconsin-Madison</strong>. I graduated from the Commonwealth School, located in Boston, Massachusetts. I grew up in Lexington, Massachusetts (yes, the one from the Battle of Lexington and Concord!).
            Along with schoolwork, I have taken part in research (The Gilroy Lab), project teams (Coding For Good), and have taught introductory coding classes (Software Training for Students). I'm interested in learning about <strong>bioinformatics</strong>, <strong>web-development and design</strong>,
            and <strong>databases</strong>.
            In my spare time, I enjoy playing video games, hanging out with friends and family, and going on runs/hikes.
            </p>
            <p className="subtextProfile information">My girlfriend Sophia Weil and me, on WashU campus.</p>
            <h1 className="information">Here are some photos of Eric and friends!</h1>
            <div className="gridHomepage">
                <img className="gridPhoto" src={jonahEmmaAugust} alt="2019, Christmas Ginger Bread House Decorating"></img>
                <img className="gridPhoto" src={madison} alt="2019 Fall, Sophia and Eric"></img>
                <img className="gridPhoto" src={olive} alt="Olive, one of my two favorite dogs. Golden doodle."></img>
                <img className="gridPhoto" src={owen} alt="Owen, my other favorite dog. Golden doodle. They are both awesome! :)"></img>
                <img className="gridPhoto" src={solo} alt="Just me."></img>
                <img className="gridPhoto" src={aasu} alt="AASU squad!"></img>
                <img className="gridPhoto" src={sofachilling} alt="Sitting on Sofas!"></img>
                <img className="gridPhoto" src={studydog} alt="Studious Puppo"></img>
            </div>
        </div>
        )
    }
}