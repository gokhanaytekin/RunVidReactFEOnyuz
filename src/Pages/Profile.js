import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Pictures Imports
import Avatar from '../assets/img/avatar.svg';

//Components Imports
import ProfileItem from '../Components/Profile/profileInput';

export default class Profile extends Component {
    state = {
        
    }
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="profile-box">
                            <div className="profile-box-top">
                                <div className="user-img-name fs-20">
                                    <img alt={"RunVid"} src={Avatar} className="img-97" />
                                    <div className="user-img-name-detail">
                                        <span className="user-img-name-surname">Veysel Akbulut</span>
                                        <div className="user-img-name-text">User Id: <span>153264</span></div>
                                    </div>
                                </div>
                                <div className="profile-box-buttons mt-20">
                                    <Link to="#" className="btn btn-primary h-42">Update Photo</Link> 
                                    <Link to="#" data-fancybox data-src="#change-pass" data-modal={true} data-auto-focus={false}  className="btn btn-secondary h-42">Password change</Link> 
                                </div>
                            </div>
                            <hr/>
                            <div className="proflie-box-bottom">
                                <div className="proflie-box-bottom-title">My Plans</div>
                                <div className="band">
                                    <div className="progress-item">
                                        <div className="progress-top">
                                            <div className="progress-name">Bandwith</div>
                                            <div className="progress-right">
                                                <span>504 GB</span> of 1 TB
                                            </div>
                                        </div>
                                        <div className="progress-box">
                                            <div className="progress-num left-30y" >
                                                <p>30%</p>
                                            </div>
                                            <span className={"w-30y"} ></span>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <div className="progress-top">
                                            <div className="progress-name">Storage Used</div>
                                            <div className="progress-right">
                                                <span>504 GB</span> of 1 TB
                                            </div>
                                        </div>
                                        <div className="progress-box">
                                            <div className="progress-num left-60y" >
                                                <p>60%</p>
                                            </div>
                                            <span className={"w-60y"} ></span>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <div className="progress-top">
                                            <div className="progress-name">Valid upto</div>
                                            <div className="progress-right">
                                                <Link to="#"> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.063" height="14.072" viewBox="0 0 14.063 14.072">
                                                        <path id="Icon_material-refresh" data-name="Icon material-refresh" d="M18.011,8.067a7.037,7.037,0,1,0,1.829,6.728H18.011a5.274,5.274,0,1,1-4.969-7.036,5.2,5.2,0,0,1,3.711,1.566l-2.832,2.832h6.156V6Z" transform="translate(-6.015 -6)" fill="#c40007"/>
                                                    </svg>
                                                </Link> 
                                                15:00 04.09.2021
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="content-title">
                            My Profile
                        </div>
                        <div className="form-info-list">
                            <ProfileItem type={'email'}/>
                            <ProfileItem type={'name'}/>
                            <ProfileItem type={'lastName'}/>
                            <ProfileItem type={'number'}/>
                            <ProfileItem type={'birthday'}/>
                            <ProfileItem type={'timezone'}/>
                            <ProfileItem type={'language'}/>
                        </div>
                    </div>
                </div>
                {/* <!-- end #profile --> */}
            </div>
        </main>
        )
    }
}
