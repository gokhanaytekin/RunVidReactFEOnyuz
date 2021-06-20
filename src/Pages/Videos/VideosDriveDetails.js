import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import VideosLeftFolderSidebar from '../../Components/LeftMenus/VideosLeftFolderSidebar';

//Pictures Imports
import PlayBtnIcon from '../../assets/img/icons/play-btn-icon.svg';
import Video1 from '../../assets/img/video-1.jpg';
import TRFlag from '../../assets/img/flag/tr.svg';
import ENFlag from '../../assets/img/flag/en.svg';
import Info from '../../assets/img/icons/info.svg';
import FeatherEdit from '../../assets/img/icons/feather-edit.svg';
import FeatherTrash from '../../assets/img/icons/feather-trash.svg';
import RightArrow from '../../assets/img/icons/arrow-right.svg';
import LeftArrow from '../../assets/img/icons/arrow-left.svg';

//Components Imports
import AddSubtitleModal from '../../Components/Modals/AddSubtitle';
import Input from '../../Components/PricePlans/Input';
import VideosDetailBottom from '../../Container/VideosDetailBottom';

//TextEditor Imports
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class VideosDriveDetails extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                <div className="grid">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <VideosLeftFolderSidebar  />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">

                        <div className="video-detail-header">
                            <Link to="#" className="video-img">
                                <img alt={"RunVid"} src={PlayBtnIcon} className="play-btn-icon" />
                                <img alt={"RunVid"} src={Video1} className="video-img-img" />
                            </Link> 
                            <div className="video-detail-text">
                                <div className="video-detail-top">
                                    <div className="left">
                                        <div className="top">
                                            <div className="active-pasive online">
                                                <div className="active-box-50"></div>
                                                <span>Ready</span>
                                            </div>
                                            <div className="id">ID: 7Ada785cfsads</div>
                                        </div>
                                        <div className="video-text">
                                            <div className="title">Video deneme.mp4</div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="date">12/03/2021 15:00:00</div>
                                        <div className="buttons">
                                            <Link to="#" className="btn btn-outline btn-text-primary h-42">Delete Video</Link> 
                                            <Link to="#" className="btn btn-outline btn-text-secondary h-42">Share</Link> 
                                        </div>
                                    </div>
                                </div>
                                <VideosDetailBottom />
                            </div>
                        </div>

                        <div className="box">
                            <div className="container">
                                <div id="tab-1" className="tab-content current">
                                    <div className="red-text mb-20">General</div>
                                    <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                                        <div className="grid">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <Input title={"Video Name"} />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label className="form-label no-column">İçerik <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                                                    <CKEditor 
                                                        editor={ ClassicEditor }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <Input title={"Tags"}  />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-8 col-sm-12 col-xs-12">
                                                <div className="grid">
                                                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label className="form-label">Poster</label>
                                                        </div>
                                                        <div id="drag-drop-area"></div>

                                                        <div className="UppyDragDrop"></div>
                                                        <div className="for-ProgressBar"></div>

                                                        <div className="uploaded-files">
                                                            <h5>Yüklenen dosyalar:</h5>
                                                            <ol></ol>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <img alt={"RunVid"} src={Video1} className="poster-img mt-20" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div id="tab-2" className="tab-content">
                                    <div className="box-video-title">
                                        <div className="red-text">Subtitles</div>
                                        <Link to="#" data-fancybox data-src="#add-subtitle" data-modal={true} data-auto-focus={false}  className="btn btn-primary h-32">
                                            <i data-feather="plus"></i> Add
                                        </Link> 
                                    </div>

                                    <AddSubtitleModal />

                                    {/* <!-- table --> */}
                                    <div className="dash-table">
                                        <table id="sortable">
                                            <thead>
                                                <tr>
                                                    <th data-type="number">Id</th>
                                                    <th data-type="string">Subtitles Language</th>
                                                    <th data-type="string">Subtitles size</th>
                                                    <th data-type="string">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        50000
                                                    </td>
                                                    <td>
                                                        <div className="img-text-item">
                                                            <span>
                                                                <img alt={"RunVid"} src={TRFlag} />
                                                            </span>
                                                            <span>Turkey</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        300 KB
                                                    </td>
                                                    <td>
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
                                                    <td>
                                                        50000
                                                    </td>
                                                    <td>
                                                        <div className="img-text-item">
                                                            <span>
                                                                <img alt={"RunVid"} src={ENFlag} />
                                                            </span>
                                                            <span>England</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        300 KB
                                                    </td>
                                                    <td>
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
                                                    <td>
                                                        50000
                                                    </td>
                                                    <td>
                                                        <div className="img-text-item">
                                                            <span>
                                                                <img alt={"RunVid"} src={TRFlag} />
                                                            </span>
                                                            <span>Turkey</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        300 KB
                                                    </td>
                                                    <td>
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
                                                    <td>
                                                        50000
                                                    </td>
                                                    <td>
                                                        <div className="img-text-item">
                                                            <span>
                                                                <img alt={"RunVid"} src={ENFlag} />
                                                            </span>
                                                            <span>England</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        300 KB
                                                    </td>
                                                    <td>
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
                                                    <td>
                                                        50000
                                                    </td>
                                                    <td>
                                                        <div className="img-text-item">
                                                            <span>
                                                                <img alt={"RunVid"} src={TRFlag} />
                                                            </span>
                                                            <span>Turkey</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        300 KB
                                                    </td>
                                                    <td>
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
                                                    <td>
                                                        50000
                                                    </td>
                                                    <td>
                                                        <div className="img-text-item">
                                                            <span>
                                                                <img alt={"RunVid"} src={ENFlag} />
                                                            </span>
                                                            <span>England</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        300 KB
                                                    </td>
                                                    <td>
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
                                    <div className="dash-table-footer">
                                        <div className="page-num">
                                            Showing <b>1 to 1</b> of <b>1</b> entries.
                                        </div>
                                        <div className="pagination">
                                            <span><b>1</b> to <b>40</b> Page</span>
                                            <div className="page-no">
                                                <Link to="#"> 
                                                    <img alt={"RunVid"} src={LeftArrow} />
                                                </Link> 
                                                <input type="text" placeholder="Page No" />
                                                <Link to="#"> 
                                                    <img alt={"RunVid"} src={RightArrow} />
                                                </Link> 
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end #table --> */}
                                </div>
                                <div id="tab-3" className="tab-content">
                                    <div className="box-video-title">
                                        <div className="red-text">File</div>
                                        <Link to="#" data-fancybox data-src="#add-file" data-modal={true} data-auto-focus={false}  className="btn btn-primary h-32">
                                            <i data-feather="plus"></i> Add
                                        </Link> 
                                    </div>
                                </div>
                                <div id="tab-4" className="tab-content">
                                    <div className="box-video-title">
                                        <div className="red-text">Swap Ids</div>
                                        <Link to="#" data-fancybox data-src="#add-swap" data-modal={true} data-auto-focus={false}  className="btn btn-primary h-32">
                                            <i data-feather="plus"></i> Add
                                        </Link> 
                                    </div>
                                    <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                                        <div className="form-group">
                                            <label className="form-label no-column">Select</label>
                                            <select name="" className="form-control">
                                                <option value="">Enter video id/title and press enter to select the video</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div id="tab-5" className="tab-content">
                                    <div className="box-video-title">
                                        <div className="red-text">Security</div>
                                        <Link to="#" data-fancybox data-src="#add-swap" data-modal={true} data-auto-focus={false}  className="btn btn-secondary h-32">Save
                                        </Link> 
                                    </div>
                                    <div className="gray-text mb-20">
                                        Note: Changes made here will not affect already-generated iframe-embed-code. This will only apply to embed code generated after saving this configuration. These changes will overwrite the restrictions applied at account level in config section
                                    </div>
                                    <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                                        <div className="grid">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label className="form-label no-column">URL Whitelist Restrictions <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                                                    <input type="text" className="form-control" placeholder="Title" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label className="form-label no-column">IP/Country Restrictions <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                                                    <input type="text" className="form-control" placeholder="Title" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            {/* <!-- container --> */}
                        </div>

                    </div>
                </div>

            </div>

        </main>
        )
    }
}
