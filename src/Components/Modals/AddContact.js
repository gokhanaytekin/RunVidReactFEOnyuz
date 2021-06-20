import React, { Component } from 'react';

//Icons Imports
import Close from '../../assets/img/icons/close.svg';

export default class AddContact extends Component {
    render() {
        return (
            <div className="site-modal site-modal-md" id="add-contact">
                <div className="modal-header">
                    <h4 className="modal-title">Contact Request Contect</h4>
                    <button type="button" data-fancybox-close="" className="fancybox-button fancybox-close-small" title="Close"><img alt={"RunVid"} src={Close} /></button>
                </div>
                <div className="modal-body">
                    <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                        <div className="grid">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="matter-list">
                                    <div className="matter-item">
                                        <span className="matter-item-title">Request Time</span>
                                        <span className="dotdot">:</span>
                                        <div className="matter-item-text">12.10.2021 21:09:42</div>
                                    </div>
                                    <div className="matter-item">
                                        <span className="matter-item-title">Name Surname</span>
                                        <span className="dotdot">:</span>
                                        <div className="matter-item-text">Veysel Akbulut</div>
                                    </div>
                                    <div className="matter-item">
                                        <span className="matter-item-title">Phone Number</span>
                                        <span className="dotdot">:</span>
                                        <div className="matter-item-text">+44 214 5217</div>
                                    </div>
                                    <div className="matter-item">
                                        <span className="matter-item-title">Email</span>
                                        <span className="dotdot">:</span>
                                        <div className="matter-item-text">örnek@gmail.com</div>
                                    </div>
                                    <div className="matter-item">
                                        <span className="matter-item-title">System Language / Country</span>
                                        <span className="dotdot">:</span>
                                        <div className="matter-item-text">En / İm</div>
                                    </div>
                                    <div className="matter-item">
                                        <span className="matter-item-title">Topic</span>
                                        <span className="dotdot">:</span>
                                        <div className="matter-item-text">İstek</div>
                                    </div>
                                    <div className="matter-item">
                                        <span className="matter-item-title">Message</span>
                                        <span className="dotdot">:</span>
                                        <div className="matter-item-text">Video izlerken bana bir link verilmesi...</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <label className="form-label">Reply By Mail</label>
                                    <select name="reply" id="" className="form-control">
                                        <option value="">Response Type</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <label className="form-label">Answer</label>
                                    <textarea name="description" placeholder="Answer" className="form-control"></textarea>
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
        )
    }
}
