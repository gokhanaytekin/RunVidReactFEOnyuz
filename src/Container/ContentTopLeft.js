import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Icons Imports
import Search from '../assets/img/icons/search.svg';

export default class ContentTopLeft extends Component {
    render() {
        return (
            <div className="content-top-left">
                <ul className="breadcrumb">
                    <li>
                        <Link to = {"/apikeys"} className="breadcrumb-item">Home</Link> 
                        <Link to="#" className="breadcrumb-item active">{this.props.activeItem} {this.props.count ? <span>{this.props.dataCount} Veri</span> : null}</Link> 
                    </li>
                </ul>
                <div id="content-top-search">
                    <input id="table-search" type="text" placeholder="Search by id ,name...." autoComplete="off" />
                    <div className="content-top-search-icon">
                        <img alt={"RunVid"} src={Search} />
                    </div>
                </div>
            </div>
        )
    }
}
