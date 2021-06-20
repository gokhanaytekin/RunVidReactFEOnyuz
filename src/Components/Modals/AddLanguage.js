import React, { Component } from 'react';

//Icons Imports
import Close from '../../assets/img/icons/close.svg';

export default class AddLanguage extends Component {
    render() {
        return (
            <div className="site-modal site-modal-sm" id="add-language">
            <div className="modal-header">
                <h4 className="modal-title">Add Language</h4>
                <button type="button" data-fancybox-close="" className="fancybox-button fancybox-close-small" title="Close"><img alt={"RunVid"} src={Close} /></button>
            </div>
            <div className="modal-body">
                <div id="site-form" name="site-form" data-disable={false} noValidate={true}>
                    <div className="grid">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Language Code</label>
                                {this.props.code}
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Language Name</label>
                                {this.props.name}
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Status</label>
                                <div className="select-box-list">
                                    <div className="select-box-list-item">
                                        {this.props.pasive}
                                    </div>
                                    <div className="select-box-list-item">
                                        {this.props.active}
                                    </div>
                                </div>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button data-fancybox-close className="btn btn-primary pl-50 pr-50 h-42">Cancel</button>
                        {this.props.submit}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
