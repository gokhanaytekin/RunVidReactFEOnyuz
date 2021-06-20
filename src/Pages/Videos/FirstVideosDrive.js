import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import VideosLeftFolderSidebar from '../../Components/LeftMenus/VideosLeftFolderSidebar';
import VideosItem from '../../Components/VideosItem';

//Pictures Imports
import Video1 from '../../assets/img/video-1.jpg';
import Video2 from '../../assets/img/video-2.jpg';
import Video3 from '../../assets/img/video-3.jpg';

//Components Imports
import AddFolderModal from '../../Components/Modals/AddFolder';

const videos = [
    {keyT: 1, status: true, date: '12/03/2021 15:00:00-1', title: 'Video deneme.mp4-1', subtitle: 'ID: 7Ada785cfsads', img: Video1},
    {keyT: 2, status: false, date: '12/03/2021 15:00:00-2', title: 'Video deneme.mp4-2', subtitle: 'ID: 7Ada785cfsads', img: Video2},
    {keyT: 3, status: true, date: '12/03/2021 15:00:00-3', title: 'Video deneme.mp4-3', subtitle: 'ID: 7Ada785cfsads', img: Video3},
];

export default class FirstVideosDrive extends Component {
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
                                    <Link to="#" className="btn btn-secondary h-32">
                                        <i data-feather="download-cloud"></i> İmport
                                    </Link> 
                                    <Link to="#" className="btn btn-green h-32">
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
                            <div className="grid">
                                {videos.map((res) => 
                                <VideosItem key={res.keyT} status={res.status} date={res.date} img={res.img} title={res.title} subtitle={res.subtitle}  />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </main>
        )
    }
}
