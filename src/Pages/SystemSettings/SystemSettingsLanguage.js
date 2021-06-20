import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import SystemSettingsLeftMenu from '../../Components/LeftMenus/SystemSettingsLeftMenu';

//Components Imports
import LibraryModal from '../../Components/Modals/Library';

//Table Import
import Table from '../../Components/Tables';

//Pictures Imports
import TRFlag from '../../assets/img/flag/tr.svg';
import ENFlag from '../../assets/img/flag/en.svg';

const languages = [
    {keyT: 1, id: 1202181, status: true, flag: TRFlag, countryName: 'Turkey'},
    {keyT: 2, id: 1202182, status: false, flag: ENFlag, countryName: 'English'}
];

export default class SystemSettingsLanguage extends Component {
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
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <SystemSettingsLeftMenu languageActive={true}/>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">02</span>
                                <span className="title">Dil</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="#" onClick={(e) => this.modalVisible(e)}  data-fancybox data-src="#kutuphane" data-modal={true} data-auto-focus={false}  className="btn btn-secondary h-36">Kütüphane</Link> 
                            </div>
                        </div>
                        { this.state.modalShow ? <LibraryModal /> : null }
                        <Table items={languages} tableName={"SSLanguage"}/>
                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
