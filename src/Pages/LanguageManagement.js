import React, { Component } from 'react';

//Content Top Left Import
import ContentTop from '../Container/ContentTop';

//Table Import
import Table from '../Components/Tables';

const lms = [
    {keyT: 1, id: '50000', code: 'LG-9001', fileName: 'Anasayfa', translation: 30},
    {keyT: 2, id: '50000', code: 'LG-9001', fileName: 'Özellikler', translation: 50}
];

export default class LanguageManagement extends Component {
    state = {
        modalShow: false,
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
                    <ContentTop filter add addBtnName={"Add Folder"} activeItem={"Language Management"} />
                    <Table items={lms} tableName={"LanguageManagement"}/>
                </div>
            </main>
        )
    }
}
