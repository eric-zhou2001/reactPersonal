import React, {Component} from 'react';
import "../styles/App.css";
import "../styles/HomePage.css";
import DogPage from "./DogPage";
import profile from "../resources/profile.jpg";
import jonahEmmaAugust from "../resources/augustjonahemma.jpg"
import madison from "../resources/madison.jpg";
import olive from "../resources/olive.png";
import owen from "../resources/owen.jpg";
import solo from "../resources/solo.png";
import sofachilling from "../resources/sofachilling.jpg";
import studydog from "../resources/studydog.jpg";
import aasu from "../resources/aasu.jpg";
import stlouis from "../resources/stlouis.jpg";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: false
        }
    }
    
    displayDogs = () => {
        if (this.state.dogs) {
            this.setState({
                dogs: false
            });
            document.getElementsByClassName("homePageBackground")[0].style.height = "1700px";
        } else {
            this.setState({
                dogs: true
            });
            document.getElementsByClassName("homePageBackground")[0].style.height = "4600px";
        }
    }

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
            <h1 className="information">More Photos!</h1>
            <div className="gridHomepage1">
                <img className="gridPhoto" src={jonahEmmaAugust} alt="2019, Christmas Ginger Bread House Decorating"></img>
                <img className="gridPhoto" src={madison} alt="2019 Fall, Sophia and Eric"></img>
                <img className="gridPhoto" src={olive} alt="Olive, one of my two favorite dogs. Golden doodle."></img>
            </div>
            <div className="gridHomepage2">
                <img className="gridPhoto" src={owen} alt="Owen, my other favorite dog. Golden doodle. They are both awesome! :)"></img>
                <img className="gridPhoto" src={solo} alt="Just me."></img>
            </div>
            <div className="gridHomepage1">
                <img className="gridPhoto" src={sofachilling} alt="Sitting on Sofas!"></img>
                <div className="twoPhotoItem">
                    <img className="gridPhotoLayer" onClick={this.displayDogs} src={aasu} alt="AASU squad!"></img>
                    <img className="gridPhotoLayer" src={stlouis} alt="Friends in St. Louis!"></img>
                </div>
                <img className="gridPhoto" src={studydog} alt="Studious Puppo"></img>
            </div>
            {this.state.dogs && <DogPage />}
        </div>
        )
    }
}