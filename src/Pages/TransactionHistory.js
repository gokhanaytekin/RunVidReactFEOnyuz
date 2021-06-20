import React, { Component } from 'react';

//Content Top Import
import ContentTop from '../Container/ContentTop';

//Table Import
import Table from '../Components/Tables';

import Avatar2 from '../assets/img/avatar2.svg';

const history = [
    {keyT: 1, date: '12.10.2021 15:00', users: [
        {name: 'Veysel Akbulut', date: '25.1.2021 16:23:40', avatar: Avatar2}
    ], amount: '149$', bandwith: '500 GB', storage: '1.0 TB', validTill: '12.10.2021 15:00', status: true},
    {keyT: 2, date: '12.10.2021 15:00', users: [
        {name: 'Veysel Akbulut', date: '25.1.2021 16:23:40', avatar: Avatar2}
    ], amount: '149$', bandwith: '500 GB', storage: '1.0 TB', validTill: '12.10.2021 15:00', status: false},
];

export default class TransactionHistory extends Component {
    render() {
        return (
            <main className="content">
                <div className="welcome">
                    <ContentTop count dataCount={1500} filter activeItem={"Transaction History"} />
                    <Table items={history} tableName={"TransactionHistory"}/>
                </div>
            </main>
        )
    }
}
