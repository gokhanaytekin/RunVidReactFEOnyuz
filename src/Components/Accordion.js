import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Icon Import
import ArrowDown from '../assets/img/icons/arrow-down.svg';
import FeatherEdit from '../assets/img/icons/feather-edit.svg';
import FeatherTrash from '../assets/img/icons/feather-trash.svg';

export default class Accordion extends Component {
    state = {
        show: false
    }
    render() {
        return (
            <li>
                <div onClick = {() => { this.setState({ show: !this.state.show }) }} className="accordion-header">
                    <div className="left">
                        <div className="active-pasive online">
                            <div className="active-box-50"></div>
                            <span>{this.props.date}</span>
                        </div>
                        <div className="title">{this.props.title}</div>
                    </div>
                    <div className="right">
                        <div className="action-buttons">
                            <Link to="#" data-fancybox data-src="#edit-log" data-modal={true} data-auto-focus={false}  className="action-btn action-edit-btn">
                                <img alt={"RunVid"} src={FeatherEdit} />
                            </Link> 
                            <Link to="#" className="action-btn action-delete-btn">
                                <img alt={"RunVid"} src={FeatherTrash} />
                            </Link> 
                            <div className="action-more">
                                <Link to="#" className="action-more-btn">
                                    <img alt={"RunVid"} src={ArrowDown} />
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
                { this.state.show ? <div className="accordion-body">
                    <div className="whatsnew-item">
                        <div className="num">1</div>
                        <span className="text">Video edit güncellemesi</span>
                        <div className="updated">Güncelleme</div>
                    </div>
                    <div className="whatsnew-item">
                        <div className="num">2</div>
                        <span className="text">Video edit güncellemesi</span>
                        <div className="added">Eklendi</div>
                    </div>
                </div> : null }
            </li>
        )
    }
}
