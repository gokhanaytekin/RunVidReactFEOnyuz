import React, { Component } from 'react';

//Content Top Left Import
import ContentTop from '../Container/ContentTop';

//Table Import
import Table from '../Components/Tables';

import Avatar2 from '../assets/img/avatar2.svg';

const logs = [
    {keyT: 1, pageNameTitle: 'About Use', pageNameCode: 'Login in page', roles:['Admin'], userName: 'Veysel Akbulut', userAvatar: Avatar2, userCode: '#10085', date: '28.12.2020 22:46:08'},
    {keyT: 2, pageNameTitle: 'About Use', pageNameCode: 'Login in page', roles:['User'], userName: 'Veysel Akbulut', userAvatar: Avatar2, userCode: '#10085', date: '28.12.2020 22:46:08'},
    {keyT: 3, pageNameTitle: 'About Use', pageNameCode: 'Login in page', roles:['Demo'], userName: 'Veysel Akbulut', userAvatar: Avatar2, userCode: '#10085', date: '28.12.2020 22:46:08'}
];

export default class Log extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">
                <ContentTop filter activeItem={"Log"} />
                <Table items={logs} tableName={"Log"} />
            </div>

        </main>
        )
    }
}
