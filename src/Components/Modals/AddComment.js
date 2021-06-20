import React, { Component } from 'react';

import FileInput from '../../Components/FileInput';

//Icons Imports
import Close from '../../assets/img/icons/close.svg';

export default class AddComment extends Component {
    render() {
        return (
            // {/* <!-- comment modal --> */}
            <div className="site-modal site-modal-sm" id="add-comment">
            <div className="modal-header">
                <div className="modal-top-title">
                    <div className="title">Ekle</div>
                    <div className="text">Kategori Ekle</div>
                </div>
                <button type="button" data-fancybox-close="" className="fancybox-button fancybox-close-small" title="Close"><img alt={"RunVid"} src={Close} /></button>
            </div>
            <div className="modal-body">
                <form id="site-form" className="mt-20" name="site-form" data-disable={false} noValidate={true}>
                    <div className="grid">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Ad Soyad</label>
                                <input type="text" placeholder="Ad Soyad" className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Yorum</label>
                                <textarea name="" className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Puan</label>
                                <select name="" className="form-control">
                                    <option value="">Puan</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <FileInput />
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button data-fancybox-close className="btn btn-primary pl-50 pr-50 h-42">Cancel</button>
                        <button type="submit" className="btn btn-secondary pl-50 pr-50 h-42">Continue</button>

                    </div>
                </form>
            </div>
        </div>
        // {/* <!-- end #solution modal --> */}
        )
    }
}
