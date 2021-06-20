import React, { Component } from 'react';

import Paypal from '../../assets/img/paypal.svg';

export default class PaymentMethod extends Component {
    render() {
        return (
            <div className="form-group">
                <label className="form-label">Select payment method</label>
                <div className="select-box-list select-box-list-border">
                    { this.props.cc ? <div className="select-box-list-item">
                        <input type="radio" className="input" id="input1" name="input" required />
                        <label htmlFor="input1" className="label">Credit Card</label>
                    </div> : null}
                    { this.props.paypal ? <div className="select-box-list-item">
                        <input type="radio" className="input" id="input2" name="input" required />
                        <label htmlFor="input2" className="label"><img alt={"RunVid"} src={Paypal} /></label>
                    </div> : null}
                </div>
                <div className="help-block with-errors"></div>
            </div>
        )
    }
}
