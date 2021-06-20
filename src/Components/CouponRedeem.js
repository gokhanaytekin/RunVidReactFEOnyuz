import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class CouponRedeem extends Component {
    render() {
        const  {t} = this.props
        return (
            <div className="content-top-right">
                <div className="text-input">
                    <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                        <span>{t('couponRedeemTitle')}</span>
                        <div className="form-group">
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-secondary h-36">{t("couponRedeemRedeem")}</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withTranslation()(CouponRedeem);