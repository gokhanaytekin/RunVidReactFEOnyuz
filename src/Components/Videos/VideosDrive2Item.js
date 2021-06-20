import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Icons Imports
import PlayBtnIcon from '../../assets/img/icons/play-btn-icon.svg';
import Video1 from '../../assets/img/video-1.jpg';

export default class VideosDrive2Item extends Component {
    render() {
        return (
           <div className="video-item">
                <div className="left">
                    <div className="top">
                        <div className="active-pasive online">
                            <div className="active-box-50"></div>
                            <span>Ready</span>
                        </div>
                        <div className="date">12/03/2021 15:00:00</div>
                    </div>
                    <div className="video-img-text">
                        <Link to="#" className="video-img">
                            <img alt={"RunVid"} src={PlayBtnIcon} className="play-btn-icon" />
                            <img alt={"RunVid"} src={Video1} className="video-img-img" />
                        </Link> 
                        <div className="video-text">
                            <div className="title">Video deneme.mp4</div>
                            <div className="subtitle">ID: 7Ada785cfsads</div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="buttons">
                        <Link to="#" className="btn btn-outline btn-text-secondary h-42">Share</Link> 
                        <Link to="#" className="btn btn-secondary h-42">Edit</Link> 
                    </div>
                </div>
            </div>
        )
    }
}
