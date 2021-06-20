import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import VideosLeftFolderSidebar from '../../Components/LeftMenus/VideosLeftFolderSidebar';

//Components Imports
import AddFolderModal from '../../Components/Modals/AddFolder';
import VideosDrive2Item from '../../Components/Videos/VideosDrive2Item';

export default class SecondVideosDrive extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                <div className="grid">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <VideosLeftFolderSidebar />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        {/* <!-- content-top --> */}
                        <div className="content-top">
                            <div className="content-top-left">
                                <ul className="breadcrumb">
                                    <li>
                                        <Link to="#" className="breadcrumb-item">Home</Link> 
                                        <Link to="#" className="breadcrumb-item active">Videos</Link> 
                                    </li>
                                </ul>
                            </div>
                            <div className="content-top-right">
                                <div className="drive-buttons">
                                    <Link to="#" data-fancybox data-src="#" data-modal={true} data-auto-focus={false}  className="btn btn-secondary h-32">
                                        <i data-feather="download-cloud"></i> İmport
                                    </Link> 
                                    <Link to="#" data-fancybox data-src="#" data-modal={true} data-auto-focus={false}  className="btn btn-green h-32">
                                        <i data-feather="upload-cloud"></i> Upload
                                    </Link> 
                                    <Link to="#" data-fancybox data-src="#add-folder" data-modal={true} data-auto-focus={false}  className="btn btn-orange h-32">
                                        <i data-feather="plus"></i> Add Folder
                                    </Link> 
                                    <Link to="#" className="list-btn">
                                        <i data-feather="list"></i>
                                    </Link> 
                                </div>
                            </div>
                        </div>
                        {/* <!-- end #content-top --> */}

                        <AddFolderModal />

                        <div className="video-list">
                            <VideosDrive2Item />
                            <VideosDrive2Item />
                            <VideosDrive2Item />
                            <VideosDrive2Item />
                            <VideosDrive2Item />
                            <VideosDrive2Item />
                        </div>
                    </div>
                </div>

            </div>

        </main>
        )
    }
}
