import React, { Component } from 'react';

//Components Imports
import VideosLeftFolderSidebar from '../../Components/LeftMenus/VideosLeftFolderSidebar';
import UploadedFiles from '../../Components/UploadedFiles';
import UploadedFilesCount from '../../Components/UploadedFilesCount';
import ContentTop from '../../Container/ContentTop';
import DangerBox from '../../Components/DangerBox';

export default class VideosUpload extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                <div className="grid">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <VideosLeftFolderSidebar />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <ContentTop greenSave search activeItem={"Upload"} />
                        <div className="grid">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <UploadedFiles />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <UploadedFilesCount />
                                <DangerBox dangerText={"Dikkat lütfen dosya yüklemesi bitmeden çıkış yapmayınız"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}
