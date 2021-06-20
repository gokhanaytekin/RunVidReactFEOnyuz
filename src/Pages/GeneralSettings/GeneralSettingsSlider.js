import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import GeneralSettingsLeftMenu from '../../Components/LeftMenus/GeneralSettingsLeftMenu';

//Table Import
import Table from '../../Components/Tables';

import Video1 from '../../assets/img/video-1.jpg';
import Video2 from '../../assets/img/video-2.jpg';

const sliders = [
    {keyT: 1, id: 50000, definition: 'Dersler', transtation: 30, pictures: [Video1, Video2], status: true},
    {keyT: 2, id: 50000, definition: 'Dersler', transtation: 30, pictures: [Video1, Video2], status: true}
];

export default class GeneralSettingsSlider extends Component {
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
                                <Link to="/generalsettings/add/slider" className="btn btn-primary h-36"> Add Slider </Link>
                            </div>
                        </div>
                        <Table items={sliders} tableName={"GSSlider"}/>
                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
