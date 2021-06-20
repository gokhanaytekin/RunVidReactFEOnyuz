import React, { Component } from 'react';

//Icons Imports
import Close from '../../assets/img/icons/close.svg';
import Email from '../../assets/img/icons/email.svg';
import Calendar from '../../assets/img/icons/calendar.svg';
import Lock from '../../assets/img/icons/lock.svg';
import Calling from '../../assets/img/icons/calling.svg';


export default class AddUser extends Component {
    modalVisible = () => {
        if(this.state.modalShow) {
            this.setState({
                modalShow: false
            })
        }
        if(!this.state.modalShow) {
            this.setState({
                modalShow: true
            })
        }
    }
    render() {
        return (
            // {/* <!-- add-user modal --> */}
            <div className="site-modal site-modal-lg" id="add-user">
            <div className="modal-header">
                <h4 className="modal-title">Add User</h4>
                <button type="button" data-fancybox-close="" className="fancybox-button fancybox-close-small" title="Close"><img alt={"RunVid"} src={Close} /></button>
            </div>
            <div className="modal-body">
                <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                    <div className="grid">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input type="text" placeholder="Name" className="form-control" name="name" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Last Name</label>
                                <input type="text" placeholder="Last Name" className="form-control" name="lastname" required="" />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                            <img alt={"RunVid"} src={Email} />                                                    
                                        </span>
                                    <input type="email" placeholder="Email" className="form-control" name="email" required />
                                </div>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Birthday</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                            <img alt={"RunVid"} src={Calendar} />
                                        </span>
                                    <input type="text" className="form-control placeholder" id="placeholder" placeholder="__/__/____" maxLength="10" autoComplete="off" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                            <img alt={"RunVid"} src={Lock} />
                                        </span>
                                    <input type="password" placeholder="******" className="form-control" name="password" data-minlength="6" data-minlength-error="Parolanız 6 karakterden az olmamalı" id="inputPassword" required />
                                </div>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Repeat Password</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                            <img alt={"RunVid"} src={Lock} />
                                        </span>
                                    <input type="password" placeholder="******" className="form-control" name="password" data-match-error="Parolalar eşleşmiyor" data-match="#inputPassword" id="inputPasswordConfirm" required />
                                </div>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                           <img alt={"RunVid"} src={Calling} />                                                    
                                        </span>
                                    <input type="tel" id="phone" placeholder="Phone Number" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Language</label>
                                <div className="niceCountryInputSelector" data-selectedcountry="TR" data-showspecial={false} data-showflags={true} data-i18nall="All selected" data-i18nnofilter="No selection" data-i18nfilter="Filter" data-onchangecallback="onChangeCallback"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Time Zone</label>
                                <div className="niceCountryInputSelector" data-selectedcountry="TR" data-showspecial={false} data-showflags={true} data-i18nall="All selected" data-i18nnofilter="No selection" data-i18nfilter="Filter" data-onchangecallback="onChangeCallback"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">User Role</label>
                                <select name="role" className="form-control" required>
                                    <option value="">Standart</option>
                                    <option value="1">Standart</option>
                                </select>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">User Role</label>
                                <div className="select-box-list">
                                    <div className="select-box-list-item">
                                        <input type="radio" className="input" id="input1" name="input" required />
                                        <label htmlFor="input1" className="label">Active</label>
                                    </div>
                                    <div className="select-box-list-item">
                                        <input type="radio" className="input" id="input2" name="input" required />
                                        <label htmlFor="input2" className="label">Pasive</label>
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
        // {/* <!-- end #add-user modal --> */}
        )
    }
}
