import React, { Component } from 'react';
import {Link} from 'react-router-dom'

//Components Imports
import SystemSettingsLeftMenu from '../../Components/LeftMenus/SystemSettingsLeftMenu';
import { SystemGeneralDefault, SystemGeneralLanguage } from '../../Components/GeneralSettings/Box';

export default class GeneralSettings extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <SystemSettingsLeftMenu generalActive={true} />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">01</span>
                                <span className="title">General</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="#" className="btn btn-text-secondary btn-outline h-36 mr-10">Save</Link> 
                                <Link to="#" className="btn btn-secondary h-36">Save And Continue</Link> 
                            </div>
                        </div>
                        <SystemGeneralDefault />
                        <SystemGeneralLanguage />
                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
