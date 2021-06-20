import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

//Pictures Imports
import Move from '../assets/img/move.svg';
import Home from '../assets/img/icons/home.svg';
import DownArrow from '../assets/img/icons/arrow-down.svg';
import Avatar from '../assets/img/avatar2.svg';
import Avatar2 from '../assets/img/avatar2.svg';
import MetroEarth from '../assets/img/icons/metro-earth.svg';
import MetroEarth2 from '../assets/img/icons/metro-earth-2.svg';
import FeatherEdit from '../assets/img/icons/feather-edit.svg';
import FeatherTrash from '../assets/img/icons/feather-trash.svg';
import FeatherDownload from '../assets/img/icons/feather-download.svg';
import RedPlayBtn from '../assets/img/icons/play-red.svg';
import Smartphone from '../assets/img/icons/smartphone.svg';
import Chrome from '../assets/img/icons/chrome.svg';
import ENFlag from '../assets/img/icons/en.svg';

//FontAwesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

//Pagination Import
import Pagination from './Pagination';

function GSBlogBody(props) {
    return(
        props.items.map((res) => 
        <tr key={res.keyT}>
        <td className={"move-2"} >
            <div className="move-id w-290" >
                <div className="move-id-box">
                    <img alt={"RunVid"} src={Move} />
                </div>
                <div className="blog-table-text w-100y">
                    <div className="left">
                        <div className="title" >{res.id[0].title}<Link to="#"> </Link>  </div>
                        <div className="right lean-right">
                            <Link to="#">
                                <img alt={"RunVid"} src={MetroEarth2} />
                            </Link>
                        </div>
                        <div className="text">Keywords: <Link to="#">Seller</Link>, <Link to="#">Video</Link>, <Link to="#">Upload</Link></div>
                    </div>
                    
                </div>
            </div>
        </td>
        <td>
            <div className="user-img-name w-160" >
                <img alt={"RunVid"} src={Avatar2} className="img-30" />
                <div className="user-img-name-detail">
                    <span className="user-img-name-surname">{res.author[0].name}</span>
                    <span className="user-img-name-text">{res.author[0].date}</span>
                </div>
            </div>
        </td>
        <td>
            <div className="progress-item-content">
                <div className="progress-item">
                    <div className="progress-box w-100px">
                        <span className={"w-30y"} ></span>
                    </div>
                </div>
                <span>%{res.transtation}</span>
            </div>
        </td>
        <td >
            {res.postDate}
        </td>
        <td>
            <div className="active-pasive">
                <div className={(res.status ? 'active' : 'pasive') + "-box-50"}></div>
                <span>{(res.status ? 'Active' : 'Pasive')}</span>
            </div>
        </td>
        <td>
            <div className="action-buttons">
                <Link to="#" className="action-btn action-edit-btn">
                    <img alt={"RunVid"} src={FeatherEdit} />
                </Link>
                <Link to="#" className="action-btn action-delete-btn">
                    <img alt={"RunVid"} src={FeatherTrash} />
                </Link>
            </div>
        </td>
    </tr>
    ) 
    )
}

function GSExtraTable(props) {
    return(
        props.items.map((res) =>
            <tr key={res.keyT}>
                <td className={"move-2"} >
                    <div className="move-id w-290" >
                        <div className="move-id-box">
                            <img alt={"RunVid"} src={Move} />
                        </div>
                        <div className="blog-table-text w-100y">
                            <div className="left">
                                <div className="title" >{res.id[0].title}</div>
                                <div className="right lean-right">
                                    <Link to="#"> 
                                        <img alt={"RunVid"} src={MetroEarth2} />
                                    </Link> 
                                </div>
                                <div className="text">Keywords: <Link to="#"> Seller</Link> , <Link to="#"> Video</Link> , <Link to="#"> Upload</Link> </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="user-img-name w-160" >
                        <img alt={"RunVid"} src={res.avatar}  className="img-30" />
                        <div className="user-img-name-detail">
                            <span className="user-img-name-surname" >{res.user[0].name}</span>
                            <span className="user-img-name-text" >{res.user[0].date}</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="progress-item-content">
                        <div className="progress-item">
                            <div className="progress-box w-100px">
                                <span className={"w-30y"} ></span>
                            </div>
                        </div>
                        <span >%{res.transtation}</span>
                    </div>
                </td>
                <td >
                    {res.postDate}
                </td>
                <td>
                    <div className="active-pasive">
                        <div  className={(res.status ? 'active' : 'pasive') + "-box-50"}></div>
                        <span >{(res.status ? 'Active' : 'Pasive')}</span>
                    </div>
                </td>
                <td>
                    <div className="action-buttons">
                        <Link to="#" className="action-btn action-edit-btn">
                            <img alt={"RunVid"} src={FeatherEdit} />
                        </Link>
                        <Link to="#" className="action-btn action-delete-btn">
                            <img alt={"RunVid"} src={FeatherTrash} />
                        </Link>
                    </div>
                </td>
            </tr>
        ) 
    )
}

