import React, { Component } from 'react';

//Components Imports
import Input from '../../Components/PricePlans/Input';
import RoleChooser from '../../Components/GeneralSettings/RoleChooser';
import LanguageSettings from '../../Components/GeneralSettings/LanguageSettings';
import GeneralContentTop from '../../Components/GeneralSettings/GeneralContentTop';

//TextEditor Imports
import { CKEditor } from '@ckeditor/ckeditor5-react';
import classicEditor from '@ckeditor/ckeditor5-build-classic';

export default class GeneralSettingsAddExtra extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- content-top --> */}
                <GeneralContentTop name={"Add Extra"} redSave path={"/generalsettings/extra"} />
                {/* <!-- end #content-top --> */}

                <div className="grid">
                    <div className="col-lg-9 col-md-12-col-sm-12 col-xs-12">
                        <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                            <div className="grid">
                                <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                    <Input title={"Page Title"} />
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                    <Input title={"Page URL"} />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <RoleChooser />
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                    <CKEditor 
                                        editor={ classicEditor }
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <LanguageSettings />
                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
