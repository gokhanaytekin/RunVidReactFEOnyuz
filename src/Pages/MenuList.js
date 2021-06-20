import React, { Component } from 'react';

//Content Top Import
import ContentTop from '../Container/ContentTop';

//Table Import
import Table from '../Components/Tables';

const menus = [
    {keyT: 1, id: '50000', mName: 'dashboard', url: 'dashboard', path: '/dashboard', status: true, notation: 'user'},
    {keyT: 2, id: '50001', mName: 'dashboard', url: 'dashboard', path: '/dashboard', status: false, notation: 'admin'},
];

export default class MenuList extends Component {
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
                    <ContentTop filter add addBtnName = {"Add Menu"} activeItem={"Menu List"} />
                    {/* <LanguageModal /> */}
                    <Table items={menus} tableName={"MenuList"}/>
                </div>
            </main>
        )
    }
}