function GSFaqTable(props) {
    const [showDd, changeVisible] = useState();
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
        <td className={"move-2"} >
            <div className="move-id">
                <div className="move-id-box">
                    <img alt={"RunVid"} src={Move} />
                </div>
                {res.id}
            </div>
        </td>
        <td >
            {res.definition}
        </td>
        <td>
            <div className="progress-item-content">
                <div className="progress-item">
                    <div className="progress-box w-100px">
                        <span className={"w-30y"} ></span>
                    </div>
                </div>
                <span >%{res.transtation}</span>
            </div>
        </td>
        <td>
            <div className="toggle-group top-0">
                <input type="checkbox" name="on-off-switch" id="on-off-switch"  tabIndex="1" />
                <label htmlFor="on-off-switch">
                </label>
                <div className="onoffswitch pull-left" aria-hidden={true}>
                    <div className="onoffswitch-label">
                        <div className="onoffswitch-inner"></div>
                        <div className="onoffswitch-switch"></div>
                    </div>
                </div>
            </div>
        </td>
        <td className={"w-150"} >
            <div className="action-buttons">
                <Link to="#" className="action-btn action-edit-btn">
                    <img alt={"RunVid"} src={FeatherEdit} />
                </Link>
                <Link to="#" className="action-btn action-delete-btn">
                    <img alt={"RunVid"} src={FeatherTrash} />
                </Link>
                <div className="action-more">
                    <Link to="#" onClick={() => { changeVisible(!showDd) }} className="action-more-btn dropdown">
                        <img alt={"RunVid"} src={DownArrow} />
                    </Link>
                    <div className="dropdown-menu" style={{display: (showDd ? '' : 'none')}}>
                        <div className="dropdown-menu-list">
                            <Link to="#">Link 1</Link>
                            <Link to="#">Link 2</Link>
                            <Link to="#">Link 3</Link>
                        </div>
                    </div>
                </div>
            </div>
        </td>
    </tr>
        ) 
    )
}

function GSFooterTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td className={"move-2"} >
                <div className="move-id" >
                    <div className="move-id-box">
                        <img alt={"RunVid"} src={Move} />
                    </div>
                    {res.id}
                </div>
            </td>
            <td >
                {res.definition}
            </td>
            <td>
                <div className="toggle-group top-0">
                    <input type="checkbox" name="on-off-switch" id="on-off-switch"  tabIndex="1" />
                    <label htmlFor="on-off-switch">
                    </label>
                    <div className="onoffswitch pull-right" aria-hidden={true}>
                        <div className="onoffswitch-label">
                            <div className="onoffswitch-inner"></div>
                            <div className="onoffswitch-switch"></div>
                        </div>
                    </div>
                </div>
            </td>
            <td className={"w-160"} >
                <div className="action-buttons">
                    <Link to="#" className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <EditDD />
                </div>
            </td>
        </tr>
        ) 
    )
}

function GSHowTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td className={"p-0-10-0-0-move"} >
                <div className="move-id" >
                    <div className="move-id-box">
                        <img alt={"RunVid"} src={Move} />
                    </div>
                    {res.id}
                </div>
            </td>
            <td >
                {res.definition}
            </td>
            <td>
                <div className="progress-item-content">
                    <div className="progress-item">
                        <div className="progress-box w-100px">
                            <span className={"w-30y"} ></span>
                        </div>
                    </div>
                    <span >%{res.transtation}</span>
                </div>
            </td>
            <td>
                <div className="toggle-group top-0">
                    <input type="checkbox" name="on-off-switch" id="on-off-switch"  tabIndex="1" />
                    <label htmlFor="on-off-switch">
                    </label>
                    <div className="onoffswitch pull-right" aria-hidden={true}>
                        <div className="onoffswitch-label">
                            <div className="onoffswitch-inner"></div>
                            <div className="onoffswitch-switch"></div>
                        </div>
                    </div>
                </div>
            </td>
            <td className={"w-150"} >
                <div className="action-buttons">
                    <Link to="#" className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#" className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                </div>
            </td>
        </tr>
        ) 
    )
}

