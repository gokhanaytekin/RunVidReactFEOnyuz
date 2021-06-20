import React, { Component } from 'react';
import {Link} from 'react-router-dom'

//Components Imports
import GeneralSettingsLeftMenu from '../../Components/LeftMenus/GeneralSettingsLeftMenu';

import { GeneralDefault, GeneralContact, GeneralSocial } from '../..//Components/GeneralSettings/Box';

export default class GeneralSettingsGeneral extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <GeneralSettingsLeftMenu generalActive={true} />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
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
                        <GeneralDefault />
                        <GeneralContact />
                        <GeneralSocial />
                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
