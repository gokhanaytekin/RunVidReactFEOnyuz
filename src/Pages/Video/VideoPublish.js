import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import VideoLeftMenu from '../../Components/LeftMenus/VideoLeftMenu';

import calender from '../../assets/img/icons/calendar-black.svg';
import clock from '../../assets/img/icons/clock.svg';

//Components Imports
import SelectBox from '../../Components/Video/SquareSelectItem';
import MoneySelectBoxList from '../../Components/Video/MoneySelectBoxList';
import SaveAndContinue from '../../Components/Buttons/SaveAndContinue';
import SubsPack from '../../Components/Video/SubsPack';

export default class VideoPublish extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <VideoLeftMenu publishActive={true} />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">02</span>
                                <span className="title">Publish And Pricing</span>
                            </div>
                            <div className="settings-title-right">
                                <Link to="#" data-fancybox data-src="#add" data-modal={true} data-auto-focus={false}  className="btn btn-text-secondary btn-outline h-36 mr-10">Save</Link> 
                                <Link to="#" data-fancybox data-src="#add" data-modal={true} data-auto-focus={false}  className="btn btn-secondary h-36">Save And Continue</Link> 
                            </div>
                        </div>
                        <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                            <div className="grid">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="box-title-text">
                                        <div className="title">
                                            Select your publish type
                                        </div>
                                        <div className="text">
                                            If you’d like, pick a time to automatically release your videos (US Eastern Time)
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="select-box-list select-box-list-big">
                                            <SelectBox name={"Coming Soon"} width="38.201" height="38.201" id={"input1"} icon={"Calendar"} explanation={"Publish my page now, release my videos later."}  />
                                            <SelectBox name={"In pre-order"} width="38.201" height="38.201" id={"input2"} icon={"Clock"} explanation={"Publish my page and accept pre-orders."}  />
                                            <SelectBox name={"Ready to sell"} width="38.201" height="38.201" id={"input3"} icon={"Sell"} explanation={"Publish my page and release my videos."}  />
                                        </div>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label">Date</label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                        <img alt={"RunVid"} src={calender} />
                                                    </span>
                                            <input type="text" className="form-control placeholder" id="placeholder" placeholder="__/__/____" maxLength="10" autoComplete="off" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label">Time</label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                    <img alt={"RunVid"} src={clock} />                                                      
                                                    </span>
                                            <input type="text" className="form-control time" id="placeholder" placeholder="__:__" maxLength="10" autoComplete="off" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="box-title-text">
                                        <div className="title">
                                            Select your price type
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="select-box-list select-box-list-big">
                                            <SelectBox name={"Free"} width="38.201" height="38.201" id={"input5"} icon={"Free"} explanation={"Publish my page now, release my videos later."}  />
                                            <SelectBox name={"Rent & Buy"} width="38.201" height="38.201" id={"input6"} icon={"RentBuy"} explanation={"Stream or download your videos for a set time period and price."}  />
                                            <SelectBox name={"Subscription"} width="38.201" height="38.201" id={"input7"} icon={"Subs"} explanation={"unlimited streaming access to your videos for a recurring fee."}  />
                                        </div>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="box-title-text">
                                        <div className="title">
                                            Accept additional currencies
                                        </div>
                                        <div className="text">
                                            By default, Vimeo accepts United States Dollars (USD) for all sales. You may also choose to accept other currencies when your work is purchased in a non-U.S. region.
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <MoneySelectBoxList />
                                        </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                               <MoneySelectBoxList /> 
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <SubsPack />
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
