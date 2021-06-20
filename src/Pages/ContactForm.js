import React, { Component } from 'react';

//Table Import
import Table from '../Components/Tables';

//Content Top Import
import ContentTop from '../Container/ContentTop';


const contacts = [
    {keyT: 1, id: '50000', date: '28.12.2020 22:46:08', ns: 'Veysel Akbulut', topic: 'Propasal', email: 'ins.veyselakbulut@gmail.com', status: 'Pending', action: 'JKXS93fk****'},
    {keyT: 2, id: '50000', date: '28.12.2020 22:46:08', ns: 'Veysel Akbulut', topic: 'Propasal', email: 'ins.veyselakbulut@gmail.com', status: 'Pending', action: 'JKXS93fk****'},
    {keyT: 3, id: '50000', date: '28.12.2020 22:46:08', ns: 'Veysel Akbulut', topic: 'Propasal', email: 'ins.veyselakbulut@gmail.com', status: 'Pending', action: 'JKXS93fk****'},
];

export default class ContactForm extends Component {
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
                    <ContentTop filter add addBtnName={"Add Contact"} activeItem={"Contact Form"} />
                    <Table items={contacts} tableName={"ContactForm"}/>
                </div>
            </main>
        )
    }
}
