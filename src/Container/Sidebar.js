import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//SVG Imports
import logo from '../assets/img/logo.svg';
import burger from '../assets/img/icons/burger.svg';
import downarrow from '../assets/img/icons/arrow-down.svg';
import play from '../assets/img/icons/play-blue.svg';
import bluehome from '../assets/img/icons/home-blue.svg';

const pages = [
    {keyT: 1, name: 'Apikeys', path: '/apikeys', icon: bluehome},
    {keyT: 2, name: 'Changelog', path: '/changelog', icon: bluehome},
    {keyT: 3, name: 'Customer Comments', path: '/customercomments', icon: bluehome},
    {keyT: 4, name: 'Contact Form', path: '/contactform', icon: bluehome},
    {keyT: 5, name: 'Depart Mantmanager', path: '/departmantmanager', icon: bluehome},
    {keyT: 6, name: 'Help Management', path: '/helpmanagement', icon: bluehome},
    {keyT: 7, name: 'Language', path: '/language', icon: bluehome},
    {keyT: 8, name: 'Langauge Management', path: '/language/management', icon: bluehome},
    {keyT: 9, name: 'Log', path: '/log', icon: bluehome},
    {keyT: 10, name: 'Mail', path: '/mail', icon: bluehome},
    {keyT: 11, name: 'Member Management', path: '/membermanagement', icon: bluehome},
    {keyT: 12, name: 'Menu List', path: '/menulist', icon: bluehome},
    {keyT: 13, name: 'Price Plans', path: '/priceplans', icon: bluehome},
    {keyT: 14, name: 'Profile', path: '/profile', icon: bluehome},
    {keyT: 15, name: 'Promotions', path: '/promotions', icon: bluehome},
    {keyT: 16, name: 'Reports', path: '/reports', icon: bluehome},
    {keyT: 17, name: 'System Features', path: '/systemfeatures', icon: bluehome},
    {keyT: 18, name: 'Ticket', path: '/ticket', icon: bluehome},
    {keyT: 19, name: 'Timezone', path: '/timezone', icon: bluehome},
    {keyT: 20, name: 'Transaction History', path: '/transactionhistory', icon: bluehome},
    {keyT: 21, name: 'User List', path: '/userlists', icon: bluehome},
]

function Pages(props) {
    return(
        props.pages.map((res) =>
        <Link key={res.keyT} to={res.path}><li className="nav-link">
            <Link to={res.path} className="link">
                 <span className="svg-icon">
                    <img alt={"RunVid"}  src={res.icon} />                                
                </span>
                { props.ham ? <span  className="text">{res.name}</span> : null}
            </Link> 
        </li></Link>
        )
    )
}

