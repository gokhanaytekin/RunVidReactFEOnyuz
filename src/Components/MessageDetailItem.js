import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Pictures Imports
import Avatar from '../assets/img/avatar.svg';

export default class MessageDetailItem extends Component {
    render() {
        return (
            <div className="message-detail-item">
                <div className="message-detail-top">
                    <div className="user-img-name">
                        <img alt={"RunVid"} src={Avatar} className="img-43" />
                        <div className="user-img-name-detail">
                            <span className="user-img-name-surname">Veysel Akbulut</span>
                            <div className="user-img-name-text">24/04/21 15:00</div>
                        </div>
                    </div>
                    <div className="message-detail-top-buttons">
                        <Link to="#" className="message-btn message-delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17.7" height="19.5" viewBox="0 0 17.7 19.5">
                                <g id="Icon_feather-trash" data-name="Icon feather-trash" transform="translate(-3.75 -2.25)">
                                    <path id="Path_33" data-name="Path 33" d="M4.5,9H20.7" transform="translate(0 -2.4)" fill="none" stroke="#c40007" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                    <path id="Path_34" data-name="Path 34" d="M20.1,6.6V19.2A1.8,1.8,0,0,1,18.3,21h-9a1.8,1.8,0,0,1-1.8-1.8V6.6m2.7,0V4.8A1.8,1.8,0,0,1,12,3h3.6a1.8,1.8,0,0,1,1.8,1.8V6.6" transform="translate(-1.2)" fill="none" stroke="#c40007" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                </g>
                            </svg>
                        </Link> 
                        <Link to="#" className="message-btn message-fav-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21.383" height="19.856" viewBox="0 0 21.383 19.856">
                                <path id="Icon_ionic-ios-star-half" data-name="Icon ionic-ios-star-half" d="M22.822,10.248H15.8L13.667,3.881a.773.773,0,0,0-1.451,0l-2.134,6.367H3.014a.766.766,0,0,0-.764.764.561.561,0,0,0,.014.129.734.734,0,0,0,.32.539l5.771,4.067L6.14,22.186a.766.766,0,0,0,.263.859.739.739,0,0,0,.43.186.936.936,0,0,0,.477-.172l5.632-4.014,5.632,4.014a.894.894,0,0,0,.477.172.686.686,0,0,0,.425-.186.757.757,0,0,0,.263-.859l-2.215-6.439,5.723-4.1.138-.119a.8.8,0,0,0,.248-.511A.808.808,0,0,0,22.822,10.248Zm-2.262,1.68-3.809,2.735a1.34,1.34,0,0,0-.487,1.518L17.7,20.367a.192.192,0,0,1-.291.22l-3.694-2.635,0,0a1.78,1.78,0,0,1-.768-1.456v-10a.093.093,0,0,1,.181-.029h0l1.413,4.21a1.335,1.335,0,0,0,1.265.912h4.644A.191.191,0,0,1,20.559,11.928Z" transform="translate(-2.25 -3.375)" fill="#ffb300"/>
                            </svg>
                        </Link> 
                    </div>
                </div>
                <div className="message-text-detail">
                    <div className="title">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…
                    </div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit…
                    </div>
                </div>
            </div>
        )
    }
}
