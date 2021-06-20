import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import VideoLeftMenu from '../../Components/LeftMenus/VideoLeftMenu';
import FileInput from '../../Components/FileInput';
import Video from '../../Components/Video/Video';

//Icons Imports
import FeatherTrash from '../../assets/img/icons/feather-trash.svg';
import FeatherEdit from '../../assets/img/icons/feather-edit.svg';
import SaveAndContinue from '../../Components/Buttons/SaveAndContinue';

export default class VideosVideos extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <VideoLeftMenu videosActive={true} />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">03</span>
                                <span className="title">Videos</span>
                            </div>
                            <SaveAndContinue />
                        </div>
                        <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                            <div className="grid">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="box-title-text">
                                        <div className="title">
                                            Upload videos
                                        </div>
                                        <div className="text">
                                            If you’d like, pick a time to automatically release your videos (US Eastern Time)
                                        </div>
                                    </div>
                                    <FileInput explanation={"Drop Files Here To Upload"} />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="box-title-text">
                                        <div className="title">
                                            Videos
                                        </div>
                                    </div>
                                    {/* <!-- table --> */}
                                    <div className="dash-table">
                                        <table className="video-upload-table" id="sortable">
                                            <tbody id="table">
                                                <tr>
                                                    <td className={"move-p-0-br-0"} >
                                                        <Video />
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
                                                        <Video />
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
                                                        <Video />
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
