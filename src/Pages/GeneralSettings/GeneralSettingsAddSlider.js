import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import GeneralSettingsLeftMenu from '../../Components/LeftMenus/GeneralSettingsLeftMenu';
import LanguageSettings from '../../Components/GeneralSettings/LanguageSettings';
import { AddSliderGeneral, AddSliderPictures, SystemText } from "../../Components/GeneralSettings/Box";

export default class GeneralSettingsAddSlider extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <GeneralSettingsLeftMenu sliderActive={true} />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">05</span>
                                <span className="title">Slider Yönetimi</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="#" className="btn btn-secondary h-36">Kaydet</Link> 
                            </div>
                        </div>
                        <div className="grid">
                            <div className="col-lg-9 col-md-12-col-sm-12 col-xs-12">
                                <AddSliderGeneral />
                                <AddSliderPictures />
                                <SystemText />
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