function GSSliderTable(props) {
    const [showDd, changeVisible] = useState();
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td className={"p-0-10-0-0-move"} >
                <div className="move-id" >
                    <div className="move-id-box">
                        <img alt={"RunVid"} src={Move} />
                    </div>
                    {res.id}
                </div>
            </td>
            <td >
                {res.definition}
            </td>
            <td>
                {res.pictures.map((pct) =>
                <div className="image-list">
                    <Link to="#" data-fancybox>
                        <img alt={"RunVid"}  src={pct} />
                    </Link>
                </div>
                )}
            </td>
            <td>
                <div className="progress-item-content">
                    <div className="progress-item">
                        <div className="progress-box w-100px">
                            <span className={"w-30y"} ></span>
                        </div>
                    </div>
                    <span >%{res.transtation}</span>
                </div>
            </td>
            <td>
                <div className="toggle-group top-0">
                    <input type="checkbox" name="on-off-switch" id="on-off-switch"  tabIndex="1" />
                    <label htmlFor="on-off-switch">
                    </label>
                    <div className="onoffswitch pull-right" aria-hidden={true}>
                        <div className="onoffswitch-label">
                            <div className="onoffswitch-inner"></div>
                            <div className="onoffswitch-switch"></div>
                        </div>
                    </div>
                </div>
            </td>
            <td className={"w-150"} >
                <div className="action-buttons">
                    <Link to="#" className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#" className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                    <div className="action-more">
                        <Link to="#" onClick={() => { changeVisible(!showDd) }} className="action-more-btn dropdown">
                            <img alt={"RunVid"} src={DownArrow} />
                        </Link>
                        <div className="dropdown-menu" style={{display: (showDd ? '' : 'none')}}>
                            <div className="dropdown-menu-list">
                                <Link to="#">Link 1</Link>
                                <Link to="#">Link 2</Link>
                                <Link to="#">Link 3</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        ) 
    )
}

function GSSolutionTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
        <td className={"move-2"} >
            <div className="move-id" >
                <div className="move-id-box">
                    <img alt={"RunVid"} src={Move} />
                </div>
                {res.id}
            </div>
        </td>
        <td>
            <div className="d-flex align-items-center justify-content-between">
                <div className="left" >{res.definition} <Link to="#"> <img alt={"RunVid"} className={"lean-right"} src={MetroEarth2} /></Link> </div>
            </div>
        </td>
        <td>
            <div className="toggle-group top-0">
                <input type="checkbox" name="on-off-switch" id="on-off-switch"  tabIndex="1" />
                <label htmlFor="on-off-switch">
                </label>
                <div className="onoffswitch pull-right" aria-hidden={true}>
                    <div className="onoffswitch-label">
                        <div className="onoffswitch-inner"></div>
                        <div className="onoffswitch-switch"></div>
                    </div>
                </div>
            </div>
        </td>
        <td className={"w-150"} >
            <div className="action-buttons">
                <Link to="#" className="action-btn action-edit-btn">
                    <img alt={"RunVid"} src={FeatherEdit} />
                </Link>
                <Link to="#" className="action-btn action-delete-btn">
                    <img alt={"RunVid"} src={FeatherTrash} />
                </Link>
            </div>
        </td>
    </tr>
        ) 
    )
}

function GSUserCommentsTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td className={"p-0-10-0-0-move"} >
                <div className="move-id" >
                    <div className="move-id-box">
                        <img alt={"RunVid"} src={Move} />
                    </div>
                    {res.id}
                </div>
            </td>
            <td>
                <div className="user-img-name w-160" >
                    <img alt={"RunVid"} src={res.user[0].avatar} className="img-30" />
                    <div className="user-img-name-detail">
                        <span className="user-img-name-surname" >{res.user[0].name}</span>
                    </div>
                </div>
            </td>
            <td >
                {res.score}
            </td>
            <td>
                <div className="toggle-group top-0">
                    <input type="checkbox" name="on-off-switch" id="on-off-switch"  tabIndex="1" />
                    <label htmlFor="on-off-switch">
                    </label>
                    <div className="onoffswitch pull-right" aria-hidden={true}>
                        <div className="onoffswitch-label">
                            <div className="onoffswitch-inner"></div>
                            <div className="onoffswitch-switch"></div>
                        </div>
                    </div>
                </div>
            </td>
            <td className={"w-150"} >
                <div className="action-buttons">
                    <Link to="#"  className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#"  className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                </div>
            </td>
        </tr>
        ) 
    )
}

function SSLanguageTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td >
                {res.id}
            </td>
            <td>
                <div className="img-text-item">
                    <span>
                        <img alt={"RunVid"}  src={res.flag} />
                    </span>
                    <span >{res.countryName}</span>
                </div>
            </td>
            <td>
                <div className="active-pasive">
                    <div  className={(res.status ? 'active' : 'pasive') + "-box-50"}></div>
                    <span >{res.status ? 'Active' : 'Pasive'}</span>
                </div>
            </td>
        </tr>
        ) 
    )
}

function SSLocationTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td >
                {res.id}
            </td>
            <td>
                <div className="img-text-item">
                    <span>
                        <img alt={"RunVid"}  src={res.flag} />
                    </span>
                    <span >{res.countryName}</span>
                </div>
            </td>
            <td >
                {res.code}
            </td>
            <td >
                {res.unit}
            </td>
            <td>
                <div className="active-pasive">
                    <div  className={(res.status ? 'active' : 'pasive') + "-box-50"}></div>
                    <span >{res.status ? 'Active' : 'Pasive'}</span>
                </div>
            </td>
            <td>
                <div className="action-buttons">
                    <Link to="#"  className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#"  className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                </div>
            </td>
        </tr>
        ) 
    )
}

function SSMoneyTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td >
                {res.id}
            </td>
            <td>
                <div className="btn btn-dark h-36">₺</div>
            </td>
            <td >
                {res.icon}
            </td>
            <td >
                {res.definition}
            </td>
            <td>
                <div className="active-pasive">
                    <div  className={(res.status ? 'active' : 'pasive') + "-box-50"}></div>
                    <span >{(res.status ? 'Active' : 'Pasive')}</span>
                </div>
            </td>
            <td>
                <div className="action-buttons">
                    <Link to="#"  className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#"  className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                </div>
            </td>
        </tr>
        ) 
    )
}

function SSTimezoneTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td >
                {res.id}
            </td>
            <td >
                {res.timeDifference}
            </td>
            <td>
                <div className="img-text-item">
                    <span>
                        <img alt={"RunVid"}  src={res.flag} />
                    </span>
                    <span >{res.countryName}</span>
                </div>
            </td>
            <td>
                <div className="action-buttons">
                    <Link to="#"  className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#"  className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                </div>
            </td>
        </tr>
        ) 
    )
}

function ApikeysTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td>
                {res.key}
            </td>
            <td>
                {res.date}
            </td>
            <td>
                {res.editor ? <div className="role-admin-box">
                    Editor
                </div> : null}
                {res.viewer ? <div className="role-user-box">
                    Viewer
                </div> : null}
                {res.upload ? <div className="role-demo-box">
                    Upload
                </div> : null}
            </td>
            <td>
                <div className="action-buttons">
                    <Link to="#" className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#" className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                </div>
            </td>
        </tr>
        ) 
    )
}

function ContactFormTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td >
                {res.id}
            </td>
            <td >
                {res.date}
            </td>
            <td >
                {res.ns}
            </td>
            <td >
                {res.topic}
            </td>
            <td >
                {res.email}
            </td>
            <td>
                <div className="active-pasive">
                    <div className="pending-box-50"></div>
                    <span >{res.status}</span>
                </div>
            </td>
            <td className={"w-70"}>
                <div className="action-buttons">
                    <Link to="#"  data-fancybox data-src="#add-contact" data-modal={true} data-auto-focus={false} className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                </div>
            </td>
        </tr>
        ) 
    )
}

function CustomerCommnetsTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}> 
            <td className={"move"} >
                <div className="move-id">
                    <div className="move-id-box">
                        <img alt={"RunVid"} src={Move} />
                    </div>
                    <div className="user-img-name">
                        <img alt={"RunVid"}  src={res.avatar} className="img-30" />
                        <div className="user-img-name-detail">
                            <span className="user-img-name-surname" >{res.users[0].ns}</span>
                            <span className="user-img-name-text" >{res.users[0].date}</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className={"w-200"} >
                {res.title}
            </td>
            <td >
                {res.comment}
            </td>
            <td>
                <div className="rating">
                    <FontAwesomeIcon color='#ffbb00' className="deactive-rate" icon={faStar} />
                    <span className="rate" >{res.reviewS}</span>
                </div>
            </td>
            <td>
                <div className="active-pasive">
                    <div  className={(res.active ? 'active' : 'pasive') + "-box-50"}></div>
                    <span >{res.status}</span>
                </div>
            </td>
            <td className={"w-100"} >
                <div className="action-buttons">
                    <Link to="#"  className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#"  className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                </div>
            </td>
        </tr>
        ) 
    )
}

function HelpManagementTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td className={"move-2"} >
                <div className="move-id" >
                    <div className="move-id-box">
                        <img alt={"RunVid"} src={Move} />
                    </div>
                    {res.id}
                </div>
            </td>
            <td>
                <div className="menu-name-content">
                    <div className="menu-name-text">
                        <img alt={"RunVid"} src={RedPlayBtn} />
                        <span >{res.mName}</span>
                    </div>
                    <Link to="#"  data-fancybox data-src="#edit-category" data-modal={true} data-auto-focus={false}  className="menu-name-link">
                        <img alt={"RunVid"} src={MetroEarth} />
                    </Link>
                </div>
            </td>
            <td>
                <div className="active-pasive">
                    <div  className={(res.status ? 'active' : 'pasive') + "-box-50"}></div>
                    <span >{res.status ? 'Active' : 'Pasive'}</span>
                </div>
            </td>
            <td className={"w-150"} >
                <div className="action-buttons">
                    <Link to="#"  className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#"  className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                    <EditDD />
                </div>
            </td>
        </tr>
        ) 
    )
}

function LanguageManagementTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td className={"move-2"} >
                <div className="move-id" >
                    <div className="move-id-box">
                        <img alt={"RunVid"} src={Move} />
                    </div>
                    {res.id}
                </div>
            </td>
            <td >
                {res.code}
            </td>
            <td >
                {res.fileName}
            </td>
            <td>
                <div className="progress-item-content">
                    <div className="progress-item">
                        <div className="progress-box w-100px">
                            <span className={"w-30y"} ></span>
                        </div>
                    </div>
                    <span >%{res.translation}</span>
                </div>
            </td>
            <td className={"w-150"} >
                <div className="action-buttons">
                    <Link to="#"  className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#"  className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                </div>
            </td>
        </tr>
        ) 
    )
}

function LanguageTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td >
                {res.id}
            </td>
            <td >
                {res.code}
            </td>
            <td>
                <div className="img-text-item">
                    <span>
                        <img alt={"RunVid"}  src={res.countryFlag} />
                    </span>
                    <span >{res.countryName}</span>
                </div>
            </td>
            <td>
                <div className="active-pasive">
                    <div  className={(res.status ? 'active' : 'pasive') + "-box-50"}></div>
                    <span >{res.status ? 'Active' : 'Pasive'}</span>
                </div>
            </td>
            <td>
                <div className="action-buttons">
                    <Link to="#"  className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#"  className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                </div>
            </td>
        </tr>
        ) 
    )
}

function LogTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td>
                <div className="page-name-text">
                    <span className="page-name-text-title" >{res.pageNameTitle}</span>
                    <span className="page-name-text-text" >{res.pageNameCode}</span>
                </div>
            </td>
            <td>
                <div className="user-img-name">
                    <img alt={"RunVid"} src={Avatar2} className="img-30" />
                    <div className="user-img-name-detail">
                        <span className="user-img-name-surname" >{res.userName}</span>
                        <span className="user-img-name-text" >{res.userCode}</span>
                    </div>
                </div>
            </td>
            {res.roles.map((role) =>
            <td>
                {role === 'Admin' ? 
                <div className="role-admin-box">
                    Admin
                </div>
                : null}
                {role === 'User' ? 
                <div className="role-user-box">
                    User
                </div>
                : null}
                {role === 'Demo' ? 
                <div className="role-demo-box">
                    Demo
                </div>
                : null}
            </td>
            )}
            <td >
                {res.date}
            </td>
            <td>
                <div className="action-buttons">
                    <Link to="#"  className="action-btn">
                        <img alt={"RunVid"} src={ENFlag} />
                    </Link>
                    <Link to="#"  className="action-btn">
                        <img alt={"RunVid"} src={Smartphone} />
                    </Link>
                    <Link to="#"  className="action-btn">
                        <img alt={"RunVid"} src={Chrome} />
                    </Link>
                </div>
            </td>
        </tr>
        ) 
    )
}

function MemberManagement(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td>
                <div className="user-img-name">
                    <img alt={"RunVid"} src={Avatar} className="img-30" />
                    <div className="user-img-name-detail">
                        <span className="user-img-name-surname" >{res.name}</span>
                        <span className="user-img-name-text" >{res.code}</span>
                    </div>
                </div>
            </td>
            <td >{res.email}</td>
            <td >{res.registirationTime}</td>
            <td >{res.lastActivity}</td>
            <td>
                <div className="role-admin-box">
                    Seller
                </div>
            </td>
            <td className={"w-190"} >
                <div className="progress-item-content">
                    <div className="progress-item">
                        <div className="progress-top">
                            <div className="progress-right">
                                <span>504 GB</span> of 1 TB
                            </div>
                        </div>
                        <div className="progress-box">
                            <span className={"w-30y"} ></span>
                        </div>
                    </div>
                    <span >%{res.bandwith}</span>
                </div>
            </td>
            <td className={"w-190"} >
                <div className="progress-item-content">
                    <div className="progress-item">
                        <div className="progress-top">
                            <div className="progress-right">
                                <span>504 GB</span> of 1 TB
                            </div>
                        </div>
                        <div className="progress-box">
                            <span className={"w-30y"} ></span>
                        </div>
                    </div>
                    <span >%{res.storageUsed}</span>
                </div>
            </td>
            <td>
                <span  className="red-text">
                    {res.time}
                </span>
            </td>
        </tr>
        ) 
    )
}

function MenuListTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td >{res.id}</td>
            <td>
                <div className="menu-name-content">
                    <div className="menu-name-text">
                        <img alt={"RunVid"} src={Home} />
                        <span >{res.mName}</span>
                    </div>
                    <Link to="#"  data-fancybox data-src="#language" data-modal={true} data-auto-focus={false}  className="menu-name-link">
                        <img alt={"RunVid"} src={MetroEarth} />
                    </Link>
                </div>
            </td>
            <td >{res.url}</td>
            <td >{res.path}</td>
            <td>
                <div className="active-pasive">
                    <div  className={(res.status ? "active" : "pasive") + "-box-50"}></div>
                    <span >{res.status ? 'Active' : 'Pasive'}</span>
                </div>
            </td>
            <td>
                <div  className={"role-" + (res.notation === 'user' ? "user" : "admin") + "-box"}>
                    {res.notation === 'user' ? 'Hidden' : 'Show'}
                </div>
            </td>
            <td className={"w-150"} >
                <div className="action-buttons">
                    <Link to="#"  className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#"  className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                    <EditDD />
                </div>
            </td>
        </tr>
        ) 
    )
}

function SystemFeaturesTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td className={"move-2"} >
                <div className="move-id" >
                    <div className="move-id-box">
                        <img alt={"RunVid"} src={Move} />
                    </div>
                    {res.id}
                </div>
            </td>
            <td>
                <div className="menu-name-content">
                    <div className="menu-name-text">
                        <span >{res.categoryN}</span>
                    </div>
                    <Link to="#"  data-fancybox data-src="#add-category" data-modal={true} data-auto-focus={false}  className="menu-name-link">
                        <img alt={"RunVid"} src={MetroEarth} />
                    </Link>
                </div>
            </td>
            <td>
                <div className="active-pasive">
                    <div  className={(res.status ? 'active' : 'pasive') + "-box-50"}></div>
                    <span >{res.status ? 'Active' : 'Pasive'}</span>
                </div>
            </td>
            <td className={"w-150"} >
                <div className="action-buttons">
                    <Link to="#"  className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#"  className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                    <EditDD />
                </div>
            </td>
        </tr>
        ) 
    )
}

function PromotionsTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td className={"move-w-200"} >
                <div className="move-id">
                    <div className="move-id-box">
                        <img alt={"RunVid"} src={Move} />
                    </div>
                    <div className="menu-name-content w-100y">
                        <div className="menu-name-text">
                            <span >{res.code}</span>
                        </div>
                        <Link to="#"  data-fancybox data-src="#add-category" data-modal={true} data-auto-focus={false}  className="menu-name-link">
                            <img alt={"RunVid"} src={MetroEarth2} />
                        </Link>
                    </div>
                </div>
            </td>
            <td >
                %{res.definition} İndirim
            </td>
            <td >
                {res.startDate}
            </td>
            <td >
                {res.endDate}
            </td>
            <td >
                %{res.discountR}
            </td>
            <td>
                {res.count}
            </td>
            <td>
                <div className="active-pasive">
                    <div  className={(res.status ? 'active' : 'pasive') + "-box-50"}></div>
                        <span >{res.status ? 'Active' : 'Pasive'}</span>
                    </div>
            </td>
            <td>
                <div className="action-buttons">
                    <Link to="#"  className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#"  className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                    <EditDD />
                </div>
            </td>
        </tr>
        ) 
    )
}

function TimezoneTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td >
                {res.id}
            </td>
            <td >
                {res.timeD}
            </td>
            <td>
                <div className="img-text-item">
                    <span>
                        <img alt={"RunVid"} src={res.countryFlag} />
                    </span>
                    <span>{res.countryName}</span>
                </div>
            </td>
            <td>
                <div className="action-buttons">
                    <Link to="#" className="action-btn action-edit-btn">
                        <img alt={"RunVid"} src={FeatherEdit} />
                    </Link>
                    <Link to="#" className="action-btn action-delete-btn">
                        <img alt={"RunVid"} src={FeatherTrash} />
                    </Link>
                </div>
            </td>
        </tr>
        ) 
    )
}

function TransactionHistoryTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td>{res.date}</td>
            <td>
                <div className="user-img-name">
                    <img alt={"RunVid"}  src={res.users[0].avatar} className="img-30" />
                    <div className="user-img-name-detail">
                        <span className="user-img-name-surname" >{res.users[0].name}</span>
                        <span className="user-img-name-text" >{res.users[0].date}</span>
                    </div>
                </div>
            </td>
            <td >{res.amount}</td>
            <td >{res.bandwith}</td>
            <td >{res.storage}</td>
            <td >{res.validTill}</td>
            <td>
                <div className="active-pasive">
                    <div  className={(res.status ? "active" : "pasive") + "-box-50"}></div>
                    <span >{res.status ? 'Active' : 'Pasive'}</span>
                </div>
            </td>
            <td>
                <div className="action-buttons">
                    <Link to="#"  className="btn btn-outline btn-text-secondary h-32">
                        Print
                    </Link>
                    <Link to="#" v className="btn btn-outline btn-text-primary h-32 ml-10">
                        <img alt={"RunVid"} src={FeatherDownload} />
                    </Link>
                </div>
            </td>
        </tr>
        ) 
    )
}

