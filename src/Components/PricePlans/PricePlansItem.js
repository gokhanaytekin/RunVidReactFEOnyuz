import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class PricePlansItem extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div className="price-plans-item">
                    <div className="price-plans-content">
                        <div className="price-plans-top">
                            <div className="price-plans-title">{this.props.planTitle}</div>
                            <div className="price-plans-price">
                                <div className="old-price">{this.props.oldPrice}$</div>
                                <div className="new-price">{this.props.newPrice}$</div>
                            </div>
                        </div>
                        <div className="price-plans-features">
                            <span className="gray-text">Bandwith</span>
                            <span className="dark-text">{this.props.bandwith} GB</span>
                        </div>
                        <div className="price-plans-features">
                            <span className="gray-text">Maximum Storage</span>
                            <span className="dark-text">{this.props.storage} GB</span>
                        </div>
                        <div className="price-plans-features">
                            <span className="gray-text">Ekstra Ozellik</span>
                            <span className="dark-text">{this.props.extra ? "Var" : "Yok"}</span>
                        </div>
                    </div>
                    <Link to={"/priceplans/buy"} className="price-plans-btn">
                        Buy
                    </Link>
                </div>
            </div>
        )
    }
}
