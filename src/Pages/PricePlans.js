import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Components Imports
import PricePlanItem from '../Components/PricePlans/PricePlansItem';

//Content Top Import
import CouponRedeem from '../Components/CouponRedeem';

export default class PrivePlans extends Component {
    render() {
        return (
            <main className="content">
                <div className="welcome">
                    <div className="content-top align-items-center">
                        <div className="content-top-left">
                            <ul className="breadcrumb">
                                <li>
                                    <Link to="#" className="breadcrumb-item active">Price Plans</Link> 
                                </li>
                            </ul>
                        </div>
                        <CouponRedeem />
                    </div>
                    <div className="price-plans">
                        <div className="grid">
                            <PricePlanItem planTitle="Starter" oldPrice="149" newPrice="149" bandwith="300" storage="50" extra={true} />
                            <PricePlanItem planTitle="Value" oldPrice="149" newPrice="149" bandwith="300" storage="50" extra={true} />
                            <PricePlanItem planTitle="Express" oldPrice="149" newPrice="149" bandwith="300" storage="50" extra={true} />
                            <PricePlanItem planTitle="Pro" oldPrice="149" newPrice="149" bandwith="300" storage="50" extra={true} />
                            <PricePlanItem planTitle="Plus" oldPrice="149" newPrice="149" bandwith="300" storage="50" extra={true} />
                            <PricePlanItem planTitle="Premium" oldPrice="149" newPrice="149" bandwith="300" storage="50" extra={true} />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