function UserListTable(props) {
    return(
        props.items.map((res) =>
        <tr key={res.keyT}>
            <td>
                <div className="user-img-name">
                    <img alt={"RunVid"} src={res.name[0].avatar} className="img-30" />
                    <div className="user-img-name-detail">
                        <span className="user-img-name-surname" >{res.name[0].name}</span>
                        <span className="user-img-name-text" >{res.name[0].code}</span>
                    </div>
                </div>
            </td>
            <td >{res.email}</td>
            <td >{res.lastActivity}</td>
            <td>
                <div ley={res.role} className={"role-" + (res.role === "admin" ? 'admin' : '') + (res.role === "user" ? 'user' : '') + (res.role === "demo" ? 'demo' : '') + "-box"}>
                    {(res.role === "admin" ? 'Admin' : '') + (res.role === "user" ? 'User' : '') + (res.role === "demo" ? 'Demo' : '')}
                </div>
            </td>
            <td>
                <div className="active-pasive">
                    <div  className={(res.status === 'active' ? 'active' : '') + (res.status === 'waiting' ? 'waiting' : '') + (res.status === 'pasive' ? 'pasive' : '') + "-box-50"}></div>
                    <span >{(res.status === 'active' ? 'Active' : '') + (res.status === 'waiting' ? 'Waiting' : '') + (res.status === 'pasive' ? 'Pasive' : '')}</span>
                </div>
            </td>
            <td className="score">
                <Link to="#"  className="btn btn-outline btn-text-secondary h-32">
                    Edit
                </Link>
            </td>
        </tr>
        ) 
    )
}

function EditDD(props) {
    const [showDd, changeVisible] = useState();
    return (
        <div className="action-more">
            <Link to="#"  className="action-more-btn dropdown">
                <img onClick={() => { changeVisible(!showDd) }} alt={"RunVid"} src={DownArrow} />
            </Link>
            <div className="dropdown-menu" style={{display: (showDd ? '' : 'none')}}>
                <div className="dropdown-menu-list">
                    <Link to="#" >Link 1</Link>
                    <Link to="#" >Link 2</Link>
                    <Link to="#" >Link 3</Link>
                </div>
            </div>
        </div>
    )
}

