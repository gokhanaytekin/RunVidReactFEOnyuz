import React, { Component } from 'react';

//Icons Imports
import Close from '../../assets/img/icons/close.svg';

export default class AddSubtitle extends Component {
    render() {
        return (
            // {/* <!-- add-subtitle modal --> */}
            <div className="site-modal site-modal-sm" id="add-subtitle">
            <div className="modal-header">
                <div className="modal-top-title">
                    <div className="title">Subtitles Add</div>
                    <div className="text">information</div>
                </div>
                <button type="button" data-fancybox-close="" className="fancybox-button fancybox-close-small" title="Close"><img alt={"RunVid"} src={Close} /></button>
            </div>
            <div className="modal-body">
                <form id="site-form" className="mt-20" name="site-form" data-disable={false} noValidate={true}>
                    <div className="grid">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Language</label>
                                <div className="niceCountryInputSelector" data-selectedcountry="TR" data-showspecial={false} data-showflags={true} data-i18nall="All selected" data-i18nnofilter="No selection" data-i18nfilter="Filter" data-onchangecallback="onChangeCallback"></div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label className="form-label">Document</label>
                            </div>
                            <div id="drag-drop-area"></div>

                            <div className="UppyDragDropP"></div>
                            <div className="for-ProgressBar"></div>

                            <div className="uploaded-files">
                                <h5>Yüklenen dosyalar:</h5>
                                <ol></ol>
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
        // {/* <!-- end #add-subtitle modal --> */}
        )
    }
}
