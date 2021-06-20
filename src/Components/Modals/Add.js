import React, { Component } from 'react';

//Components Imports
import FileInput from '../../Components/FileInput';

//Icons Imports
import Close from '../../assets/img/icons/close.svg';

export default class Add extends Component {
    render() {
        return (
            // {/* <!-- add modal --> */}
            <div className="site-modal site-modal-md" id="add">
            <div className="modal-header">
                <div className="modal-top-title">
                    <div className="title">Ekle</div>
                    <div className="text">Kütüphaneye Yeni Dil Ekle</div>
                </div>
                <button type="button" data-fancybox-close="" className="fancybox-button fancybox-close-small" title="Close"><img alt={"RunVid"} src={Close} /> </button>
            </div>
            <div className="modal-body mt-30">
                <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                    <div className="grid">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Tanım</label>
                                <input type="text" placeholder="Tanım" className="form-control" name="menuname" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Kod</label>
                                <input type="text" placeholder="Kod" className="form-control" name="menuname" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Dil Seçin</label>
                                <select name="dil" id="" className="form-control" required>
                                    <option value="">Puan</option>
                                </select>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Para Birimi Seçin</label>
                                <select name="dil" id="" className="form-control" required>
                                    <option value="">Puan</option>
                                </select>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <FileInput />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Durum</label>
                                <div className="toggle-group">
                                    <input type="checkbox" name="on-off-switch" id="on-off-switch"  tabIndex="1" />
                                    <label htmlFor="on-off-switch">
                                    </label>
                                    <div className="onoffswitch pull-right" aria-hidden={true}>
                                        <div className="onoffswitch-label">
                                            <div className="onoffswitch-inner"></div>
                                            <div className="onoffswitch-switch"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button data-fancybox-close className="btn btn-primary pl-50 pr-50 h-42">Cancel</button>
                        <button type="submit" className="btn btn-secondary pl-50 pr-50 h-42">Continue</button>
                    </div>
                </form>
            </div>
        </div>
        // {/* <!-- end #add modal --> */}
        )
    }
}
