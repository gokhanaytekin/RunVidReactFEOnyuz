import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class RoleChooser extends Component {
    render() {
        const  {t} = this.props
        return (
            <div className="form-group">
                <label className="form-label">{t('roleChooserUserRole')}</label>
                <div className="select-box-list">
                    <div className="select-box-list-item">
                        <input type="radio" className="input" id="input1" name="input" required />
                        <label htmlFor="input1" className="label">{t('roleChooserActive')}</label>
                    </div>
                    <div className="select-box-list-item">
                        <input type="radio" className="input" id="input2" name="input" required />
                        <label htmlFor="input2" className="label">{t('roleChooserPasive')}</label>
                    </div>
                </div>
                <div className="help-block with-errors"></div>
            </div>
        )
    }
}

export default withTranslation()(RoleChooser);