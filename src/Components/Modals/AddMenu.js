import React, { Component } from 'react';

//Icons Imports
import Close from '../../assets/img/icons/close.svg';

export default class AddMenu extends Component {
    render() {
        return (
            // {/* <!-- add-menu modal --> */}
            <div className="site-modal site-modal-md" id="add-menu">
            <div className="modal-header">
                <h4 className="modal-title">Add Menu</h4>
                <button type="button" data-fancybox-close="" className="fancybox-button fancybox-close-small" title="Close"><img alt={"RunVid"} src={Close} /></button>
            </div>
            <div className="modal-body">
                <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                    <div className="grid">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Menu Name</label>
                                <input type="text" placeholder="Menu Name" className="form-control" name="menuname" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Seo Url</label>
                                <input type="text" placeholder="Seo Url" className="form-control" name="seourl" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Url</label>
                                <input type="text" placeholder="Url" className="form-control" name="url" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Path</label>
                                <input type="text" placeholder="Path" className="form-control" name="path" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Icon</label>
                                <input type="text" placeholder="Icon" className="form-control" name="icon" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Main Menu</label>
                                <div className="select-box-list">
                                    <div className="select-box-list-item">
                                        <input type="radio" className="input" id="input1" name="input" required />
                                        <label htmlFor="input1" className="label">Show</label>
                                    </div>
                                    <div className="select-box-list-item">
                                        <input type="radio" className="input" id="input2" name="input" required />
                                        <label htmlFor="input2" className="label">Hidden</label>
                                    </div>
                                </div>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Status</label>
                                <div className="select-box-list">
                                    <div className="select-box-list-item">
                                        <input type="radio" className="input" id="input3" name="inputt" required />
                                        <label htmlFor="input3" className="label">Show</label>
                                    </div>
                                    <div className="select-box-list-item">
                                        <input type="radio" className="input" id="input4" name="inputt" required />
                                        <label htmlFor="input4" className="label">Hidden</label>
                                    </div>
                                </div>
                                <div className="help-block with-errors"></div>
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
        // {/* <!-- end #add-menu modal --> */}
        )
    }
}
