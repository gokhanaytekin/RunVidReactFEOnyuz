import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Pictures Imports
import Avatar from '../assets/img/avatar.svg';


export default class MessageItem extends Component {
    render() {
        return (
            <div>
                <Link to="#" className="messages-item">
                    <div className="message-user-img">
                        <img alt={"RunVid"} src={Avatar} className="img-37" />
                    </div>
                    <div className="date">24/04/21 15:00</div>
                    <div className="message-detail">
                        <div className="user-name">Veysel Akbulut</div>
                        <div className="message-text">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr…
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
