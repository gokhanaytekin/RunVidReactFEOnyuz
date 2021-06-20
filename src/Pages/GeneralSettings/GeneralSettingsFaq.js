import React, { Component } from 'react';
import {Link} from 'react-router-dom';


//Components Imports
import GeneralSettingsLeftMenu from '../../Components/LeftMenus/GeneralSettingsLeftMenu';
import AddBtn from '../../Components/Buttons/AddBtn';

//Table Import
import Table from '../../Components/Tables';

//Components Imports
import AddQuestionModal from '../../Components/Modals/AddQuestion';

const faqs = [
    {keyT: 1, id: 50000, definition: 'Müşteriler', transtation: 30, status: true},
    {keyT: 2, id: 50000, definition: 'Müşteriler', transtation: 25, status: false}
];


export default class GeneralSettingsFaq extends Component {
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
                        <GeneralSettingsLeftMenu faqActive={true} />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">04</span>
                                <span className="title">SSS</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="#" onClick={(e) => this.modalVisible(e)} ><AddBtn color="white" name="Add Question" /></Link>
                            </div>
                        </div>

                        { this.state.modalShow ? <AddQuestionModal /> : null }
                        <Table items={faqs} tableName={"GSFaq"}/>

                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
