import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import SystemSettingsLeftMenu from '../../Components/LeftMenus/SystemSettingsLeftMenu';

//Table Import
import Table from '../../Components/Tables';

import TRFlag from '../../assets/img/flag/tr.svg';

const timezones = [
    {keyT: 1, id: 1202181, timeDifference: '5', flag: TRFlag, countryName: 'Turkey'},
    {keyT: 2, id: 1202181, timeDifference: '5', flag: TRFlag, countryName: 'Turkey'}
];

export default class SystemSettingsTimezone extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <SystemSettingsLeftMenu timezoneActive={true} />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">04</span>
                                <span className="title">Timezone</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="#" data-fancybox data-src="#add" data-modal={true} data-auto-focus={false}  className="btn btn-primary h-36">Ekle</Link> 
                            </div>
                        </div>
                        <Table items={timezones} tableName={"SSTimezone"}/>
                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
