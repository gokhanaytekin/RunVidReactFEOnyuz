import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class GeneralSettingsLeftMenu extends Component {
    render() {
        return (
            <div className="settings-left">
                <div className="icon-title">
                    Web Site Ayarları
                </div>
                <div className="settings-menu">
                    <Link to="/generalsettings/general">
                        <Link to="#" className={"settings-link " + (this.props.generalActive ? 'active' : '')}>
                            <div className="settings-num">01</div>
                            <span>General</span>
                        </Link>
                    </Link>
                    <Link to="/generalsettings/about">
                        <Link to="#" className={"settings-link " + (this.props.aboutActive ? 'active' : '')}>
                            <div className="settings-num">02</div>
                            <span>Hakkımızda</span>
                        </Link>
                    </Link>
                    <Link to="/generalsettings/cookie">
                        <Link to="#" className={"settings-link " + (this.props.cookieActive ? 'active' : '')}>
                            <div className="settings-num">03</div>
                            <span>Çerez Politikası</span>
                        </Link>
                    </Link>
                    <Link to="/generalsettings/faq">
                        <Link to="#" className={"settings-link " + (this.props.faqActive ? 'active' : '')}>
                            <div className="settings-num">04</div>
                            <span>SSS</span>
                        </Link>
                    </Link>
                    <Link to="/generalsettings/slider">
                        <Link to="#" className={"settings-link " + (this.props.sliderActive ? 'active' : '')}>
                            <div className="settings-num">05</div>
                            <span>Slider Yönetimi</span>
                        </Link>
                    </Link>
                    <Link to="/generalsettings/blog">
                        <Link to="#" className={"settings-link " + (this.props.blogActive ? 'active' : '')}>
                            <div className="settings-num">06</div>
                            <span>Blog</span>
                        </Link>
                    </Link>
                    <Link to="/generalsettings/extra">
                        <Link to="#" className={"settings-link " + (this.props.extraActive ? 'active' : '')}>
                            <div className="settings-num">07</div>
                            <span>Extra Sayfalar</span>
                        </Link>
                    </Link>
                    <Link to="/generalsettings/footer">
                        <Link to="#" className={"settings-link " + (this.props.footerActive ? 'active' : '')}>
                            <div className="settings-num">08</div>
                            <span>Footer Dizayn</span>
                        </Link>
                    </Link>
                    <Link to="/generalsettings/solution">
                        <Link to="#" className={"settings-link " + (this.props.solutionActive ? 'active' : '')}>
                            <div className="settings-num">09</div>
                            <span>Çözüm Ortakları</span>
                        </Link>
                    </Link>
                    <Link to="/generalsettings/how">
                        <Link to="#" className={"settings-link " + (this.props.howActive ? 'active' : '')}>
                            <div className="settings-num">10</div>
                            <span>Nasıl Çalışır</span>
                        </Link>
                    </Link>
                    <Link to="/generalsettings/usercomment">
                        <Link to="#" className={"settings-link " + (this.props.userCommentActive ? 'active' : '')}>
                            <div className="settings-num">11</div>
                            <span>Kullanıcı Yorumları</span>
                        </Link>
                    </Link>
                    <Link to="/generalsettings/popup">
                        <Link to="#" className={"settings-link " + (this.props.popupActive ? 'active' : '')}>
                            <div className="settings-num">12</div>
                            <span>Popup Yönetemi</span>
                        </Link>
                    </Link>
                </div>
            </div>
        )
    }
}
