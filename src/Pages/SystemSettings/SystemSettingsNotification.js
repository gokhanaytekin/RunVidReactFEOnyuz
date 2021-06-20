import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import SystemSettingsLeftMenu from '../../Components/LeftMenus/SystemSettingsLeftMenu';
import { SystemNoti1, SystemNoti2 } from '../../Components/GeneralSettings/Box';

//Modal Import
import AddModal from '../../Components/Modals/Add';

export default class SystemSettingsNotification extends Component {
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
                        <SystemSettingsLeftMenu notificationActive={true} />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">08</span>
                                <span className="title">Bildirim Ayarları</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="#" onClick={(e) => this.modalVisible(e)} data-fancybox data-src="#add" data-modal={true} data-auto-focus={false}  className="btn btn-primary h-36">Ekle</Link> 
                            </div>
                        </div>
                        { this.state.modalShow ? <AddModal /> : null }
                        <SystemNoti1 />
                        <SystemNoti2 />
                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
