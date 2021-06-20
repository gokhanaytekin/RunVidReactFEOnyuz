import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Logo from '../assets/img/logo.svg';
import TRFlag from '../assets/img/icons/tr.svg';
import ENFlag from '../assets/img/icons/en.svg';
import GRFlag from '../assets/img/icons/gr.svg';
import Avatar from '../assets/img/avatar.svg';
import Chat from '../assets/img/icons/chat.svg';
import Notification from '../assets/img/icons/notification.svg';
import Home from '../assets/img/icons/home.svg';
import Star from '../assets/img/icons/star.svg';
import Play from '../assets/img/icons/play.svg';
import ArrowDown from '../assets/img/icons/arrow-down.svg';

export default class MobileMenu extends Component {
    render() {
        return (
            // <!-- mobile-menu -->
            <nav className="mobile-menu" role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span className="menuToggleSpan"></span>
                    <span className="menuToggleSpan"></span>
                    <span className="menuToggleSpan"></span>
                    <div className="menu-sidebar">
                        <div className="sidebar-header">
                            <Link to={"/apikeys"} className="logo">
                                <img alt={"RunVid"} src={Logo} />
                            </Link> 
                        </div>
                        <div className="header-right">

                            <div className="lang">
                                <Link to="#" className="lang-link dropdown">
                                    <img alt={"RunVid"} src={TRFlag} />
                                    <span>TR</span>
                                </Link> 
                                <div className="dropdown-menu">
                                    <div className="dropdown-menu-box">
                                        <Link to="#"> 
                                            <img alt={"RunVid"} src={ENFlag} />
                                            <span>EN</span>
                                        </Link> 
                                        <Link to="#"> 
                                            <img alt={"RunVid"} src={GRFlag} />
                                            <span>GR</span>
                                        </Link> 
                                    </div>
                                </div>
                            </div>
                            <Link to="#" className="chat-btn">
                                <img alt={"RunVid"} src={Chat} />
                            </Link> 
                            <Link to="#" className="notification-btn">
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
                        <nav className="navigation">
                            <ul className="top">
                                <li className="nav-link">
                                    <Link to={"/apikeys"} className="link">
                                        <span className="svg-icon">
                                            <img alt={"RunVid"} src={Home} />                                 
                                        </span>
                                        <span className="text">Dashboard</span>
                                    </Link> 
                                </li>
                                <li className="nav-link">
                                    <Link to={"/apikeys"} className="link">
                                        <span className="svg-icon">
                                            <img alt={"RunVid"} src={Star} />                                                                
                                        </span>
                                        <span className="text">Favorities</span>
                                    </Link> 
                                </li>
                                <li className="nav-link nav-sub-link videos">
                                    <div className="link">
                                        <span className="svg-icon">
                                            <img alt={"RunVid"} src={Play} />                                                     
                                        </span>
                                        <span className="text">Videos</span>
                                        <button data-v-3a895b50="" type="button" className="toggle btn-icon">
                                            <img alt={"RunVid"} src={ArrowDown} />
                                        </button>
                                        <div className="popup-menu">
                                            <div className="popup-content">
                                                <div className="indicator"></div>
                                                <div className="menu">
                                                    <div className="item">Favories</div>
                                                    <div className="item">Favories</div>
                                                    <div className="item">Favories</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="nav-sub">
                                        <li><Link to="#" className="link" >Favories</Link> </li>
                                        <li><Link to="#" className="link" >Favories</Link> </li>
                                        <li><Link to="#" className="link" >Favories</Link> </li>
                                    </ul>
                                </li>
                                <li className="nav-link nav-sub-link">
                                    <div className="link">
                                        <span className="svg-icon">
                                            <img alt={"RunVid"} src={Play} />                                                     
                                        </span>
                                        <span className="text">Videos</span>
                                        <button data-v-3a895b50="" type="button" className="toggle btn-icon">
                                            <img alt={"RunVid"} src={ArrowDown} />
                                        </button>
                                        <div className="popup-menu">
                                            <div className="popup-content">
                                                <div className="indicator"></div>
                                                <div className="menu">
                                                    <div className="item">Favories</div>
                                                    <div className="item">Favories</div>
                                                    <div className="item">Favories</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="nav-sub">
                                        <li><Link to="#" className="link" >Favories</Link> </li>
                                        <li><Link to="#" className="link" >Favories</Link> </li>
                                        <li><Link to="#" className="link" >Favories</Link> </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div className="sidebar-footer">
                            <div className="band">
                                <div className="progress-item">
                                    <div className="progress-top">
                                        <div className="progress-name">Bandwith</div>
                                        <div className="progress-right">
                                            <span>504 GB</span> of 1 TB
                                        </div>
                                    </div>
                                    <div className="progress-box">
                                        <div className="progress-num left-30y" >
                                            <p>30%</p>
                                        </div>
                                        <span className={"w-30y"} ></span>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <div className="progress-top">
                                        <div className="progress-name">Storage Used</div>
                                        <div className="progress-right">
                                            <span>504 GB</span> of 1 TB
                                        </div>
                                    </div>
                                    <div className="progress-box">
                                        <div className="progress-num left-60y" >
                                            <p>60%</p>
                                        </div>
                                        <span className={"w-60y"} ></span>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <div className="progress-top">
                                        <div className="progress-name">Valid upto</div>
                                        <div className="progress-right">
                                            <Link to="#"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14.063" height="14.072" viewBox="0 0 14.063 14.072">
                                                    <path id="Icon_material-refresh" data-name="Icon material-refresh" d="M18.011,8.067a7.037,7.037,0,1,0,1.829,6.728H18.011a5.274,5.274,0,1,1-4.969-7.036,5.2,5.2,0,0,1,3.711,1.566l-2.832,2.832h6.156V6Z" transform="translate(-6.015 -6)" fill="#c40007"></path>
                                                </svg>
                                            </Link> 
                                            15:00 04.09.2021
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            // {/* <!-- end #mobile-menu --> */}
        )
    }
}
