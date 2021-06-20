import React, { Component } from 'react';

//Table Import
import Table from '../Components/Tables';

//Content Top Import
import ContentTop from '../Container/ContentTop';

//Icons Imports
import Avatar from '../assets/img/avatar2.svg';

const members = [
    {keyT: 1, name: 'Veysel Akbulut', avatar: Avatar, code: '#10085', email: 'ins.veyselakbulut@gmail.com', registirationTime: '12.10.2021 15:00', lastActivity: '12.10.2021 15:00', role: ['Seller'], bandwith: 30, storageUsed: 30, time: '5 gün 3 saat'},
    {keyT: 2, name: 'Veysel Akbulut', avatar: Avatar, code: '#10085', email: 'ins.veyselakbulut@gmail.com', registirationTime: '12.10.2021 15:00', lastActivity: '12.10.2021 15:00', role: ['Seller'], bandwith: 30, storageUsed: 30, time: '5 gün 3 saat'}
];

export default class MemberMenagament extends Component {
    render() {
        return (
            <main className="content">
                <div className="welcome">
                    <ContentTop filter activeItem={"Member Management"} />
                    <Table items={members} tableName={"MemberManagement"}/>
                </div>
            </main>
        )
    }
}
