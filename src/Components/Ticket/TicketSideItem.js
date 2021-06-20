import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// import Video1 from '../assets/img/video-1.jpg';
import Avatar2 from '../../assets/img/avatar2.svg';

class TicketSideItem extends Component {
    render() {
        const  {t} = this.props
        return (
            <div className="ticket-side-item">
                <div className="ticket-side-item-menu">
                    <div className="left">
                        <Link to="#" >
                            <i data-feather="search"></i>
                            <span>{t('ticketSideItemReview')}</span>
                        </Link>
                        <Link to="#"  data-fancybox data-src="#answer" data-modal={true} data-auto-focus={false} >
                            <i data-feather="message-circle"></i>
                            <span>{t('ticketSideItemAnswer')}</span>
                        </Link>
                        <Link to="#" >
                            <i data-feather="edit"></i>
                            <span>{t('ticketSideItemEdit')}</span>
                        </Link>
                    </div>
                    <Link to="#"  className="delete">
                        <i data-feather="trash"></i>
                    </Link>
                </div>
                <div className="ticket-side-item-top">
                    <div className="left">
                        <span className="id">{this.props.code}</span>
                        <div className={"ticket-item-box " + (this.props.kind === "talep" ? "blue" : "green") }>
                            {this.props.kind}
                        </div>
                        <div className={"active-pasive " + (this.props.waiting === "orta" ? 'mid' : 'imp')}>
                            <div className={(this.props.waiting === "orta" ? 'waiting' : 'pasive' ) +  "-box-50"}></div>
                            <span>{this.props.waiting === "orta" ? 'Orta' : null} {this.props.waiting === "acil" ? 'Acil' : null}</span>
                        </div>
                    </div>
                    <div className="right">
                        <span className="date">{this.props.date}</span>
                    </div>
                </div>
                <div className="user-img-name">
                    <img alt={"RunVid"} src={Avatar2} className="img-43" />
                    <div className="user-img-name-detail">
                        <span className="user-img-name-surname">{this.props.name}</span>
                        <span className="user-img-name-text">{this.props.nameCode}</span>
                    </div>
                </div>
                <div className="ticket-message-text">
                    {this.props.message}
                </div>
            </div>
        )
    }
}

export default withTranslation()(TicketSideItem);