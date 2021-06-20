import React, { Component } from 'react';

//Icons Imports
import Close from '../../assets/img/icons/close.svg';

export default class AddQuestion extends Component {
    render() {
        return (
            // {/* <!-- add-question modal --> */}
            <div className="site-modal site-modal-sm" id="add-question">
            <div className="modal-header">
                <h4 className="modal-title">Ekle</h4>
                <button type="button" data-fancybox-close="" className="fancybox-button fancybox-close-small" title="Close"><img alt={"RunVid"} src={Close} /></button>
            </div>
            <div className="modal-body">
                <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                    <div className="grid">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Tanım</label>
                                <input type="text" placeholder="Tanım" className="form-control" name="menuname" required="" />
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
        // {/* <!-- end #add-question modal --> */}
        )
    }
}
