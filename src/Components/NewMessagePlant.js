import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

//TextEditor Imports
import { CKEditor } from '@ckeditor/ckeditor5-react';
import classicEditor from '@ckeditor/ckeditor5-build-classic';

class NewMessagePlant extends Component {
    render() {
        const  {t} = this.props
        return (
            <div className="message-detail">
                <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                    <div className="form-group mb-20">
                        <label className="form-label">{t('newMessagePlantTitle')}</label>
                        <input type="text" placeholder="Message Title" className="form-control" name="menuname" required="" />
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">{t('newMessagePlantContent')}</label>
                        <CKEditor 
                            editor={ classicEditor }
                        />
                    </div>
                    <div className="form-buttons">
                        <button data-fancybox-close className="btn btn-light-green pl-50 pr-50 h-42">
                            {t('newMessagePlantSaveAndDraft')}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="ml-10">
                                <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M13.375,3.375a10,10,0,1,0,10,10A10,10,0,0,0,13.375,3.375Zm.673,10.865a.675.675,0,0,1-.673.673H8.76a.673.673,0,1,1,0-1.346H12.7V7.221a.673.673,0,1,1,1.346,0Z" transform="translate(-3.375 -3.375)" fill="#fff"/>
                            </svg>                                  
                        </button>
                        <button type="submit" className="btn btn-secondary pl-50 pr-50 h-42">
                            {t('newMessagePlantSend')}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.611" height="20.608" viewBox="0 0 20.611 20.608" className="ml-10">
                                <path id="Icon_ionic-ios-send" data-name="Icon ionic-ios-send" d="M24.464,4.549,4.758,13.138a.452.452,0,0,0,.016.821L10.1,16.97a.859.859,0,0,0,.982-.1L21.6,7.813c.07-.059.236-.172.3-.107s-.038.231-.1.3L12.708,18.248a.857.857,0,0,0-.086,1.025l3.484,5.588a.453.453,0,0,0,.816-.011L25.07,5.145A.452.452,0,0,0,24.464,4.549Z" transform="translate(-4.503 -4.503)" fill="#fff"/>
                            </svg>                                  
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withTranslation()(NewMessagePlant);