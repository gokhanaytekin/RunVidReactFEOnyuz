import React, { Component } from 'react';

//Icons Imports
import Close from '../../assets/img/icons/close.svg';

export default class Language extends Component {
    render() {
        return (
            <div className="site-modal site-modal-md" id="language">
                    <div className="modal-header">
                        <h4 className="modal-title">Language Settings</h4>
                        <button type="button" data-fancybox-close="" className="fancybox-button fancybox-close-small" title="Close"><img alt={"RunVid"} src={Close} /></button>
                    </div>
                    <div className="modal-body">
                        <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                            <div className="grid">
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label">Current</label>
                                        <input type="text" value="Dashboard" className="form-control" name="current" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label no-column align-items-center">
                                            <img alt={"RunVid"} src="assets/img/flag/en.svg" className="lang-set" />
                                            English
                                        </label>
                                        <input type="text" value="Dashboard" className="form-control" name="lang" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label no-column align-items-center">
                                            <img alt={"RunVid"} src="assets/img/flag/tr.svg" className="lang-set" />
                                            Türkçe
                                        </label>
                                        <input type="text" value="Dashboard" className="form-control" name="lang" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label no-column align-items-center">
                                            <img alt={"RunVid"} src="assets/img/flag/fr.svg" className="lang-set" />
                                            Fransızca
                                        </label>
                                        <input type="text" value="Tableau de bord" className="form-control" name="lang" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label no-column align-items-center">
                                            <img alt={"RunVid"} src="assets/img/flag/ar.svg" className="lang-set" />
                                            Arapça
                                        </label>
                                        <input type="text" value="لوحة القيادة" className="form-control" name="lang" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label no-column align-items-center">
                                            <img alt={"RunVid"} src="assets/img/flag/gr.svg" className="lang-set" />
                                            Almanca
                                        </label>
                                        <input type="text" value="Instrumententafel" className="form-control" name="lang" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label no-column align-items-center">
                                            <img alt={"RunVid"} src="assets/img/flag/es.svg" className="lang-set" />
                                            İspanyolca
                                        </label>
                                        <input type="text" value="Tablero" className="form-control" name="lang" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-buttons">
                                <button data-fancybox-close className="btn btn-primary pl-50 pr-50 h-42">Cancel</button>
                                <button type="submit" className="btn btn-secondary pl-50 pr-50 h-42">Save</button>

                            </div>
                        </form>
                    </div>
                </div>
        )
    }
}
