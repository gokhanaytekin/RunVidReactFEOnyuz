import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

//Pictures Imports
import PlayBtnIcon from '../assets/img/icons/play-btn-icon.svg';

class VideosItem extends Component {
    render() {
        const  {t} = this.props
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="video-item column">
                    <div className="left">
                        <div className="top">
                            <div className={"active-pasive " + (this.props.status ? 'online' : 'offline') }>
                                <div className={(this.props.status ? 'active' : 'pasive') + "-box-50"}></div>
                                <span>{this.props.status ? 'Ready' : 'Error'}</span>
                            </div>
                            <div className="date">{this.props.date}</div>
                        </div>
                        <div className="video-img-text">
                            <Link to="#" className="video-img">
                                <img alt={"RunVid"} src={PlayBtnIcon} className="play-btn-icon" />
                                <img alt={"RunVid"} src={this.props.img} className="video-img-img" />
                            </Link>
                            <div className="video-text">
                                <div className="title">{this.props.title}</div>
                                <div className="subtitle">{this.props.subtitle}</div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="buttons">
                            <Link to="#" className="btn btn-outline btn-text-secondary h-42">{t('videosItemShare')}</Link>
                            <Link to="#" className="btn btn-secondary h-42">{this('ticketSideItemEdit')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(VideosItem);