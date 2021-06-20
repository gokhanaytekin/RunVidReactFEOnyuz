import React, { Component } from 'react';

//Components Imports
import FileInput from '../../Components/FileInput';
import Input from '../../Components/PricePlans/Input';
import RoleChooser from '../../Components/GeneralSettings/RoleChooser';
import LanguageSettings from '../../Components/GeneralSettings/LanguageSettings';

//Pictures Imports
import Video2 from '../../assets/img/video-2.jpg';

//TextEditor Imports
import { CKEditor } from '@ckeditor/ckeditor5-react';
import classicEditor from '@ckeditor/ckeditor5-build-classic';

//Content Top Import
import GeneralContentTop from '../../Components/GeneralSettings/GeneralContentTop';

export default class GeneralSettingsAddBlog extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">
                <GeneralContentTop name={"Add Blog"} redSave path={"/generalsettings/blog"} />
                <div className="grid">
                    <div className="col-lg-9 col-md-12-col-sm-12 col-xs-12">
                        <form id="site-form" name="site-form" data-disable={false} noValidate={true}>
                            <div className="grid">
                                <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                    <Input title={"Article Title"} />
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                    <Input title={"Arcticle Adress"} />
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                    <Input title={"Arcticle Summary"} />
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                    <Input title={"Keywords"} />
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    <FileInput />
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
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
                        <div className="dark-text mb-10">Article Image Preview</div>
                        <img alt={"RunVid"} src={Video2} className="image-preview" />
                        <LanguageSettings />
                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
