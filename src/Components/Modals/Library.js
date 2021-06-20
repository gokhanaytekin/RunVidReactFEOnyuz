import React, { Component } from 'react';

//Icons Imports
import Close from '../../assets/img/icons/close.svg';

//Pictures Imports
import TRFlag from '../../assets/img/flag/tr.svg';
import ENFlag from '../../assets/img/flag/en.svg';
import GRFlag from '../../assets/img/flag/gr.svg';
import ESFlag from '../../assets/img/flag/es.svg';

//Pagination Import
import Pagination from '../../Components/Pagination';

export default class Library extends Component {
    render() {
        return (
            // {/* <!-- kutuphane modal --> */}
            <div className="site-modal site-modal-md" id="kutuphane">
            <div className="modal-header">
                <div className="modal-top-title">
                    <div className="title">Kütüphane</div>
                    <div className="text">Kullanmak istediğiniz dilleri ekleyin</div>
                </div>
                <button type="button" data-fancybox-close="" className="fancybox-button fancybox-close-small" title="Close"><img alt={"RunVid"} src={Close} /></button>
            </div>
            <div className="modal-body">
                <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                    <div className="select-languages">
                        <label>
                            <input type="checkbox" name="contact-user" className="gray-border-select-box" />
                            <div className="img-text-item">
                                <span>
                                    <img alt={"RunVid"} src={TRFlag} />
                                </span>
                                <span>Turkey</span>
                            </div>
                        </label>
                        <label>
                            <input type="checkbox" name="contact-user" className="gray-border-select-box" />
                            <div className="img-text-item">
                                <span>
                                    <img alt={"RunVid"} src={ENFlag} />
                                </span>
                                <span>English</span>
                            </div>
                        </label>
                        <label>
                            <input type="checkbox" name="contact-user" className="gray-border-select-box" />
                            <div className="img-text-item">
                                <span>
                                    <img alt={"RunVid"} src={GRFlag} />
                                </span>
                                <span>Almanca</span>
                            </div>
                        </label>
                        <label>
                            <input type="checkbox" name="contact-user" className="gray-border-select-box" />
                            <div className="img-text-item">
                                <span>
                                    <img alt={"RunVid"} src={ESFlag} />
                                </span>
                                <span>İspanyolca</span>
                            </div>
                        </label>
                        <label>
                            <input type="checkbox" name="contact-user" className="gray-border-select-box" />
                            <div className="img-text-item">
                                <span>
                                    <img alt={"RunVid"} src={TRFlag} />
                                </span>
                                <span>Turkey</span>
                            </div>
                        </label>
                        <label>
                            <input type="checkbox" name="contact-user" className="gray-border-select-box" />
                            <div className="img-text-item">
                                <span>
                                    <img alt={"RunVid"} src={ENFlag} />
                                </span>
                                <span>English</span>
                            </div>
                        </label>
                        <label>
                            <input type="checkbox" name="contact-user" className="gray-border-select-box" />
                            <div className="img-text-item">
                                <span>
                                    <img alt={"RunVid"} src={GRFlag} />
                                </span>
                                <span>Almanca</span>
                            </div>
                        </label>
                        <hr/>
                        <label>
                            <input type="checkbox" onClick={() => {console.log('A')}} className="gray-border-select-box" />
                            <div className="img-text-item">
                                <span>Tümünü Seç</span>
                            </div>
                        </label>
                    </div>
                    <Pagination />
                    <div className="form-buttons">
                        <button data-fancybox-close className="btn btn-primary pl-50 pr-50 h-42">Cancel</button>
                        <button type="submit" className="btn btn-secondary pl-50 pr-50 h-42">Continue</button>

                    </div>
                </form>
            </div>
        </div>
        // {/* <!-- end #kutuphane modal --> */}
        )
    }
}
