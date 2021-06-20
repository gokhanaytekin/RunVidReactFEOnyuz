import React from 'react'
import {Link} from 'react-router-dom';

//Icons Imports
import Info from '../../assets/img/icons/info.svg';
import FeatherTrash from '../../assets/img/icons/feather-trash.svg';
import TRFlag from '../../assets/img/flag/tr.svg';
import ENFlag from '../../assets/img/flag/en.svg';
import FeatherEdit from '../../assets/img/icons/feather-edit.svg';

//TextEditor Imports
import { CKEditor } from '@ckeditor/ckeditor5-react';
import classicEditor from '@ckeditor/ckeditor5-build-classic';

import FileInput from '../../Components/FileInput';

export const About = () => {
    return (
        <div className="box">
            <div className="box-title">
                <div className="general-title red-text">İçerik</div>
            </div>
            <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                <div className="grid">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label no-column">Tanım <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label no-column">İçerik <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                            <CKEditor 
                                editor={ classicEditor }
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const GeneralDefault = () => {
    return (
        <div className="box">
        <div className="box-title">
            <div className="general-title red-text">Varsayılan Ayarlar</div>
        </div>
        <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
            <div className="grid">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                        <label className="form-label">Logo Boyutu  (min 900px - max 800px)</label>
                        <div className="form-control d-flex align-items-center justify-content-between">
                            <div className="left">logo vector.png</div>
                            <div className="action-buttons">
                                <Link to="#"  className="action-btn action-edit-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.188" height="15.955" viewBox="0 0 21.188 15.955">
                                        <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(-0.5 -5)">
                                            <path id="Path_1243" data-name="Path 1243" d="M1.5,12.977S4.989,6,11.094,6s9.594,6.977,9.594,6.977-3.489,6.977-9.594,6.977S1.5,12.977,1.5,12.977Z" fill="none" stroke="#233f93" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                            <path id="Path_1244" data-name="Path 1244" d="M18.733,16.116A2.616,2.616,0,1,1,16.116,13.5,2.616,2.616,0,0,1,18.733,16.116Z" transform="translate(-5.023 -3.139)" fill="none" stroke="#233f93" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                        </g>
                                    </svg>
                                </Link> 
                                <Link to="#"  className="action-btn action-delete-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.7" height="19.5" viewBox="0 0 17.7 19.5">
                                        <g id="Icon_feather-trash" data-name="Icon feather-trash" transform="translate(-3.75 -2.25)">
                                            <path id="Path_33" data-name="Path 33" d="M4.5,9H20.7" transform="translate(0 -2.4)" fill="none" stroke="#c40007" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                            <path id="Path_34" data-name="Path 34" d="M20.1,6.6V19.2A1.8,1.8,0,0,1,18.3,21h-9a1.8,1.8,0,0,1-1.8-1.8V6.6m2.7,0V4.8A1.8,1.8,0,0,1,12,3h3.6a1.8,1.8,0,0,1,1.8,1.8V6.6" transform="translate(-1.2)" fill="none" stroke="#c40007" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                        </g>
                                    </svg>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                        <label className="form-label">Başlık (SEO Title)</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                        <label className="form-label">Açıklama (SEO Description)</label>
                        <textarea name="a" className="form-control"></textarea>
                    </div>
                </div>
            </div>
        </form>
    </div>
    )
}

export const GeneralContact = () => {
    return (
        <div className="box">
            <div className="box-title">
                <div className="general-title red-text">İletişim Bilgileri</div>
            </div>
            <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                <div className="grid">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Adres</label>
                            <textarea name="a" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Ülke</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Şehir</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">İlçe</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Google Map</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.684" height="19.507" viewBox="0 0 19.684 19.507">
                                            <g id="Calling" transform="translate(0.754 0.752)">
                                                <path id="Stroke_1" data-name="Stroke 1" d="M.464,2.249c.3-.5,1.952-2.3,3.129-2.247A1.556,1.556,0,0,1,4.51.491h0A16,16,0,0,1,6.848,3.654c.231,1.107-1.09,1.745-.686,2.861a9.353,9.353,0,0,0,5.323,5.321c1.115.4,1.753-.915,2.861-.685a15.977,15.977,0,0,1,3.164,2.338h0a1.553,1.553,0,0,1,.489.916c.044,1.24-1.873,2.915-2.247,3.129a3.279,3.279,0,0,1-3.434-.032C8.407,15.875,2.154,9.741.5,5.681-.138,4.287-.181,3.129.464,2.249Z" transform="translate(0)" fill="none" stroke="#1f1f1f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"/>
                                                <path id="Path" d="M0,0A7.551,7.551,0,0,1,6.67,6.662" transform="translate(11.43 0.237)" fill="none" stroke="#1f1f1f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"/>
                                                <path id="Path-2" data-name="Path" d="M0,0A4.193,4.193,0,0,1,3.314,3.314" transform="translate(11.43 3.593)" fill="none" stroke="#1f1f1f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"/>
                                            </g>
                                        </svg>                                                      
                                    </span>
                                <input type="tel" id="phone" placeholder="Phone Number" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20.732" height="18.616" viewBox="0 0 20.732 18.616">
                                            <g id="Message" transform="translate(0.75 0.75)">
                                                <path id="Path_445" d="M11.314,0,7.048,3.434a2.223,2.223,0,0,1-2.746,0L0,0" transform="translate(3.954 5.561)" fill="none" stroke="#1f1f1f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"/>
                                                <path id="Rectangle_511" d="M4.888,0h9.428A4.957,4.957,0,0,1,17.9,1.59a5.017,5.017,0,0,1,1.326,3.7v6.528a5.017,5.017,0,0,1-1.326,3.7,4.957,4.957,0,0,1-3.58,1.59H4.888C1.968,17.116,0,14.741,0,11.822V5.294C0,2.375,1.968,0,4.888,0Z" transform="translate(0 0)" fill="none" stroke="#1f1f1f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"/>
                                            </g>
                                        </svg>                                                      
                                    </span>
                                <input type="email" placeholder="Email" className="form-control" name="email" required />
                            </div>
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const GeneralSocial = () => {
    return (
        <div className="box">
            <div className="box-title">
                <div className="general-title red-text">Sosyal Medya</div>
            </div>
            <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                <div className="grid">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Facebook</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.161" height="21.293" viewBox="0 0 12.161 21.293">
                                        <path id="Icon_feather-facebook" data-name="Icon feather-facebook" d="M21.661,3H18.617a5.073,5.073,0,0,0-5.073,5.073v3.044H10.5v4.059h3.044v8.117H17.6V15.176h3.044l1.015-4.059H17.6V8.073a1.015,1.015,0,0,1,1.015-1.015h3.044Z" transform="translate(-10 -2.5)" fill="none" stroke="#1f1f1f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                    </svg>                                             
                                </span>
                                <input type="text" placeholder="" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Twitter</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.165" height="15.148" viewBox="0 0 18.165 15.148">
                                        <path id="Icon_feather-twitter" data-name="Icon feather-twitter" d="M18.665,4.493a8.5,8.5,0,0,1-2.45,1.194,3.5,3.5,0,0,0-6.132,2.341v.78A8.317,8.317,0,0,1,3.06,5.273s-3.121,7.022,3.9,10.143A9.082,9.082,0,0,1,1.5,16.976c7.022,3.9,15.6,0,15.6-8.972a3.511,3.511,0,0,0-.062-.648,6.023,6.023,0,0,0,1.623-2.863Z" transform="translate(-1 -3.928)" fill="none" stroke="#1f1f1f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                    </svg>                     
                                </span>
                                <input type="text" placeholder="" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Instagram</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                        <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M8.5,6.379a4.359,4.359,0,1,0,4.358,4.359A4.351,4.351,0,0,0,8.5,6.379Zm0,7.192a2.834,2.834,0,1,1,2.833-2.834A2.838,2.838,0,0,1,8.5,13.571ZM14.049,6.2a1.016,1.016,0,1,1-1.016-1.017A1.014,1.014,0,0,1,14.049,6.2Zm2.886,1.032a5.032,5.032,0,0,0-1.373-3.562A5.062,5.062,0,0,0,12,2.3c-1.4-.08-5.609-.08-7.012,0A5.055,5.055,0,0,0,1.427,3.667,5.048,5.048,0,0,0,.054,7.229c-.08,1.4-.08,5.61,0,7.014A5.032,5.032,0,0,0,1.427,17.8a5.069,5.069,0,0,0,3.561,1.373c1.4.08,5.609.08,7.012,0A5.029,5.029,0,0,0,15.562,17.8a5.065,5.065,0,0,0,1.373-3.562c.08-1.4.08-5.607,0-7.01Zm-1.813,8.516a2.869,2.869,0,0,1-1.616,1.616c-1.119.444-3.774.341-5.01.341s-3.895.1-5.01-.341a2.869,2.869,0,0,1-1.616-1.616c-.444-1.119-.341-3.774-.341-5.011s-.1-3.9.341-5.011A2.869,2.869,0,0,1,3.487,4.111c1.119-.444,3.774-.341,5.01-.341s3.895-.1,5.01.341a2.869,2.869,0,0,1,1.616,1.616c.444,1.119.341,3.774.341,5.011S15.566,14.633,15.122,15.749Z" transform="translate(0.005 -2.238)"/>
                                    </svg>                                         
                                </span>
                                <input type="text" placeholder="" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Youtube</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.869" height="12.854" viewBox="0 0 17.869 12.854">
                                        <g id="Icon_feather-youtube" data-name="Icon feather-youtube" transform="translate(-0.999 -5.5)">
                                            <path id="Path_1245" data-name="Path 1245" d="M18.015,7.855a2.132,2.132,0,0,0-1.487-1.533A55.215,55.215,0,0,0,9.934,6a50.454,50.454,0,0,0-6.594.353A2.132,2.132,0,0,0,1.852,7.886,22.235,22.235,0,0,0,1.5,11.942a22.235,22.235,0,0,0,.353,4.087A2.132,2.132,0,0,0,3.34,17.5a50.454,50.454,0,0,0,6.594.353,50.454,50.454,0,0,0,6.594-.353,2.132,2.132,0,0,0,1.487-1.533,22.235,22.235,0,0,0,.353-4.025,22.235,22.235,0,0,0-.353-4.087Z" transform="translate(0 0)" fill="none" stroke="#1f1f1f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                            <path id="Path_1246" data-name="Path 1246" d="M14.625,17.734l4.409-2.507L14.625,12.72Z" transform="translate(-6.417 -3.285)" fill="none" stroke="#1f1f1f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                        </g>
                                    </svg>             
                                </span>
                                <input type="text" placeholder="" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Linkedin</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                        <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" d="M13,2.25H1A1,1,0,0,0,0,3.259V15.241A1,1,0,0,0,1,16.25H13a1.007,1.007,0,0,0,1-1.009V3.259A1.007,1.007,0,0,0,13,2.25Zm-8.769,12H2.156V7.569H4.234V14.25ZM3.194,6.656a1.2,1.2,0,1,1,1.2-1.2,1.2,1.2,0,0,1-1.2,1.2Zm8.816,7.594H9.934V11c0-.775-.016-1.772-1.078-1.772-1.081,0-1.247.844-1.247,1.716V14.25H5.534V7.569H7.525v.913h.028A2.186,2.186,0,0,1,9.519,7.4c2.1,0,2.491,1.384,2.491,3.184Z" transform="translate(0 -2.25)" fill="#1f1f1f"/>
                                    </svg>                               
                                </span>
                                <input type="text" placeholder="" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const SystemGeneral = () => {
    return (
        <div className="box">
            <div className="box-title">
                <div className="general-title red-text">Genel Bilgiler</div>
            </div>
            <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                <div className="grid">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label no-column">Tanım <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const SystemPictures = () => {
    return (
        <div className="box">
            <div className="box-title">
                <div className="general-title red-text">Görseller</div>
            </div>
            <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                <div className="grid">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <FileInput />
                    </div>
                </div>
            </form>
        </div>
    )
}

export const SystemText = () => {
    return (
        <div className="box">
            <div className="box-title">
                <div className="general-title red-text">Metin</div>
            </div>
            <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                <div className="grid">
                    <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label no-column">İçerik <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                            <CKEditor 
                                editor={ classicEditor }
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const AddQuestion = () => {
    return (
        <div className="box">
            <div className="box-title">
                <div className="general-title red-text">Metin</div>
            </div>
            <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                <div className="grid">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label no-column">Soru <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label no-column">İçerik <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                            <CKEditor 
                                editor={ classicEditor }
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const AddSliderGeneral = () => {
    return (
        <div className="box">
            <div className="box-title">
                <div className="general-title red-text">Genel Bilgiler</div>
            </div>
            <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                <div className="grid">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label no-column">Tanım <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label no-column">Yönlendirilecek Link <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const AddSliderPictures = () => {
    return (
        <div className="box">
            <div className="box-title">
                <div className="general-title red-text">Görseller</div>
            </div>
            <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                <div className="grid">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Desktop (min genişlik 1200 px)</label>
                            <div className="form-control d-flex align-items-center justify-content-between">
                                <div className="left">kapak.jpg</div>
                                <div className="action-buttons">
                                    <Link to="#"  className="action-btn action-edit-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21.188" height="15.955" viewBox="0 0 21.188 15.955">
                                            <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(-0.5 -5)">
                                                <path id="Path_1243" data-name="Path 1243" d="M1.5,12.977S4.989,6,11.094,6s9.594,6.977,9.594,6.977-3.489,6.977-9.594,6.977S1.5,12.977,1.5,12.977Z" fill="none" stroke="#233f93" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                <path id="Path_1244" data-name="Path 1244" d="M18.733,16.116A2.616,2.616,0,1,1,16.116,13.5,2.616,2.616,0,0,1,18.733,16.116Z" transform="translate(-5.023 -3.139)" fill="none" stroke="#233f93" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                            </g>
                                        </svg>
                                    </Link> 
                                    <Link to="#"  className="action-btn action-delete-btn">
                                        <img alt={"RunVid"} src={FeatherTrash} />
                                    </Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Desktop (min genişlik 1200 px)</label>
                            <div className="form-control d-flex align-items-center justify-content-between">
                                <div className="left">kapak.jpg</div>
                                <div className="action-buttons">
                                    <Link to="#"  className="action-btn action-edit-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21.188" height="15.955" viewBox="0 0 21.188 15.955">
                                            <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(-0.5 -5)">
                                                <path id="Path_1243" data-name="Path 1243" d="M1.5,12.977S4.989,6,11.094,6s9.594,6.977,9.594,6.977-3.489,6.977-9.594,6.977S1.5,12.977,1.5,12.977Z" fill="none" stroke="#233f93" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                <path id="Path_1244" data-name="Path 1244" d="M18.733,16.116A2.616,2.616,0,1,1,16.116,13.5,2.616,2.616,0,0,1,18.733,16.116Z" transform="translate(-5.023 -3.139)" fill="none" stroke="#233f93" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                            </g>
                                        </svg>
                                    </Link> 
                                    <Link to="#"  className="action-btn action-delete-btn">
                                        <img alt={"RunVid"} src={FeatherTrash} />
                                    </Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const SystemEmail = () => {
    return (
        <div className="box">
            <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                <div className="grid">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label no-column">Protokol <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                            <input type="text" placeholder="SMTP" className="form-control" name="menuname" required="" />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label no-column">Smtp Server <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                            <input type="text" placeholder="mail.runvid.com" className="form-control" name="menuname" required="" />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label no-column">Smtp Bağlantı Noktası <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                            <input type="text" placeholder="SMTP" className="form-control" name="menuname" required="" />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label no-column">Smtp Kullanıcı Adı <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                            <input type="text" placeholder="Deneme" className="form-control" name="menuname" required="" />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label no-column">Smtp Şifre <span className="protip" data-pt-title="Açıklama alanı" data-pt-gravity="right" data-pt-size="small" data-pt-scheme="dark-transparent"><img alt={"RunVid"} className="info-icon" src={Info} /></span></label>
                            <input type="text" placeholder="Deneme" className="form-control" name="menuname" required="" />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const SystemGeneralDefault = () => {
    return (
        <div className="box">
            <div className="box-title">
                <div className="title">Varsayılan Ayarlar</div>
                <div className="text">Bölgede yaşayan kullanıcıların dil ve para birimi</div>
            </div>
            <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                <div className="grid">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Varsayılan Dil</label>
                            <div className="niceCountryInputSelector" data-selectedcountry="TR" data-showspecial={false} data-showflags={true} data-i18nall="All selected" data-i18nnofilter="No selection" data-i18nfilter="Filter" data-onchangecallback="onChangeCallback"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label className="form-label">Varsayılan Para Birimi</label>
                            <select name="role" className="form-control" required>
                                <option value="1">Türk Lirası</option>
                            </select>
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const SystemGeneralLanguage = () => {
    return (
        <div className="box">
            <div className="box-top">
                <div className="box-title">
                    <div className="title">Diller</div>
                    <div className="text">Bölgede yaşayan kullanıcıların kullandıkları diller</div>
                </div>
                <Link to="#"  className="btn btn-text-secondary btn-outline h-36 mr-10">Ekle</Link> 
            </div>
            <div className="select-box-list select-box-list-border">
                <div className="select-box-list-item">
                    <input type="radio" className="input" id="input1" name="input" required />
                    <label htmlFor="input1" className="label">
                        <img alt={"RunVid"} src={ENFlag} className="mr-10" />
                        English
                    </label>
                </div>
                <div className="select-box-list-item">
                    <input type="radio" className="input" id="input2" name="input" required />
                    <label htmlFor="input2" className="label">
                        <img alt={"RunVid"} src={TRFlag} className="mr-10" />
                        Türkçe
                    </label>
                </div>
            </div>
        </div>
    )
}

export const SystemNoti1 = () => {
    return (
        <div className="box p-0">
        <div className="box-top-title">
            Muhasebe
        </div>
        <div className="box-content">
            <div className="box-content-item">
                <div className="left">
                    <span className="subtitle">#10023 Müşteri</span>
                    <div className="title">Bandwith alanı satın alındığında bildirim gönderir</div>
                </div>
                <div className="right">
                    <div className="action-buttons">
                        <Link to="#"  className="action-btn action-edit-btn">
                            <img alt={"RunVid"} src={FeatherEdit} />
                        </Link> 
                        <Link to="#"  className="action-btn action-delete-btn">
                            <img alt={"RunVid"} src={FeatherTrash} />
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="box-content-item">
                <div className="left">
                    <span className="subtitle">#10023 Müşteri</span>
                    <div className="title">Bandwith alanı satın alındığında bildirim gönderir</div>
                </div>
                <div className="right">
                    <div className="action-buttons">
                        <Link to="#"  className="action-btn action-edit-btn">
                            <img alt={"RunVid"} src={FeatherEdit} />
                        </Link> 
                        <Link to="#"  className="action-btn action-delete-btn">
                            <img alt={"RunVid"} src={FeatherTrash} />
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="box-content-item">
                <div className="left">
                    <span className="subtitle">#10023 Müşteri</span>
                    <div className="title">Bandwith alanı satın alındığında bildirim gönderir</div>
                </div>
                <div className="right">
                    <div className="action-buttons">
                        <Link to="#"  className="action-btn action-edit-btn">
                            <img alt={"RunVid"} src={FeatherEdit} />
                        </Link> 
                        <Link to="#"  className="action-btn action-delete-btn">
                            <img alt={"RunVid"} src={FeatherTrash} />
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export const SystemNoti2 = () => {
    return (
        <div className="box p-0">
        <div className="box-top-title">
            Üyelik
        </div>
        <div className="box-content">
            <div className="box-content-item">
                <div className="left">
                    <span className="subtitle">#10023 Müşteri</span>
                    <div className="title">Bandwith alanı satın alındığında bildirim gönderir</div>
                </div>
                <div className="right">
                    <div className="action-buttons">
                        <Link to="#"  className="action-btn action-edit-btn">
                            <img alt={"RunVid"} src={FeatherEdit} />
                        </Link> 
                        <Link to="#"  className="action-btn action-delete-btn">
                            <img alt={"RunVid"} src={FeatherTrash} />
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="box-content-item">
                <div className="left">
                    <span className="subtitle">#10023 Müşteri</span>
                    <div className="title">Bandwith alanı satın alındığında bildirim gönderir</div>
                </div>
                <div className="right">
                    <div className="action-buttons">
                        <Link to="#"  className="action-btn action-edit-btn">
                            <img alt={"RunVid"} src={FeatherEdit} />
                        </Link> 
                        <Link to="#"  className="action-btn action-delete-btn">
                            <img alt={"RunVid"} src={FeatherTrash} />
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="box-content-item">
                <div className="left">
                    <span className="subtitle">#10023 Müşteri</span>
                    <div className="title">Bandwith alanı satın alındığında bildirim gönderir</div>
                </div>
                <div className="right">
                    <div className="action-buttons">
                        <Link to="#"  className="action-btn action-edit-btn">
                            <img alt={"RunVid"} src={FeatherEdit} />
                        </Link> 
                        <Link to="#"  className="action-btn action-delete-btn">
                            <img alt={"RunVid"} src={FeatherTrash} />
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}