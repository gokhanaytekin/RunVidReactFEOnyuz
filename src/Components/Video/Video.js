import React, { Component } from 'react';

//Pictures Imports
import Move from '../../assets/img/move.svg';
import Video1 from '../../assets/img/video-1.jpg';

export default class Video extends Component {
    render() {
        return (
            <div className="move-id">
                <div className="move-id-box">
                    <img alt={"RunVid"} src={Move} />
                </div>
                <div className="user-img-name trailer">
                    <img alt={"RunVid"} src={Video1} className="img-43" />
                    <div className="user-img-name-detail">
                        <div className="user-img-name-surname">Videoname.mp4 <span className="trailer-box">Trailer</span></div>
                        <span className="user-img-name-text red-text">Processing</span>
                    </div>
                </div>
            </div>
        )
    }
}
