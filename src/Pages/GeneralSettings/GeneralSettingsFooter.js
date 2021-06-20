import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Table Import
import Table from '../../Components/Tables';

//Components Imports
import GeneralSettingsLeftMenu from '../../Components/LeftMenus/GeneralSettingsLeftMenu';

//Components Imports
import AddFooterModal from '../../Components/Modals/AddFooter';

const footers = [
    {keyT: 1, id: '50000', definition: '1. Alan', status: true},
    {keyT: 2, id: '50000', definition: '1. Alan', status: true}
];

export default class GeneralSettingsFooter extends Component {
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
                        <GeneralSettingsLeftMenu footerActive={true} />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">08</span>
                                <span className="title">Footer Dizayn</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="#" onClick={(e) => this.modalVisible(e)} className="btn btn-primary h-36">Add</Link>
                            </div>
                        </div>

                        { this.state.modalShow ? <AddFooterModal /> : null }
                        <Table items={footers} tableName={"GSFooter"}/>

                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
