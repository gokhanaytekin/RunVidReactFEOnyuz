import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Create from '../../assets/img/icons/create.svg';

export default class VideoLeftMenu extends Component {
    render() {
        return (
            <div className="settings-left">
                <div className="icon-title">
                    <img alt={"RunVid"} src={Create} /> Create new video
                </div>
                <div className="settings-menu">
                    <Link to="/video/upload">
                        <Link to="#" className={"settings-link " + (this.props.uploadActive ? 'active' : '')}>
                            <div className="settings-num">01</div>
                            <span>General</span>
                        </Link>
                    </Link>
                    <Link to="/video/publish">
                        <Link to="#" className={"settings-link " + (this.props.publishActive ? 'active' : '')}>
                            <div className="settings-num">02</div>
                            <span>Publish And Pricing</span>
                        </Link>
                    </Link>
                    <Link to="/video/videos">
                        <Link to="#" className={"settings-link " + (this.props.videosActive ? 'active' : '')}>
                            <div className="settings-num">03</div>
                            <span>Videos</span>
                        </Link>
                    </Link>
                    <Link to="/video/details">
                        <Link to="#" className={"settings-link " + (this.props.detailsActive ? 'active' : '')}>
                            <div className="settings-num">04</div>
                            <span>Details</span>
                        </Link>
                    </Link>
                    <Link to="/video/promotions">
                        <Link to="#" className={"settings-link " + (this.props.promotionsActive ? 'active' : '')}>
                            <div className="settings-num">05</div>
                            <span>Promotions</span>
                        </Link>
                    </Link>
                    <Link to="/video/audience">
                        <Link to="#" className={"settings-link " + (this.props.audienceActive ? 'active' : '')}>
                            <div className="settings-num">06</div>
                            <span>Audience</span>
                        </Link>
                    </Link>
                </div>
            </div>
        )
    }
}
