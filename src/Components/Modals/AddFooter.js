import React, { Component } from 'react';

//Icons Imports
import Close from '../../assets/img/icons/close.svg';

export default class AddFooter extends Component {
    render() {
        return (
            // {/* <!-- footer modal --> */}
            <div className="site-modal site-modal-sm" id="add-footer">
            <div className="modal-header">
                <div className="modal-top-title">
                    <div className="title">Add Footer</div>
                    <div className="text">Foot Alt Menü Ekle</div>
                </div>
                <button type="button" data-fancybox-close="" className="fancybox-button fancybox-close-small" title="Close"><img alt={"RunVid"} src={Close} /></button>
            </div>
            <div className="modal-body">
                <form id="site-form" className="mt-20" name="site-form" data-disable={false} noValidate={true}>
                    <div className="grid">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Tanım</label>
                                <input type="text" placeholder="Log Ekle" className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Yapılacak İşlem</label>
                                <select name="" className="form-control">
                                    <option value="">Yapılacak İşlem</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">URL</label>
                                <input type="text" placeholder="URL" className="form-control" />
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
        // {/* <!-- end #footer modal --> */}
        )
    }
}
