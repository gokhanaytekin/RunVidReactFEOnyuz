import React, { Component } from 'react';

//Table Import
import Table from '../Components/Tables';

//Content Top Import
import ContentTop from '../Container/ContentTop';

//Components Imports
import Tutorial from '../Components/Tutorial';

import { withTranslation } from 'react-i18next';

const apis = [
    {keyT: 1, date: '12.10.2021 15:00', key: 'JKXS93fk****', editor: true, viewer: true, upload: true},
    {keyT: 2, date: '12.10.2021 15:00', key: 'JKXS93fk****', editor: false, viewer: true, upload: true},
    {keyT: 3, date: '12.10.2021 15:00', key: 'JKXS93fk****', editor: false, viewer: false, upload: true}
];

class ApiKeys extends Component {
    render() {
        return (
            <main className="content">
                <div className="welcome">
                    <div className="grid">
                        <Tutorial />
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <ContentTop filter add addBtnName = {"Generate Api"} activeItem={"Api Keys"} />
                            <Table items={apis} tableName={"Apikeys"}/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default withTranslation()(ApiKeys);