import React, { Component } from 'react';

//Table Import
import Table from '../../Components/Tables';

import Avatar2 from '../../assets/img/avatar2.svg';

//Components Imports
import GeneralSettingsLeftMenu from '../../Components/LeftMenus/GeneralSettingsLeftMenu';
import AddBtn from '../../Components/Buttons/AddBtn';

const extraItems = [
    {keyT: 1, id: [ {title: 'About Us'} ], avatar: Avatar2, user: [ {name: 'Veysel Akbulut', date: '28.12.2020 22:46:08'} ], transtation: 30, postDate: '28.12.2020 22:46:08', status: true},
    {keyT: 2, id: [ {title: 'About Us'} ], avatar: Avatar2, user: [ {name: 'Veysel Akbulut', date: '28.12.2020 22:46:08'} ], transtation: 25, postDate: '28.12.2020 22:46:08', status: false}
];

export default class GeneralSettingsExtra extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <GeneralSettingsLeftMenu extraActive={true} />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">07</span>
                                <span className="title">Extra Sayfalar</span>
                            </div>
                            <AddBtn path={"/generalsettings/add/extra"} color={"white"} name = {"Add"} />
                        </div>
                        
                        <Table items={extraItems} tableName={"GSExtra"}/>

                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
