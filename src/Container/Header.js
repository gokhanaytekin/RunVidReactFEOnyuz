import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import i18n from "i18next";

//Icons Imports
import Search from '../assets/img/icons/search.svg';
import TRL from '../assets/img/icons/tr.svg';
import ENL from '../assets/img/icons/en.svg';
import GRL from '../assets/img/icons/gr.svg';
import Avatar from '../assets/img/avatar.svg';
import Chat from '../assets/img/icons/chat-blue.svg';
import Notification from '../assets/img/icons/notification-white.svg';

export default class Header extends Component {
    state = {
        languageDD: false,
        choosedLanguage: 'tr'
    }
    changeLanguage = (e) => {
        console.log(e.target.id)
        i18n.changeLanguage(e.target.id);
    }
    render() {
        return (
            <header className="header">
                <form id="header-search">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                        <img alt={"RunVid"} src={Search} />
                    </button>
                </form>
                <div className="header-right">

                    <div className="lang">
                        <Link to="#" onClick={() => {
                            this.setState({
                               languageDD: !this.state.languageDD 
                            })
                        }} className="lang-link dropdown">
                            <img alt={"RunVid"} src={TRL} />
                            <span>TR</span>
                        </Link> 
                        <div className="dropdown-menu">
                            { this.state.languageDD ? <div className="dropdown-menu-box">
                                <Link id="tr" onClick={(e) => this.changeLanguage(e)} to="#"> 
                                    <img id="tr" onClick={(e) => this.changeLanguage(e)} alt={"RunVid"} src={TRL} />
                                    <span id="tr" onClick={(e) => this.changeLanguage(e)}>TR</span>
                                </Link> 
                                <Link id="en" onClick={(e) => this.changeLanguage(e)} to="#"> 
                                    <img id="en" onClick={(e) => this.changeLanguage(e)} alt={"RunVid"} src={ENL} />
                                    <span id="en" onClick={(e) => this.changeLanguage(e)}>EN</span>
                                </Link>
                                <Link id="gr" onClick={(e) => this.changeLanguage(e)} to="#"> 
                                    <img id="gr" onClick={(e) => this.changeLanguage(e)} alt={"RunVid"} src={GRL} />
                                    <span id="gr" onClick={(e) => this.changeLanguage(e)}>GR</span>
                                </Link> 
                            </div> : null }
                        </div>
                    </div>
                    <Link to = {"/mail"} className="chat-btn">
                        <img alt={"RunVid"} src={Chat} />
                    </Link> 
                    <Link to={"/systemsettings/notification"} className="notification-btn">
                        <img alt={"RunVid"} src={Notification} />
                        <div className="on-notification"></div>
                    </Link> 
                    <Link to="#" className="header-user">
                        <img alt={"RunVid"} src={Avatar} />
                        <div className="header-user-name">
                            <span className="name-surname">Veysel Akbulut</span>
                            <span className="total-text">5GB Total Video</span>
                        </div>
                    </Link> 
                </div>
            </header>
        )
    }
}
