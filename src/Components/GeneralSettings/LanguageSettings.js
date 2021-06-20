import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

//Pictures Imports
import TRFlag from '../../assets/img/flag/tr.svg';
import ENFlag from '../../assets/img/flag/en.svg';

class LanguageSettings extends Component {
    render() {
        const  {t} = this.props
        return (
            <div>
                <div className="gray-text mb-10">{t('languageSettingsLanguageSettings')}</div>
                <label className="multi-lang-item">
                    <div className="multi-lang-img">
                        <img alt={"RunVid"} src={ENFlag} />
                    </div>
                    <div className="multi-lang-detail">
                        <div className="multi-lang-name">English</div>
                    </div>
                    <input type="checkbox" name="contact-user" value="1" className="green-select-box" />
                </label>
                <label className="multi-lang-item">
                    <div className="multi-lang-img">
                        <img alt={"RunVid"} src={TRFlag} />
                    </div>
                    <div className="multi-lang-detail">
                        <div className="multi-lang-name">Türkçe</div>
                    </div>
                    <input type="checkbox" name="contact-user" value="1" className="green-select-box"/>
                </label>
            </div>
        )
    }
}

export default withTranslation()(LanguageSettings);