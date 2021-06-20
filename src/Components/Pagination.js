import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Icons Imports
import ArrowLeft from '../assets/img/icons/arrow-left.svg';
import ArrowRight from '../assets/img/icons/arrow-right.svg';

export default class Pagination extends Component {
    render() {
        return (
            <div className="dash-table-footer">
                <div className="page-num">
                    Showing <b>1 to 1</b> of <b>1</b> entries.
                </div>
                <div className="pagination">
                    <span><b>1</b> to <b>40</b> Page</span>
                    <div className="page-no">
                        <Link to="#"> 
                            <img alt={"RunVid"} src={ArrowLeft} />
                        </Link> 
                        <input type="text" placeholder="Page No" />
                        <Link to="#"> 
                            <img alt={"RunVid"} src={ArrowRight} />
                        </Link> 
                    </div>
                </div>
            </div>
        )
    }
}
