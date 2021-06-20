import React, { Component } from 'react';

//Pictures Imports
import Move from '../../assets/img/move.svg';
import Logo from '../../assets/img/logo.svg';

export default class CompanyItem extends Component {
    render() {
        return (
            <div className="move-id">
                <div className="move-id-box">
                    <img alt={"RunVid"} src={Move} />
                </div>
                <div className="user-img-name">
                    <img alt={"RunVid"} src={Logo} className="img-43 contain" />
                    <div className="user-img-name-detail">
                        <div className="user-img-name-surname">{this.props.companyName}</div>
                        <span className="user-img-name-text blue-text">{this.props.companyJob}</span>
                    </div>
                </div>
            </div>
        )
    }
}
