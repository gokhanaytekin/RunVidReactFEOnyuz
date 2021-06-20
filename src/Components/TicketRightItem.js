import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Icons Imports
import Video1 from '../assets/img/video-1.jpg';
import Avatar2 from '../assets/img/avatar2.svg';

export default class TicketRightItem extends Component {
    render() {
        return (
            <div className="ticket-message-item">
                <div className="ticket-mesage-item-top">
                    <div className="left">
                        <div className="user-img-name">
                            <img alt={"RunVid"} src={Avatar2} className="img-43" />
                            <div className="user-img-name-detail">
                                <span className="user-img-name-surname">Veysel Akbulut</span>
                                <span className="user-img-name-text">153264</span>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-top">
                            <div className="active-pasive imp">
                                <div className="pasive-box-50"></div>
                                <span>Acil</span>
                            </div>
                            <div className="ticket-item-box green">
                                Öneri
                            </div>
                            <span className="id">#152264</span>
                        </div>
                        <span className="date">01/03/2021 15:00</span>
                    </div>
                </div>
                <div className="ticket-message-text">
                    <div className="title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo…</div>
                    <div className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…</div>
                </div>
                <div className="grid">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="ticket-mesage-bottom-list">
                            <div className="title">İlgili Link</div>
                            <div className="text">www.runvid.com/customer</div>
                            <div className="title">Durum</div>
                            <div className="text orange">Beklemede</div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="ticket-mesage-bottom-list">
                            <div className="title">Video</div>
                            <Link to="#" className="image">
                                <img alt={"RunVid"} src={Video1} />
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
