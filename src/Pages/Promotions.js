import React, { Component } from 'react';

//Content Top Import
import ContentTop from '../Container/ContentTop';

//Table Import
import Table from '../Components/Tables';

const promot = [
    {keyT: 1, code: 'AF45COUNT20', definition: '20', startDate: '12.10.2021 15:00', endDate: '12.10.2021 15:00', discountR: 20, count: 12, status: true},
    {keyT: 2, code: 'AF45COUNT20', definition: '20', startDate: '12.10.2021 15:00', endDate: '12.10.2021 15:00', discountR: 20, count: 12, status: false},
];

export default class Promotions extends Component {
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
                    <ContentTop filter data dataCount={1500} add addBtnName = {"Add Promotion"} activeItem={"Promotions"} />
                    <Table items={promot} tableName={"Promotions"}/>
                </div>
            </main>
        )
    }
}
