import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Table Import
import Table from '../../Components/Tables';

//Components Imports
import GeneralSettingsLeftMenu from '../../Components/LeftMenus/GeneralSettingsLeftMenu';

//Components Imports
import AddSolutionModal from '../../Components/Modals/AddSolution';

const solutions = [
    {keyT: 1, id: '50000', definition: 'Infobip', status: true},
    {keyT: 2, id: '50000', definition: 'Infobip', status: true}
];

export default class GeneralSettingsSolutin extends Component {
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
                        <GeneralSettingsLeftMenu solutionActive={true} />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">09</span>
                                <span className="title">Çözüm Ortakları</span>
                            </div>
                            <Link to="#" onClick={(e) => this.modalVisible(e)} data-fancybox data-src="#add-solution" data-modal={true} data-auto-focus={false} className="btn btn-primary h-36">Add</Link> 
                        </div>
                        { this.state.modalShow ? <AddSolutionModal /> : null }
                        <Table items={solutions} tableName={"GSSolution"}/>

                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
