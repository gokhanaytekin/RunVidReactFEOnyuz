import React, { Component } from 'react';

//Components Imports
import AddCatagoryModal from '../Components/Modals/AddCatagory';

//Content Top Import
import ContentTop from '../Container/ContentTop';

//Table Import
import Table from '../Components/Tables';

const helps = [
    {keyT: 1, id: '50000', mName: 'How to video upload', status: true},
    {keyT: 2, id: '50001', mName: 'How to video upload', status: false},
    {keyT: 3, id: '50000', mName: 'How to video upload', status: true},
    {keyT: 4, id: '50001', mName: 'How to video upload', status: false}
];

export default class HelpManagement extends Component {
    state = {
        modalShow: false,
        editHelpModal: false,
    }
    modalVisible = (e) => {
        if(e.target.id === "add") {
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
    }
    render() {
        return (
            <main className="content">
                <div className="welcome">
                    <ContentTop filter add addBtnName = {"Add Help"} activeItem={"Help Management"} />
                    { this.state.modalShow ? <AddCatagoryModal /> : null }
                    <Table items={helps} tableName={"HelpManagement"} />
                </div>
            </main>
        )
    }
}
