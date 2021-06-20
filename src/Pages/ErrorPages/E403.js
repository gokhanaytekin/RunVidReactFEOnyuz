import React, { Component } from 'react';
import {Link} from 'react-router-dom'

//Pictures Imports
import StatusRight from '../../assets/img/status-right.svg';
import StatusLogo from '../../assets/img/status-logo.svg';
import StatusBg from '../../assets/img/status-bg.svg';
import I403 from '../../assets/img/403.svg';

export default class E403 extends Component {
    render() {
        return (
            <div className="status-page">
                <div className="status-right-bg">
                    <img alt={"RunVid"} src={StatusRight} />
                </div>
                <Link to="#" className="logo">
                    <img alt={"RunVid"} src={StatusLogo} />
                </Link> 
                <div className="status-title">
                    <div className="status-title-bg">
                        <img alt={"RunVid"} src={StatusBg} />
                    </div>
                    <div className="image s403">
                        <img alt={"RunVid"} src={I403} />
                    </div>
                    <div className="status-title-text">
                        403
                    </div>
                </div>
                <div className="status-bottom">
                    <div className="status-bottom-text">
                        <div className="title">
                            We are Sorry..
                        </div>
                        <div className="text">
                            The page you are trying to Access has restricted access. <br/> Please refer to your system administrator
                        </div>
                        <Link to="#" className="btn btn-primary h-42">Go Back</Link> 
                    </div>
                </div>
            </div>
        )
    }
}
