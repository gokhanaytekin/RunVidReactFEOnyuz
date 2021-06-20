import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import GeneralSettingsLeftMenu from '../../Components/LeftMenus/GeneralSettingsLeftMenu';
import { AddQuestion } from '../../Components/GeneralSettings/Box';
import LanguageSettings from '../../Components/GeneralSettings/LanguageSettings';

export default class GeneralSettingsAddQuestion extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <GeneralSettingsLeftMenu faqActive={true} />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">04</span>
                                <span className="title">Soru Oluştur</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="#" className="btn btn-secondary h-36">Kaydet</Link> 
                            </div>
                        </div>
                        <div className="grid">
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                <AddQuestion />
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
