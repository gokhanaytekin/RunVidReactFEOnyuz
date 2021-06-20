import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Pictures Imports
import Settings from '../../assets/img/icons/settings.svg'

export default class SettingsMenu extends Component {
    render() {
        return (
            <div className="settings-left">
                            <div className="icon-title">
                                <img alt={"RunVid"} src={Settings} /> Genel Ayarlar
                            </div>
                            <div className="settings-menu">
                                <Link to="/systemsettings">
                                    <Link to="#" className={"settings-link " + (this.props.generalActive ? 'active' : '')}>
                                        <div className="settings-num">01</div>
                                        <span>General</span>
                                    </Link>
                                </Link>
                                <Link to="/systemsettings/language">
                                    <Link to="#" className={"settings-link " + (this.props.languageActive ? 'active' : '')}>
                                        <div className="settings-num">02</div>
                                        <span>Dil</span>
                                    </Link>
                                </Link>
                                <Link to="/systemsettings/location">
                                    <Link to="#" className={"settings-link " + (this.props.locationActive ? 'active' : '')}>
                                        <div className="settings-num">03</div>
                                        <span>Lokasyon Yönetimi</span>
                                    </Link>
                                </Link>
                                <Link to="/systemsettings/timezone">
                                    <Link to="#" className={"settings-link " + (this.props.timezoneActive ? 'active' : '')}>
                                        <div className="settings-num">04</div>
                                        <span>Timezone</span>
                                    </Link>
                                </Link>
                                <Link to="/systemsettings/email">
                                    <Link to="#" className={"settings-link " + (this.props.emailActive ? 'active' : '')}>
                                        <div className="settings-num">05</div>
                                        <span>Email Ayarları</span>
                                    </Link>
                                </Link>
                                <Link to="/systemsettings/sms">
                                    <Link to="#" className={"settings-link " + (this.props.smsActive ? 'active' : '')}>
                                        <div className="settings-num">06</div>
                                        <span>Sms Ayarları</span>
                                    </Link>
                                </Link>
                                <Link to="/systemsettings/money">
                                    <Link to="#" className={"settings-link " + (this.props.moneyActive ? 'active' : '')}>
                                        <div className="settings-num">07</div>
                                        <span>Para Birimi Ayarları</span>
                                    </Link>
                                </Link>
                                <Link to="/systemsettings/notification">
                                    <Link to="#" className={"settings-link " + (this.props.notificationActive ? 'active' : '')}>
                                        <div className="settings-num">08</div>
                                        <span>Bildirim Yönetimi</span>
                                    </Link>
                                </Link>
                            </div>
                        </div>
        )
    }
}
