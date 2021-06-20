import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

//Components Imports
import AddBtn from '../Components/Buttons/AddBtn';
import FilterBtn from '../Components/Buttons/FilterBtn';

//Icons Imports
import Search from '../assets/img/icons/search.svg';

//Modals Imports
import AddUserModal from '../Components/Modals/AddUser';
import AddTimeModal from '../Components/Modals/AddTime';
import AddLanguageModal from '../Components/Modals/AddLanguage';
import AddContactModal from '../Components/Modals/AddContact';
import AddCustomerModal from '../Components/Modals/AddCustomer';
import AddDepartmantModal from '../Components/Modals/AddDepartmant';
import AddHelpModal from '../Components/Modals/AddHelpModal';
import AddFolderModal from '../Components/Modals/AddFolder';
import AddMenuModal from '../Components/Modals/AddMenu';
import AddPromotionModal from '../Components/Modals/AddPromotions';
import AddSystemModal from '../Components/Modals/AddSystem';

class ContentTop extends Component {
    state = {
        modalShow: false
    }
    render() {
        const  {t} = this.props
        return (
            <div className="content-top">
                <div className="content-top-left">
                    <ul className="breadcrumb">
                        <li>
                            <Link to={"/apikeys"} className="breadcrumb-item">{t('contentTopHome')}</Link> 
                            <Link to="#" className="breadcrumb-item active">
                                {t('contentTop' + this.props.activeItem)}
                                {this.props.count ? <span>{this.props.dataCount} {t('contentTopData')}</span> : null}
                                </Link> 
                        </li>
                    </ul>
                    {!this.props.search ? <div id="content-top-search">
                        <input id="table-search" type="text" placeholder="Search by id ,name...." autoComplete="off" />
                        <div className="content-top-search-icon">
                            <img alt={"RunVid"} src={Search} />
                        </div>
                    </div> : null}
                </div>
                { this.state.modalShow && this.props.activeItem === "User List" ? <AddUserModal /> : null }
                { this.state.modalShow && this.props.activeItem === "Timezone" ? <AddTimeModal /> : null }
                { this.state.modalShow && this.props.activeItem === "Language" ? <AddLanguageModal clockInput={this.props.clockInput} submit={this.props.submit} pasive={this.props.pasive} active={this.props.active} code={this.props.code} name={this.props.name} /> : null }
                { this.state.modalShow && this.props.activeItem === "Contact Form" ? <AddContactModal /> : null }
                { this.state.modalShow && this.props.activeItem === "Customer Comments" ? <AddCustomerModal /> : null }
                { this.state.modalShow && this.props.activeItem === "Departmant Manager" ? <AddDepartmantModal /> : null}
                { this.state.modalShow && this.props.activeItem === "Help Management" ? <AddHelpModal /> : null }
                { this.state.modalShow && this.props.activeItem === "Language Management" ? <AddFolderModal /> : null}
                { this.state.modalShow && this.props.activeItem === "Menu List" ? <AddMenuModal /> : null }
                { this.state.modalShow && this.props.activeItem === "Promotions" ? <AddPromotionModal /> : null }
                { this.state.modalShow && this.props.activeItem === "System Features" ? <AddSystemModal /> : null}
                <div className="content-top-right">
                    { this.props.add ? <Link to="#" onClick={ () => { this.setState({ modalShow: !this.state.modalShow }) } }> <AddBtn color={"white"} name = {this.props.addBtnName} /> </Link> : null }
                    { this.props.filter ? <FilterBtn /> : null }
                    {this.props.greenSave ? <div className="drive-buttons">
                        <Link to="#" className="btn btn-green h-32">
                            Kaydet
                        </Link> 
                    </div> : null}
                </div>
            </div>
        )
    }
}

export default withTranslation()(ContentTop);