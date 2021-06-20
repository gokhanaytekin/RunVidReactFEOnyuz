import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import GeneralSettingsLeftMenu from '../../Components/LeftMenus/GeneralSettingsLeftMenu';

//Modal Imports
import AddCommentModal from '../../Components/Modals/AddComment';

//Table Import
import Table from '../../Components/Tables';

import Avatar2 from '../../assets/img/avatar2.svg';

const comments = [
    {keyT: 1, id: 50000, user: [
        {avatar: Avatar2, name: 'Veysel Akbulut'} 
    ], score: 5, status: true},
    {keyT: 2, id: 50000, user: [
        {avatar: Avatar2, name: 'Veysel Akbulut'} 
    ], score: 5, status: true},
];

export default class GeneralSettingsUserComments extends Component {
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
                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <GeneralSettingsLeftMenu userCommentActive={true} />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">11</span>
                                <span className="title">Kullanıcı Yorumları</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="#" onClick={(e) => this.modalVisible(e)} data-fancybox data-src="#add-comment" data-modal={true} data-auto-focus={false}  className="btn btn-primary h-36">Add</Link> 
                            </div>
                        </div>
                        { this.state.modalShow ? <AddCommentModal /> : null }
                        <Table items={comments} tableName={"GSUserComments"}/>
                    </div>
                </div>
                {/* <!-- end #profile --> */}
            </div>
        </main>
        )
    }
}
