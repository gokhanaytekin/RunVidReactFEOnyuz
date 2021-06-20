import React, { Component } from 'react';

//Content Top Import
import ContentTop from '../Container/ContentTop';

import Table from '../Components/Tables';

import Avatar from '../assets/img/avatar.svg';
import Avatar2 from '../assets/img/avatar2.svg';

const customer = [
    {keyT: 1, users: [
        {ns: 'Veysel Akbulut', date: '25.1.2021 16:23:40'}
    ], title: 'I like startup project', comment: 'Lorem ipsum dolor sit amet, consetetur.', reviewS: '3.40', status: 'Active', action: '', avatar: Avatar, active: true},
    {keyT: 2, users: [
        {ns: 'Veysel Akbulut', date: '25.1.2021 16:23:40'}
    ], title: 'I like startup project', comment: 'Lorem ipsum dolor sit amet, consetetur.', reviewS: '3.40', status: 'Pasive', action: '', avatar: Avatar2, active: false},
];

export default class CustomerComments extends Component {
    state = {
        modalShow: false
    }
    modalVisible = () => {
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
                    <ContentTop count dataCount={1500} filter add addBtnName = {"Add Customer"} activeItem={"Customer Comments"} />
                    <Table items={customer} tableName={"CustomerComments"}/>
                </div>
            </main>
        )
    }
}
