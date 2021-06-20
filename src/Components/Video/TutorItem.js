import React, { Component } from 'react';

//Pictures Imports
import Move from '../../assets/img/move.svg';
import Avatar from '../../assets/img/avatar.svg';

export default class TutorItem extends Component {
    render() {
        return (
            <div className="move-id">
                <div className="move-id-box">
                    <img alt={"RunVid"} src={Move} />
                </div>
                <div className="user-img-name">
                    <img alt={"RunVid"} src={Avatar} className="img-43" />
                    <div className="user-img-name-detail">
                        <div className="user-img-name-surname">{this.props.tutorName}</div>
                        <span className="user-img-name-text blue-text">{this.props.tutorJob}</span>
                    </div>
                </div>
            </div>
        )
    }
}
