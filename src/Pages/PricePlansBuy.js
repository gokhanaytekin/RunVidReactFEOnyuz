import React, { Component } from 'react';

//Icons Imports
import calling from '../assets/img/icons/calling.svg'

//Components Imports
import PricePlansBuyItem from '../Components/PricePlans/PricePlansBuyItem';
import Input from '../Components/PricePlans/Input';
import { Day, Year} from '../Components/PricePlans/Date';
import Method from '../Components/PricePlans/PaymentMethod';


export default class PricePlansBuy extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- price-plans --> */}
                <div className="grid">
                    <PricePlansBuyItem />
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                            <div className="content-title">
                                Enter billing details
                            </div>
                            <div className="grid">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="form-label">Language</label>
                                        <div className="niceCountryInputSelector" data-selectedcountry="TR" data-showspecial={false} data-showflags={true} data-i18nall="All selected" data-i18nnofilter="No selection" data-i18nfilter="Filter" data-onchangecallback="onChangeCallback"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <Input title={"Billing Name"} />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <Input icon={calling} title={"Phone Number"} />
                                </div>
                                
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <Input title={"Adress"} />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <Input title={"Additional Info to show in invoice (e.g Tax ID)"} />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <Method paypal cc />
                                </div>
                            </div>
                            <div className="content-title mt-30">
                                Enter card details
                            </div>
                            <div className="grid">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="grid">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <Input title={"Card Name"} />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <Input title={"Card Number"} />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="grid">
                                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                    <Day />
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                    <Year />
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                    <Input title={"CCV"} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="card-wrapper mt-10"></div>
                                </div>
                            </div>
                            <div className="form-buttons justify-flex-start">
                                <button data-fancybox-close className="btn btn-primary pl-50 pr-50 h-42">Cancel</button>
                                <button type="submit" className="btn btn-secondary pl-50 pr-50 h-42">Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!-- end #price-plans --> */}

            </div>

        </main>
        )
    }
}
