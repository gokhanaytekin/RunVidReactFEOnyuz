import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import SystemSettingsLeftMenu from '../../Components/LeftMenus/SystemSettingsLeftMenu';

export default class SystemSettingsSms extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <SystemSettingsLeftMenu smsActive={true} />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">06</span>
                                <span className="title">Sms Ayarları</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="#" data-fancybox data-src="#add" data-modal={true} data-auto-focus={false}  className="btn btn-text-secondary btn-outline h-36">Save</Link> 
                            </div>
                        </div>
                        <div className="box">

                        </div>
                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
