import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Table Import
import Table from '../../Components/Tables';

//Components Imports
import GeneralSettingsLeftMenu from '../../Components/LeftMenus/GeneralSettingsLeftMenu';

const hows = [
    {keyT: 1, id: '50000', definition: 'Epostanızla Aktive Edin', transtation: 30, status: true},
    {keyT: 2, id: '50000', definition: 'Epostanızla Aktive Edin', transtation: 30, status: false},
]

export default class GeneralSettingsHow extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <GeneralSettingsLeftMenu howActive={true}/>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">10</span>
                                <span className="title">Nasıl Çalışır</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="/generalsettings/add/how" className="btn btn-primary h-36">Add</Link>
                            </div>
                        </div>
                        <Table items={hows} tableName={"GSHow"}/>

                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
