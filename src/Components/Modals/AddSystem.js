import React, { Component } from 'react';

//Icons Imports
import Close from '../../assets/img/icons/close.svg';

import FileInput from '../../Components/FileInput';

export default class AddSystem extends Component {
    render() {
        return (
            // {/* <!-- add-system modal --> */}
            <div className="site-modal site-modal-md" id="add-system">
            <div className="modal-header">
                <h4 className="modal-title">Add System Properties</h4>
                <button type="button" data-fancybox-close="" className="fancybox-button fancybox-close-small" title="Close"><img alt={"RunVid"} src={Close} /></button>
            </div>
            <div className="modal-body">
                <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                    <div className="grid">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Title</label>
                                <input type="text" placeholder="Title" className="form-control" name="menuname" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Description</label>
                                <textarea name="description" placeholder="Description" className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <FileInput />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Icon</label>
                                <input type="text" placeholder="Icon" className="form-control" name="icon" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Color</label>
                                <input type="text" placeholder="Color" className="form-control" name="icon" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Status</label>
                                <div className="select-box-list">
                                    <div className="select-box-list-item">
                                        <input type="radio" className="input" id="input1" name="input" required />
                                        <label htmlFor="input1" className="label">Passive</label>
                                    </div>
                                    <div className="select-box-list-item">
                                        <input type="radio" className="input" id="input2" name="input" required />
                                        <label htmlFor="input2" className="label">Active</label>
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
        // {/* <!-- end #add-system modal --> */}
        )
    }
}
