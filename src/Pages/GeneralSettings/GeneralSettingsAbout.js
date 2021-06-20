import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import GeneralSettingsLeftMenu from '../../Components/LeftMenus/GeneralSettingsLeftMenu';
import LanguageSettings from '../../Components/GeneralSettings/LanguageSettings';
import { About } from '../../Components/GeneralSettings/Box';

export default class GeneralSettingsAbout extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <GeneralSettingsLeftMenu aboutActive={true} />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">02</span>
                                <span className="title">Hakkımızda</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="#" className="btn btn-secondary h-36">Save</Link> 
                            </div>
                        </div>
                        <div className="grid">
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                <About />
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                <LanguageSettings />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
