import React, { Component } from 'react';
import {Link} from 'react-router-dom'

//Pictures Imports
import StatusRight from '../assets/img/status-logo.svg';
import StatusLogo from '../assets/img/status-logo.svg';
import StatusBg from '../assets/img/status-bg.svg';
import error from '../assets/img/error.svg'

export default class Error extends Component {
    render() {
        return (
            <div className="status-page">
                <div className="status-right-bg">
                    <img alt={"RunVid"} src={StatusRight} />
                </div>
                <Link to="#" className="logo">
                    <img alt={"RunVid"} src={StatusLogo} />
                </Link> 
                <div className="status-title under-title">
                    <div className="status-title-bg">
                        <img alt={"RunVid"} src={StatusBg} />
                    </div>
                    <div className="image serror">
                        <img alt={"RunVid"} src={error} />
                    </div>
                    <div className="status-title-text error-text">
                        ERROR
                    </div>
                </div>
                <div className="status-bottom">
                    <div className="status-bottom-text">
                        <div className="title">
                            Unexpected error on this page
                        </div>
                        <div className="text">
                            Oppss! The Page that you are looking for does not exist. <br/> Plase Return to home.
                        </div>
                        <Link to="#" className="btn btn-primary h-42">Go Back</Link> 
                    </div>
                </div>
            </div>
        )
    }
}
