import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import Avatar from '../assets/img/avatar.svg';
import Avatar2 from '../assets/img/avatar2.svg';

class ManagerListItem extends Component {
    render() {
        const  {t} = this.props
        return (
            <div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="manager-list-item">
                        <div className="manager-select">
                            <input type="radio" className="input" id="manager" name="manager" />
                            <label htmlFor="manager" className="label"></label>
                        </div>
                        <div className="manager-list-item-top">
                            <div className="manager-role-name">
                                <span className="role-name">{t('managerListItemRoleName')}</span>
                                <span className="role-name-text">System Manager</span>
                            </div>
                            <div className="manager-list-user">
                                <div className="manager-list-user-list">
                                    <span className="user-text">{t('tablesUser')}</span>
                                    <div className="user-items-content">
                                        <div className="user-items">
                                            <Link to="#" className="image">
                                                <img alt={"RunVid"} src={Avatar} className="img-30" />
                                            </Link>
                                            <Link to="#" className="image">
                                                <img alt={"RunVid"} src={Avatar2} className="img-30" />
                                            </Link>
                                            <Link to="#" className="image">
                                                <img alt={"RunVid"} src={Avatar} className="img-30" />
                                            </Link>
                                            <Link to="#" className="image">
                                                <img alt={"RunVid"} src={Avatar2} className="img-30" />
                                            </Link>
                                            <Link to="#" className="image">
                                                <img alt={"RunVid"} src={Avatar} className="img-30" />
                                            </Link>
                                            <Link to="#" className="image">
                                                <img alt={"RunVid"} src={Avatar2} className="img-30" />
                                            </Link>
                                            <Link to="#" className="image">
                                                <img alt={"RunVid"} src={Avatar} className="img-30" />
                                            </Link>
                                            <Link to="#" className="image">
                                                <img alt={"RunVid"} src={Avatar2} className="img-30" />
                                            </Link>
                                        </div>
                                        <div className="user-item-text">
                                            +255
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="manager-list-item-bottom">
                            <div className="used-page">
                                <span className="used-page-title">{t('managerListItemUsedPage')}</span>
                                <span className="user-page-text">12 {t('managerListItemPage')}</span>
                            </div>
                            <div className="manager-buttons">
                                <Link to="#" className="btn btn-primary">{t('managerListItemEdit')}</Link>
                                <Link to="#" className="btn btn-dark">{t('managerListItemAddUser')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(ManagerListItem);