import React, { Component } from 'react';

//Components Imports
import VideoLeftMenu from '../../Components/LeftMenus/VideoLeftMenu';
import SelectBox from '../../Components/Video/SquareSelectItem';
import Input from '../../Components/PricePlans/Input';

//Icons Imports
import Info from '../../assets/img/icons/info.svg';

//TextEditor Imports
import { CKEditor } from '@ckeditor/ckeditor5-react';
import classicEditor from '@ckeditor/ckeditor5-build-classic';
import SaveAndContinue from '../../Components/Buttons/SaveAndContinue';


export default class VideoUpload extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <VideoLeftMenu uploadActive={true} />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">01</span>
                                <span className="title">General</span>
                            </div>
                            <SaveAndContinue />
                        </div>
                        <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                            <div className="grid">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="box-title-text">
                                        <div className="title">
                                            Select Your Pack
                                        </div>
                                        <div className="text">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea…
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="select-box-list select-box-list-big">
                                            <SelectBox name={"A single video"} width="75" height="75" id={"input1"} icon={"SingleVideo"} explanation={" "}  />
                                            <SelectBox name={"A series of videos"} width="75" height="75" id={"input2"} icon={"SeriesVideo"} explanation={" "}  />
                                        </div>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="box-title-text">
                                        <div className="title">
                                            Basic Info
                                        </div>
                                        <div className="text">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea…
                                        </div>
                                    </div>
                                    <Input title={"Title"} />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label no-column">Description <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                                        <CKEditor 
                                            editor={ classicEditor }
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <Input title={"Category"} />
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <Input title={"Tag"} />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <Input title={"Release Year"} dd />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <Input title={"Content Raiting"} dd />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <Input title={"Primary Language"} dd />
                                </div>
                            </div>
                            <div className="settings-title settings-title-footer">
                                <div className="settings-title-left">
                                </div>
                                <SaveAndContinue />
                            </div>
                        </form>
                    </div>
                    {/* <!-- end #profile --> */}

                </div>
            </div>
        </main>
        )
    }
}
