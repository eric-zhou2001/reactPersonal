import React, {Component} from 'react';
import "../styles/App.css";
import "../styles/ContactPage.css";
import {AiOutlineMail} from "react-icons/ai";
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineFilePdf} from 'react-icons/ai';

export default class ContactPage extends Component {
    render() {
        return (
            <div className="pageContainer" id="contactPageContainerBackground">
                <h1>Email</h1>
                <div className="email centerContainer">
                    <AiOutlineMail size={70}/>
                    <p className="contactInfo">ericzhzhou2001@gmail.com, ezhou22@wisc.edu</p>
                </div>

                <h1>GitHub</h1>
                <div className="github centerContainer">
                    <AiFillGithub size={70} />
                    <a href="https://github.com/eric-zhou2001"><p className="contactInfo">https://github.com/eric-zhou2001</p></a>
                </div>

                <h1>Résumé</h1>
                <div className="résumé centerContainer">
                    <AiOutlineFilePdf size={70} />
                    <a href="../pages/Resume_CV Web - Eric Zhou.pdf"><p className="contactInfo">Résumé</p></a>
                </div>
            </div>
        )
    }
}