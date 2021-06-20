import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import VideoLeftMenu from '../../Components/LeftMenus/VideoLeftMenu';
import SaveAndContinue from '../../Components/Buttons/SaveAndContinue';
import Promotion from '../../Components/Video/PromotionTr';

export default class VideoPromotions extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <VideoLeftMenu promotionsActive={true} />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">05</span>
                                <span className="title">Promotions</span>
                            </div>
                            <SaveAndContinue />
                        </div>
                        <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                            <div className="grid">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="box-title-text between">
                                        <div className="title">
                                            Promotions
                                        </div>
                                        <div className="settings-title-right">
                                            <Link to="#" data-fancybox data-src="#add" data-modal={true} data-auto-focus={false}  className="btn btn-primary h-36 mr-10">Add</Link> 
                                        </div>
                                    </div>
                                    {/* <!-- table --> */}
                                    <div className="dash-table">
                                        <table className="video-upload-table">
                                            <tbody id="table">
                                                <Promotion name="Yaz İndirimi" discount={20} code="#AF45COUNT20" number={200} />
                                                <Promotion name="Yaz İndirimi" discount={20} code="#AF45COUNT20" number={200} />
                                                <Promotion name="Yaz İndirimi" discount={20} code="#AF45COUNT20" number={200} />
                                                <Promotion name="Yaz İndirimi" discount={20} code="#AF45COUNT20" number={200} />
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <!-- end #table --> */}
                                </div>

                            </div>
                            <div className="settings-title settings-title-footer">
                                <div className="settings-title-left">
                                </div>
                                <SaveAndContinue />
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
