import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import VideoLeftMenu from '../../Components/LeftMenus/VideoLeftMenu';
import Tutor from '../../Components/Video/TutorItem';
import Company from '../../Components/Video/CompanyItem';
import SaveAndContinue from '../../Components/Buttons/SaveAndContinue';

//Icons Imports
import FeatherTrash from '../../assets/img/icons/feather-trash.svg';
import FeatherEdit from '../../assets/img/icons/feather-edit.svg';

export default class VideoDetails extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <VideoLeftMenu detailsActive={true} />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">04</span>
                                <span className="title">Details</span>
                            </div>
                            <SaveAndContinue />
                        </div>
                        <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                            <div className="grid">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="box-title-text between">
                                        <div className="title">
                                            Tutor Detail
                                        </div>
                                        <div className="settings-title-right">
                                            <Link to="#" data-fancybox data-src="#add" data-modal={true} data-auto-focus={false}  className="btn btn-primary h-36 mr-10">Add Tutor</Link> 
                                        </div>
                                    </div>
                                    {/* <!-- table --> */}
                                    <div className="dash-table">
                                        <table className="video-upload-table" id="sortable">
                                            <tbody id="table">
                                                <tr>
                                                    <td className={"move-p-0-br-0"} >
                                                        <Tutor tutorName="Veysel Akbulut" tutorJob="Developer" />
                                                    </td>
                                                    <td className={"w-50-bl-0"} >
                                                        <div className="action-buttons">
                                                            <Link to="#" className="action-btn action-edit-btn">
                                                                <img alt={"RunVid"} src={FeatherEdit} />
                                                            </Link> 
                                                            <Link to="#" className="action-btn action-delete-btn">
                                                                <img alt={"RunVid"} src={FeatherTrash} />
                                                            </Link> 
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={"move-p-0-br-0"} >
                                                        <Tutor tutorName="Veysel Akbulut" tutorJob="Developer" />
                                                    </td>
                                                    <td className={"w-50-bl-0"} >
                                                        <div className="action-buttons">
                                                            <Link to="#" className="action-btn action-edit-btn">
                                                                <img alt={"RunVid"} src={FeatherEdit} />
                                                            </Link> 
                                                            <Link to="#" className="action-btn action-delete-btn">
                                                                <img alt={"RunVid"} src={FeatherTrash} />
                                                            </Link> 
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <!-- end #table --> */}
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="box-title-text between">
                                        <div className="title">
                                            Company Detail
                                        </div>
                                        <div className="settings-title-right">
                                            <Link to="#" data-fancybox data-src="#add" data-modal={true} data-auto-focus={false}  className="btn btn-primary h-36 mr-10">Add Company</Link> 
                                        </div>
                                    </div>
                                    {/* <!-- table --> */}
                                    <div className="dash-table">
                                        <table className="video-upload-table" id="sortable">
                                            <tbody id="table">
                                                <tr>
                                                    <td className={"move-p-0-br-0"} >
                                                        <Company companyName="RunVid" companyJob="Developer" />
                                                    </td>
                                                    <td className={"w-50-bl-0"} >
                                                        <div className="action-buttons">
                                                            <Link to="#" className="action-btn action-edit-btn">
                                                                <img alt={"RunVid"} src={FeatherEdit} />
                                                            </Link> 
                                                            <Link to="#" className="action-btn action-delete-btn">
                                                                <img alt={"RunVid"} src={FeatherTrash} />
                                                            </Link> 
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <!-- end #table --> */}
                                </div>
                            </div>
                            <div className="settings-title settings-title-footer">
                                <div className="settings-title-left">
                                </div>
                                <SaveAndContinue />
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
