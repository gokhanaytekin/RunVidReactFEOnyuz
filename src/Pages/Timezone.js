import React, { Component } from 'react';

//Content Top Import
import ContentTop from '../Container/ContentTop';

//Table Import
import Table from '../Components/Tables';

import ENFlag from '../assets/img/icons/en.svg';
import TRFlag from '../assets/img/icons/tr.svg';

const timezone = [
    {keyT: 1, id: '50000', timeD: 5, countryName: 'Turkey', countryFlag: TRFlag},
    {keyT: 2, id: '50001', timeD: 2, countryName: 'England', countryFlag: ENFlag}
];


export default class Timezone extends Component {
    state = {
        modalShow: false,
        editHelpModal: false,
        modalClock: ''
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
                    <ContentTop add filter addBtnName={"Add Menu"} activeItem={"Timezone"} />
                    <Table items={timezone} tableName={"Timezone"}/>
                </div>
            </main>
        )
    }
}
