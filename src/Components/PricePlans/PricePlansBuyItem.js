import React, { Component } from 'react';

export default class PricePlansBuyItem extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="price-plans mt-0">
                    <div className="price-plans-item price-plans-item-buy">
                        <div className="price-plans-content">
                            <div className="price-plans-top">
                                <div className="price-plans-title">Starter</div>
                            </div>
                            <div className="price-plans-features">
                                <span className="gray-text">Bandwith</span>
                                <span className="dark-text">300 GB</span>
                            </div>
                            <div className="price-plans-features">
                                <span className="gray-text">Maximum Storage</span>
                                <span className="dark-text">50 GB</span>
                            </div>
                            <div className="price-plans-features">
                                <span className="gray-text">Ekstra Ozellik</span>
                                <span className="dark-text">Var</span>
                            </div>
                            <div className="price-plans-features">
                                <span className="gray-text">Valid Till</span>
                                <span className="dark-text">15:00 12/02/2021</span>
                            </div>
                        </div>
                        <div className="price-plans-price-buy">
                            <div className="old-price">149$</div>
                            <div className="new-price">149$</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
