import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Pagination Import
import Pagination from '../../Components/Pagination';

//Pictures Imports
import Video1 from '../../assets/img/video-1.jpg';
import Video2 from '../../assets/img/video-2.jpg';
import Video3 from '../../assets/img/video-3.jpg';
import VideosSeries from '../../assets/img/icons/videos-series.svg';
import VideosSingle from '../../assets/img/icons/videos-single.svg';
import TRFlag from '../../assets/img/flag/tr.svg';
import DataBg from '../../assets/img/icons/date-bg.svg';
import FreeBg from '../../assets/img/icons/free-bg.svg';
import Search from '../../assets/img/icons/search.svg';

export default class Videos extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- content-top --> */}
                <div className="content-top">
                    <div className="content-top-left">
                        <ul className="breadcrumb">
                            <li>
                                <Link to="#" className="breadcrumb-item">Home</Link> 
                                <Link to="#" className="breadcrumb-item active">Videos <span>1500 Veri</span></Link> 
                            </li>
                        </ul>
                        <div id="content-top-search">
                            <input id="table-search" type="text" placeholder="Search by id ,name...." autoComplete="off" />
                            <div className="content-top-search-icon">
                               <img alt={"RunVid"} src={Search} />
                            </div>
                        </div>
                    </div>
                    <div className="content-top-right">
                        <Link to="#" data-fancybox data-src="#add-language" data-modal={true} data-auto-focus={false}  className="add-btn">
                            <i data-feather="plus"></i> Add
                        </Link> 
                        <Link to="#" className="filter-btn">
                            <i data-feather="filter"></i> Filters
                        </Link> 
                    </div>
                </div>
                {/* <!-- end #content-top --> */}

                {/* <!-- table --> */}
                <div className="dash-table">
                    <table id="sortable">
                        <thead>
                            <tr>
                                <th data-type="number">Video Name</th>
                                <th data-type="string">Video Pack</th>
                                <th data-type="string">Category</th>
                                <th data-type="string">Language</th>
                                <th data-type="string">publish type</th>
                                <th data-type="string">price type</th>
                                <th data-type="string">currencies</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="user-img-name">
                                        <img alt={"RunVid"} src={Video1} className="img-43" />
                                        <div className="user-img-name-detail">
                                            <span className="user-img-text">Php Dersleri...</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={VideosSingle} />
                                        </span>
                                        <span>A single video</span>
                                    </div>
                                </td>
                                <td>
                                    Deneme
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
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={DataBg} />
                                        </span>
                                        <span>Coming Soon</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={FreeBg} />
                                        </span>
                                        <span>Free</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={TRFlag} />
                                        </span>
                                        <span>35,00 $</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-img-name">
                                        <img alt={"RunVid"} src={Video2} className="img-43" />
                                        <div className="user-img-name-detail">
                                            <span className="user-img-text">Php Dersleri...</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={VideosSeries} />
                                        </span>
                                        <span>A series video</span>
                                    </div>
                                </td>
                                <td>
                                    Deneme
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
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={DataBg} />
                                        </span>
                                        <span>Coming Soon</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={FreeBg} />
                                        </span>
                                        <span>Free</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={TRFlag} />
                                        </span>
                                        <span>35,00 $</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-img-name">
                                        <img alt={"RunVid"} src={Video3} className="img-43" />
                                        <div className="user-img-name-detail">
                                            <span className="user-img-text">Php Dersleri...</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={VideosSingle} />
                                        </span>
                                        <span>A single video</span>
                                    </div>
                                </td>
                                <td>
                                    Deneme
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
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={DataBg} />
                                        </span>
                                        <span>Coming Soon</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={FreeBg} />
                                        </span>
                                        <span>Free</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={TRFlag} />
                                        </span>
                                        <span>35,00 $</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-img-name">
                                        <img alt={"RunVid"} src={Video1} className="img-43" />
                                        <div className="user-img-name-detail">
                                            <span className="user-img-text">Php Dersleri...</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={VideosSeries} />
                                        </span>
                                        <span>A series video</span>
                                    </div>
                                </td>
                                <td>
                                    Deneme
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
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={DataBg} />
                                        </span>
                                        <span>Coming Soon</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={FreeBg} />
                                        </span>
                                        <span>Free</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={TRFlag} />
                                        </span>
                                        <span>35,00 $</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-img-name">
                                        <img alt={"RunVid"} src={Video2} className="img-43" />
                                        <div className="user-img-name-detail">
                                            <span className="user-img-text">Php Dersleri...</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={VideosSingle} />
                                        </span>
                                        <span>A single video</span>
                                    </div>
                                </td>
                                <td>
                                    Deneme
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
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={DataBg} />
                                        </span>
                                        <span>Coming Soon</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={FreeBg} />
                                        </span>
                                        <span>Free</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={TRFlag} />
                                        </span>
                                        <span>35,00 $</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-img-name">
                                        <img alt={"RunVid"} src={Video1} className="img-43" />
                                        <div className="user-img-name-detail">
                                            <span className="user-img-text">Php Dersleri...</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={VideosSeries} />
                                        </span>
                                        <span>A series video</span>
                                    </div>
                                </td>
                                <td>
                                    Deneme
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
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={DataBg} />
                                        </span>
                                        <span>Coming Soon</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={FreeBg} />
                                        </span>
                                        <span>Free</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={TRFlag} />
                                        </span>
                                        <span>35,00 $</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-img-name">
                                        <img alt={"RunVid"} src={Video1} className="img-43" />
                                        <div className="user-img-name-detail">
                                            <span className="user-img-text">Php Dersleri...</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={VideosSingle} />
                                        </span>
                                        <span>A single video</span>
                                    </div>
                                </td>
                                <td>
                                    Deneme
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
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={DataBg} />
                                        </span>
                                        <span>Coming Soon</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={FreeBg} />
                                        </span>
                                        <span>Free</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={TRFlag} />
                                        </span>
                                        <span>35,00 $</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-img-name">
                                        <img alt={"RunVid"} src={Video1} className="img-43" />
                                        <div className="user-img-name-detail">
                                            <span className="user-img-text">Php Dersleri...</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={VideosSeries} />
                                        </span>
                                        <span>A series video</span>
                                    </div>
                                </td>
                                <td>
                                    Deneme
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
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={DataBg} />
                                        </span>
                                        <span>Coming Soon</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={FreeBg} />
                                        </span>
                                        <span>Free</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={TRFlag} />
                                        </span>
                                        <span>35,00 $</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-img-name">
                                        <img alt={"RunVid"} src={Video1} className="img-43" />
                                        <div className="user-img-name-detail">
                                            <span className="user-img-text">Php Dersleri...</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={VideosSingle} />
                                        </span>
                                        <span>A single video</span>
                                    </div>
                                </td>
                                <td>
                                    Deneme
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
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={DataBg} />
                                        </span>
                                        <span>Coming Soon</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={FreeBg} />
                                        </span>
                                        <span>Free</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={TRFlag} />
                                        </span>
                                        <span>35,00 $</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="user-img-name">
                                        <img alt={"RunVid"} src={Video1} className="img-43" />
                                        <div className="user-img-name-detail">
                                            <span className="user-img-text">Php Dersleri...</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={VideosSeries} />
                                        </span>
                                        <span>A series video</span>
                                    </div>
                                </td>
                                <td>
                                    Deneme
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
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={DataBg} />
                                        </span>
                                        <span>Coming Soon</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={FreeBg} />
                                        </span>
                                        <span>Free</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="img-text-item">
                                        <span>
                                            <img alt={"RunVid"} src={TRFlag} />
                                        </span>
                                        <span>35,00 $</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Pagination />
                {/* <!-- end #table --> */}

            </div>

        </main>
        )
    }
}
