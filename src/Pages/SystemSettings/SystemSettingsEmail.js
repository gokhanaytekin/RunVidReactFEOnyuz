import React, { Component } from 'react';
import {Link} from 'react-router-dom'

//Components Imports
import SystemSettingsLeftMenu from '../../Components/LeftMenus/SystemSettingsLeftMenu';
import { SystemEmail } from '../../Components/GeneralSettings/Box';

export default class SystemSettingsEmail extends Component {
    render() {
        return (      
            <main className="content">
            <div className="welcome">
                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <SystemSettingsLeftMenu  emailActive={true}/>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">05</span>
                                <span className="title">Email Ayarları</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="#" data-fancybox data-src="#add" data-modal={true} data-auto-focus={false}  className="btn btn-text-secondary btn-outline h-36">Save</Link> 
                            </div>
                        </div>
                        <SystemEmail />
                    </div>
                </div>
                {/* <!-- end #profile --> */}
            </div>
        </main>
        )
    }
}
