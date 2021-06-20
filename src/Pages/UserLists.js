import React, { Component } from 'react';

//Content Top Import
import ContentTop from '../Container/ContentTop';

//Table Import
import Table from '../Components/Tables';

import Avatar from '../assets/img/avatar.svg';
import Avatar2 from '../assets/img/avatar2.svg';


const users = [
    {keyT: 1, name: [
        {name: 'Veysel Akbulut ', code: '#10085', avatar: Avatar2}
    ], email: 'ins.veyselakbulut@gmail.com', lastActivity: '12.10.2021 15:00', role: 'admin', validTill: '12.10.2021 15:00', status: 'active'},
    {keyT: 2, name: [
        {name: 'Veysel Akbulut', code: '#10086', avatar: Avatar}
    ], email: 'ins.veyselakbulut@gmail.com', lastActivity: '12.10.2021 16:00', role: 'user', validTill: '12.10.2021 15:00', status: 'active'},
    {keyT: 3, name: [
        {name: 'Veysel Akbulut', code: '#10087', avatar: Avatar2}
    ], email: 'ins.veyselakbulut@gmail.com', lastActivity: '12.10.2021 17:00', role: 'demo', validTill: '12.10.2021 15:00', status: 'pasive'},
    {keyT: 4, name: [
        {name: 'Veysel Akbulut', code: '#10088', avatar: Avatar}
    ], email: 'ins.veyselakbulut@gmail.com', lastActivity: '12.10.2021 18:00', role: 'user', validTill: '12.10.2021 15:00', status: 'waiting'}
];

export default class userlists extends Component {
    state = {
        modalShow: false,
        editHelpModal: false
    }
    modalVisible = (e) => {
        if(this.state.modalShow) {
            this.setState({
                modalShow: false
            })
        }
        if(!this.state.modalShow) {
            this.setState({
                modalShow: true
            })
        }
    }
    render() {
        return (
            <main className="content">
                <div className="welcome">
                    <ContentTop add filter addBtnName={"Add User"} activeItem={"User List"} />
                    <Table items={users} tableName={"UserList"}/>
                </div>
            </main>
        )
    }
}
