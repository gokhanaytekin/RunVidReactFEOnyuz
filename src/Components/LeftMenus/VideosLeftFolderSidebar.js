import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Icons Imports
import Folder from '../../assets/img/icons/folder.svg';
import FolderSearch from '../../assets/img/icons/folder-search.svg';
import Search from '../../assets/img/icons/search.svg';
import Arrow from '../../assets/img/icons/arrow.svg';

export default class VideosLeftFolderSidebar extends Component {
    render() {
        return (
            <div className="folder-sidebar">
                            <div className="content-title">Folder</div>
                            <div id="folder-top-search" className="mb-20">
                                <input id="table-search" type="text" placeholder="Search by id ,name...." autoComplete="off" />
                                <div className="folder-top-search-icon">
                                    <img alt={"RunVid"} src={Search} />
                                </div>
                            </div>
                            <ul className="folder-list">
                                <li className="folder-item">
                                    <div className="folder-link">
                                        <div className="arrow-icon">
                                            <img alt={"RunVid"} src={Arrow} />
                                        </div>
                                        <div className="folder-icon big">
                                            <img alt={"RunVid"} src={Folder} />
                                        </div>
                                        <span className="title">Videos</span>
                                    </div>
                                    <div className="folder-sub">
                                        <Link to="#"  className="folder-sub-link">
                                            <div className="folder-icon small">
                                                <img alt={"RunVid"} src={Folder} />
                                            </div>
                                            <span className="title">Videos</span>
                                        </Link>
                                        <Link to="#"  className="folder-sub-link active">
                                            <div className="folder-icon small">
                                                <img alt={"RunVid"} src={FolderSearch} />
                                            </div>
                                            <span className="title">Videos</span>
                                        </Link>
                                    </div>
                                </li>
                                <li className="folder-item">
                                    <div className="folder-link">
                                        <div className="arrow-icon">
                                            <img alt={"RunVid"} src={Arrow} />
                                        </div>
                                        <div className="folder-icon big">
                                            <img alt={"RunVid"} src={FolderSearch} />
                                        </div>
                                        <span className="title">Videos</span>
                                    </div>
                                    <div className="folder-sub">
                                        <Link to="#"  className="folder-sub-link">
                                            <div className="folder-icon small">
                                                <img alt={"RunVid"} src={Folder} />
                                            </div>
                                            <span className="title">Videos</span>
                                        </Link>
                                        <Link to="#"  className="folder-sub-link">
                                            <div className="folder-icon small">
                                                <img alt={"RunVid"} src={FolderSearch} />
                                            </div>
                                            <span className="title">Videos</span>
                                        </Link>
                                    </div>
                                </li>
                                <li className="folder-item">
                                    <div className="folder-link">
                                        <div className="arrow-icon">
                                            <img alt={"RunVid"} src={Arrow} />
                                        </div>
                                        <div className="folder-icon big">
                                            <img alt={"RunVid"} src={Folder} />
                                        </div>
                                        <span className="title">Videos</span>
                                    </div>
                                    <div className="folder-sub">
                                        <Link to="#"  className="folder-sub-link">
                                            <div className="folder-icon small">
                                                <img alt={"RunVid"} src={Folder} />
                                            </div>
                                            <span className="title">Videos</span>
                                        </Link>
                                        <Link to="#"  className="folder-sub-link">
                                            <div className="folder-icon small">
                                                <img alt={"RunVid"} src={Folder} />
                                            </div>
                                            <span className="title">Videos</span>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
        )
    }
}