class Table extends Component {
    state = {
        menuShow: true,
        reverse: false,
        items: this.props.items,
    }
    sort = () => {
        this.setState({
            items: this.state.items.reverse()
        })
    }
    render() {
        const  {t} = this.props
        return (
            <div>
                <div>
                <div className="dash-table scroll">
                            <table id="sortable">
                                <thead>
                                    {this.props.tableName === 'GSBlog' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesAuthor')}</th>
                                        <th data-type="string">{t('tablesTransation')}</th>
                                        <th data-type="string">{t('tablesPostDate')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                     : null}

                                    {this.props.tableName === 'GSExtra' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesUser')}</th>
                                        <th data-type="string">{t('tablesTransation')}</th>
                                        <th data-type="string">{t('tablesPostDate')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr> 
                                    : null}

                                    {this.props.tableName === 'GSFaq' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesDefinition')}</th>
                                        <th data-type="string">{t('tablesTransation')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr> 
                                    : null}

                                    {this.props.tableName === 'GSFooter' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesDefinition')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'GSHow' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesDefinition')}</th>
                                        <th data-type="string">{t('tablesTransation')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'GSSlider' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesDefinition')}</th>
                                        <th data-type="string">{t('tablesPictures')}</th>
                                        <th data-type="string">{t('tablesTransation')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'GSSolution' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesDefinition')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'GSUserComments' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesUser')}</th>
                                        <th data-type="string">{t('tablesRate')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'SSLanguage' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesDefinition')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'SSLocation' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesDefinition')}</th>
                                        <th data-type="string">{t('tablesCode')}</th>
                                        <th data-type="string">{t('tablesUnit')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'SSMoney' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesDefinition')}</th>
                                        <th data-type="string">{t('tablesCode')}</th>
                                        <th data-type="string">{t('tablesUnit')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'SSTimezone' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesTimeDifference')}</th>
                                        <th data-type="string">{t('tablesName')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'Apikeys' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">API Secret</th>
                                        <th data-type="string">{t('tablesDate')}</th>
                                        <th data-type="string">Permission</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'ContactForm' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesDate')}</th>
                                        <th data-type="string">{t('tablesNameSurname')}</th>
                                        <th data-type="string">{t('tablesTopic')}</th>
                                        <th data-type="string">{t('tablesEmail')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'CustomerComments' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesUser')}</th>
                                        <th data-type="string">Title</th>
                                        <th data-type="string">Comment</th>
                                        <th data-type="string">Review Score</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'HelpManagement' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesMenuName')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'LanguageManagement' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesCode')}</th>
                                        <th data-type="string">File {t('tablesName')}</th>
                                        <th data-type="string">Translation {t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'Language' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesCode')}</th>
                                        <th data-type="string">{t('tablesName')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'Log' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesPageName')}</th>
                                        <th data-type="string">{t('tablesUser')}</th>
                                        <th data-type="string">{t('tablesRole')}</th>
                                        <th data-type="string">{t('tablesDate')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'MemberManagement' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="string">{t('tablesName')}</th>
                                        <th data-type="string">{t('tablesEmail')}</th>
                                        <th data-type="number">{t('tablesRegistirationTime')}</th>
                                        <th data-type="string">{t('tablesLastActivity')}</th>
                                        <th data-type="string">{t('tablesRole')}</th>
                                        <th data-type="string">{t('tablesBandwith')}</th>
                                        <th data-type="string">{t('tablesStorageUsed')}</th>
                                        <th data-type="string">{t('tablesRemainingTime')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'MenuList' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesMenuName')}</th>
                                        <th data-type="string">{t('tablesUrl')}</th>
                                        <th data-type="number">{t('tablesPath')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesNotation')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'Promotions' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesPromoCode')}</th>
                                        <th data-type="string">{t('tablesDefinition')}</th>
                                        <th  data-type="string">{t('tablesStartDate')}</th>
                                        <th data-type="string">{t('tablesFinishDate')}</th>
                                        <th data-type="string">{t('tablesRate')}</th>
                                        <th data-type="string">{t('tablesNumber')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'SystemFeatures' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesCategoryName')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'Timezone' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesId')}</th>
                                        <th data-type="string">{t('tablesTimeDifference')}</th>
                                        <th data-type="string">{t('tablesName')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'TransactionHistory' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="number">{t('tablesDate')}</th>
                                        <th data-type="string">{t('tablesUser')}</th>
                                        <th data-type="string">{t('tablesAmount')}</th>
                                        <th data-type="string">{t('tablesBandwith')}</th>
                                        <th data-type="string">{t('tablesStorage')}</th>
                                        <th data-type="string">{t('tablesValidTill')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                    {this.props.tableName === 'UserList' ? 
                                    <tr onClick={() => this.sort()}>
                                        <th data-type="string">{t('tablesName')}</th>
                                        <th data-type="string">{t('tablesEmail')}</th>
                                        <th data-type="number">{t('tablesLastActivity')}</th>
                                        <th data-type="string">{t('tablesRole')}</th>
                                        <th data-type="string">{t('tablesStatus')}</th>
                                        <th data-type="string">{t('tablesAction')}</th>
                                    </tr>
                                    : null}

                                </thead>
                                <tbody id="table" className="ui-sortable">

                                    {this.props.tableName === "GSBlog" ?
                                        <GSBlogBody items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "GSExtra" ?
                                        <GSExtraTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "GSFaq" ?
                                        <GSFaqTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "GSFooter" ?
                                        <GSFooterTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "GSHow" ?
                                        <GSHowTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "GSSlider" ?
                                        <GSSliderTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "GSSolution" ?
                                        <GSSolutionTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "GSUserComments" ?
                                        <GSUserCommentsTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "SSLanguage" ?
                                        <SSLanguageTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "SSLocation" ?
                                        <SSLocationTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "SSMoney" ?
                                        <SSMoneyTable items={ this.state.items } />
                                    : null}
                                    
                                    {this.props.tableName === "SSTimezone" ?
                                        <SSTimezoneTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "Apikeys" ?
                                        <ApikeysTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "ContactForm" ?
                                        <ContactFormTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "CustomerComments" ?
                                        <CustomerCommnetsTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "HelpManagement" ?
                                        <HelpManagementTable
                                            menuShow={this.state.menuShow}
                                            items={ this.state.items }
                                            list = {<div></div>}
                                        />
                                    : null}

                                    {this.props.tableName === "LanguageManagement" ?
                                        <LanguageManagementTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "Language" ?
                                        <LanguageTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "Log" ?
                                        <LogTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "MemberManagement" ?
                                        <MemberManagement items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "MenuList" ?
                                        <MenuListTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "Promotions" ?
                                        <PromotionsTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "SystemFeatures" ?
                                        <SystemFeaturesTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "Timezone" ?
                                        <TimezoneTable items={ this.state.items } />
                                    : null}

                                    {this.props.tableName === "TransactionHistory" ?
                                        <TransactionHistoryTable items={this.state.items} />
                                    : null}

                                    {this.props.tableName === "UserList" ?
                                        <UserListTable items={this.state.items} />
                                    : null}

                                </tbody>
                            </table>
                        </div>
                        <Pagination />
            </div>
            </div>
        )
    }
}


export default withTranslation()(Table)