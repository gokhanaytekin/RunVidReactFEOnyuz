import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class MailLeftMenu extends Component {
    render() {
        return (
            <div className="content-sidebar">
                <div className="sidebar-header">
                    <span className="title">Chats</span>
                    <Link to={"/mail/new"} className="btn btn-secondary h-32">New</Link> 
                </div>
                <Link to="#" className="sidebar-item active">
                    <div className="sidebar-item-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.439" height="19.857" viewBox="0 0 18.439 19.857">
                            <path id="Icon_ionic-ios-mail-open" data-name="Icon ionic-ios-mail-open" d="M21.348,10.131c-.177-.177-7.016-7.154-7.016-7.154a2.435,2.435,0,0,0-3.475,0S4.049,9.918,3.84,10.135a1.781,1.781,0,0,0-.465,1.157v9.4a1.423,1.423,0,0,0,1.418,1.418H20.4a1.423,1.423,0,0,0,1.418-1.418V11.248A1.706,1.706,0,0,0,21.348,10.131Zm-.86,1.875-3.595,3.759a.086.086,0,0,0,0,.124l3.338,3.555a.575.575,0,0,1,0,.816.578.578,0,0,1-.816,0l-6.693-7.145a.174.174,0,0,0-.257,0L5.777,20.254a.578.578,0,0,1-.816,0,.575.575,0,0,1,0-.816L8.3,15.884a.094.094,0,0,0,0-.124L4.691,12a1.011,1.011,0,0,1,.714-1.587H19.784A1.046,1.046,0,0,1,20.488,12.006Z" transform="translate(-3.375 -2.25)" fill="#233f93"/>
                        </svg>Inbox
                    </div>
                    <div className="sidebar-item-num">+2</div>
                </Link> 
                <Link to="#" className="sidebar-item">
                    <div className="sidebar-item-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15.274" height="19.856" viewBox="0 0 15.274 19.856">
                            <path id="Icon_ionic-md-document" data-name="Icon ionic-md-document" d="M15.914,3.375H8.659A1.909,1.909,0,0,0,6.75,5.284V21.322a1.909,1.909,0,0,0,1.909,1.909H20.115a1.909,1.909,0,0,0,1.909-1.909V9.485Zm-.764,6.873V4.9L20.5,10.248Z" transform="translate(-6.75 -3.375)" fill="#00c488"/>
                        </svg>Outbox
                    </div>
                </Link> 
                <Link to="#" className="sidebar-item">
                    <div className="sidebar-item-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.383" height="19.856" viewBox="0 0 21.383 19.856">
                            <path id="Icon_ionic-ios-star-half" data-name="Icon ionic-ios-star-half" d="M22.822,10.248H15.8L13.667,3.881a.773.773,0,0,0-1.451,0l-2.134,6.367H3.014a.766.766,0,0,0-.764.764.561.561,0,0,0,.014.129.734.734,0,0,0,.32.539l5.771,4.067L6.14,22.186a.766.766,0,0,0,.263.859.739.739,0,0,0,.43.186.936.936,0,0,0,.477-.172l5.632-4.014,5.632,4.014a.894.894,0,0,0,.477.172.686.686,0,0,0,.425-.186.757.757,0,0,0,.263-.859l-2.215-6.439,5.723-4.1.138-.119a.8.8,0,0,0,.248-.511A.808.808,0,0,0,22.822,10.248Zm-2.262,1.68-3.809,2.735a1.34,1.34,0,0,0-.487,1.518L17.7,20.367a.192.192,0,0,1-.291.22l-3.694-2.635,0,0a1.78,1.78,0,0,1-.768-1.456v-10a.093.093,0,0,1,.181-.029h0l1.413,4.21a1.335,1.335,0,0,0,1.265.912h4.644A.191.191,0,0,1,20.559,11.928Z" transform="translate(-2.25 -3.375)" fill="#ffb300"/>
                        </svg>Important
                    </div>
                </Link> 
                <Link to="#" className="sidebar-item">
                    <div className="sidebar-item-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.856" height="19.856" viewBox="0 0 19.856 19.856">
                            <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M13.3,3.375A9.928,9.928,0,1,0,23.231,13.3,9.926,9.926,0,0,0,13.3,3.375Zm.668,10.787a.67.67,0,0,1-.668.668H8.721a.668.668,0,1,1,0-1.336h3.914v-6.3a.668.668,0,1,1,1.336,0Z" transform="translate(-3.375 -3.375)" fill="#00bcd2"/>
                        </svg>Draft
                    </div>
                </Link> 
                <Link to="#" className="sidebar-item">
                    <div className="sidebar-item-title">
                        <svg id="Icon_ionic-ios-trash" data-name="Icon ionic-ios-trash" xmlns="http://www.w3.org/2000/svg" width="14.273" height="19.858" viewBox="0 0 14.273 19.858">
                            <path id="Path_1084" data-name="Path 1084" d="M9.359,9l1.22,15.033a1.514,1.514,0,0,0,1.515,1.515h7.292A1.514,1.514,0,0,0,20.9,24.033L22.106,9Zm3.186,13.7L12.2,10.655h.957L13.511,22.7Zm3.636,0h-.931V10.655h.931Zm2.7,0h-.962l.352-12.049h.957Z" transform="translate(-8.578 -5.69)" fill="#c40007"/>
                            <path id="Path_1085" data-name="Path 1085" d="M21.019,5.948H19.157L17.8,4.759a1.048,1.048,0,0,0-.683-.259H13.763a1.065,1.065,0,0,0-.693.259L11.71,5.948H9.848c-.91,0-1.551.434-1.551,1.345H22.57C22.57,6.382,21.929,5.948,21.019,5.948Z" transform="translate(-8.297 -4.5)" fill="#c40007"/>
                        </svg>Deleted
                    </div>
                </Link> 
            </div>
        )
    }
}