export default class Sidebar extends Component {
    state = {
        generalSettingsOpen: false,
        systemSettingsOpen: false,
        videoOpen: false,
        videosOpen: false,
        ham: true
    }
    menu = (e) => {
        if(e.target.id === "GeneralSettings") {
            if(this.state.generalSettingsOpen) {
                this.setState({
                    generalSettingsOpen: false
                })
                console.log(this.state.generalSettingsOpen);
            }
            if(!this.state.generalSettingsOpen) {
                this.setState({
                    generalSettingsOpen: true
                })
            }
        }
        if(e.target.id === "SystemSettings") {
            if(this.state.systemSettingsOpen) {
                this.setState({
                    systemSettingsOpen: false
                })
            }
            if(!this.state.systemSettingsOpen) {
                this.setState({
                    systemSettingsOpen: true
                })
            }
        }
        if(e.target.id === "Video") {
            if(this.state.videoOpen) {
                this.setState({
                    videoOpen: false
                })
            }
            if(!this.state.videoOpen) {
                this.setState({
                    videoOpen: true
                })
            }
        }
        if(e.target.id === "Videos") {
            if(this.state.videosOpen) {
                this.setState({
                    videosOpen: false
                })
            }
            if(!this.state.videosOpen) {
                this.setState({
                    videosOpen: true
                })
            }
        }
    }
    render() {
        return (
                <div style={{width: (this.state.ham ? 280 : 80 ) }} className="sidebar">
                    <div className="sidebar-header">
                        { this.state.ham ?<Link to="#" className="logo">
                            <img alt={"RunVid"} src={logo} />
                        </Link> : null }
                        <Link to="#" className="burger-icon">
                            <img onClick={() => { this.setState({ ham: !this.state.ham }) }} alt={"RunVid"} src={burger} />
                        </Link> 
                    </div>
                    <nav className="navigation">
                        <ul className="top">
                        <li className="nav-link nav-sub-link">
                                <div className="link">
                                    <span onClick={(e) => this.menu(e)} id={"GeneralSettings"} className="svg-icon">
                                        <img alt={"RunVid"} src={play} id={"GeneralSettings"} />                                                    
                                    </span>
                                    { this.state.ham ? <span onClick={(e) => this.menu(e)} id={"GeneralSettings"} className="text">General Settings</span> : null}
                                    { this.state.ham ? <button data-v-3a895b50="" className="toggle btn-icon"><img alt={"RunVid"} src={downarrow} onClick={(e) => this.menu(e)} id={"GeneralSettings"} /></button>: null}
                                    { this.state.ham ? <div className="popup-menu">
                                        <div className="popup-content">
                                            <div className="indicator"></div>
                                            <div className="menu">
                                                <div className="item">Favories</div>
                                                <div className="item">Favories</div>
                                                <div className="item">Favories</div>
                                            </div>
                                        </div>
                                    </div>: null}
                                </div>
                                {this.state.generalSettingsOpen ? 
                                <ul className="nav-sub" >
                                    <Link to={'/generalsettings/general'} className="link"><li>General</li></Link>
                                    <Link to={'/generalsettings/about'} className="link"><li>Hakkımızda</li></Link>
                                    <Link to={'/generalsettings/blog'} className="link"><li>Blog</li></Link>
                                    <Link to={'/generalsettings/extra'} className="link"><li>Extra Sayfalar</li></Link>
                                    <Link to={'/generalsettings/faq'} className="link"><li>SSS</li></Link>
                                    <Link to={'/generalsettings/footer'} className="link"><li>Footer Dizayn</li></Link>
                                    <Link to={'/generalsettings/how'} className="link"><li>Nasıl Çalışır?</li></Link>
                                    <Link to={'/generalsettings/slider'} className="link"><li>Slider Yönetimi</li></Link>
                                    <Link to={'/generalsettings/usercomment'} className="link"><li>Kullanıcı Yorumları</li></Link>
                                    <Link to={'/generalsettings/solution'} className="link"><li>Çözüm Ortakları</li></Link>
                                </ul>
                                : null}
                            </li>
                            <li className="nav-link nav-sub-link">
                                <div className="link">
                                    <span className="svg-icon">
                                        <img alt={"RunVid"} src={play} onClick={(e) => this.menu(e)} id={"SystemSettings"} />                                                    
                                    </span>
                                    { this.state.ham ? <span onClick={(e) => this.menu(e)} id={"SystemSettings"} className="text">System Settings</span>: null}
                                    { this.state.ham ? <button data-v-3a895b50="" className="toggle btn-icon"><img alt={"RunVid"} src={downarrow} onClick={(e) => this.menu(e)} id={"SystemSettings"} /></button>: null}
                                    { this.state.ham ? <div className="popup-menu">
                                        <div className="popup-content">
                                            <div className="indicator"></div>
                                            <div className="menu">
                                                <div className="item">Favories</div>
                                                <div className="item">Favories</div>
                                                <div className="item">Favories</div>
                                            </div>
                                        </div>
                                    </div>: null}
                                </div>
                                {this.state.systemSettingsOpen ? 
                                <ul className="nav-sub" >
                                    <Link to={'/systemsettings/general'} className="link"><li>General</li></Link>
                                    <Link to={'/systemsettings/language'} className="link"><li>Dil</li></Link>
                                    <Link to={'/systemsettings/location'} className="link"><li>Lokasyon Yönetimi</li></Link>
                                    <Link to={'/systemsettings/timezone'} className="link"><li>Timezone</li></Link>
                                    <Link to={'/systemsettings/email'} className="link"><li>E-Mail Ayarları</li></Link>
                                    <Link to={'/systemsettings/sms'} className="link"><li>SMS Ayarları</li></Link>
                                    <Link to={'/systemsettings/money'} className="link"><li>Para Birimi Ayarları</li></Link>
                                    <Link to={'/systemsettings/notification'} className="link"><li>Bildirim Yönetimi</li></Link>
                                </ul>
                                : null}
                            </li>
                            <li className="nav-link nav-sub-link">
                                <div className="link">
                                    <span className="svg-icon">
                                        <img alt={"RunVid"} src={play} onClick={(e) => this.menu(e)} id={"Video"} />                                                    
                                    </span>
                                    { this.state.ham ? <span onClick={(e) => this.menu(e)} id={"Video"} className="text">Video</span>: null}
                                    { this.state.ham ? <button data-v-3a895b50="" className="toggle btn-icon"><img alt={"RunVid"} src={downarrow} onClick={(e) => this.menu(e)} id={"Video"} /></button>: null}
                                    { this.state.ham ? <div className="popup-menu">
                                        <div className="popup-content">
                                            <div className="indicator"></div>
                                            <div className="menu">
                                                <div className="item">Favories</div>
                                                <div className="item">Favories</div>
                                                <div className="item">Favories</div>
                                            </div>
                                        </div>
                                    </div>: null}
                                </div>
                                {this.state.videoOpen ? 
                                <ul className="nav-sub" >
                                    <Link to={'/video/details'} className="link"><li>Details</li></Link>
                                    <Link to={'/video/promotions'} className="link"><li>Promotions</li></Link>
                                    <Link to={'/video/publish'} className="link"><li>Publish</li></Link>
                                    <Link to={'/video/upload'} className="link"><li>Upload</li></Link>
                                    <Link to={'/video/videos'} className="link"><li>Videos</li></Link>
                                </ul>
                                : null}
                            </li>
                            <li className="nav-link nav-sub-link">
                                <div className="link">
                                    <span className="svg-icon">
                                        <img alt={"RunVid"} src={play} onClick={(e) => this.menu(e)} id={"Videos"} />                                                    
                                    </span>
                                    { this.state.ham ?<span onClick={(e) => this.menu(e)} id={"Videos"} className="text">Videos</span>: null}
                                    { this.state.ham ?<button data-v-3a895b50="" className="toggle btn-icon"><img alt={"RunVid"} src={downarrow} onClick={(e) => this.menu(e)} id={"Videos"} /></button>: null}
                                    { this.state.ham ?<div className="popup-menu">
                                        <div className="popup-content">
                                            <div className="indicator"></div>
                                            <div className="menu">
                                                <div className="item">Favories</div>
                                                <div className="item">Favories</div>
                                                <div className="item">Favories</div>
                                            </div>
                                        </div>
                                    </div>: null}
                                </div>
                                {this.state.videosOpen ? 
                                <ul className="nav-sub" >
                                    <Link to={'/videos/drive/first'} className="link"><li>Videos Rive 1</li></Link>
                                    <Link to={'/videos/drive/second'} className="link"><li>Videos Drive 2</li></Link>
                                    <Link to={'/videos/drive/details'} className="link"><li>Drive Details</li></Link>
                                    <Link to={'/videos/upload'} className="link"><li>Upload</li></Link>
                                </ul>
                                : null}
                            </li>
                            
                            <Pages ham={this.state.ham} pages={pages} />
                        </ul>
                    </nav>
                    <div className="sidebar-footer">
                        { this.state.ham ? <div className="band">
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
                                                <path id="Icon_material-refresh" data-name="Icon material-refresh" d="M18.011,8.067a7.037,7.037,0,1,0,1.829,6.728H18.011a5.274,5.274,0,1,1-4.969-7.036,5.2,5.2,0,0,1,3.711,1.566l-2.832,2.832h6.156V6Z" transform="translate(-6.015 -6)" fill="#c40007"/>
                                            </svg>
                                        </Link> 
                                        15:00 04.09.2021
                                    </div>
                                </div>
                            </div>
                        </div> : null}
                    </div>
                </div>
        )
    }
}
