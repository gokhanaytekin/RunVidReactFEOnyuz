import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

class UploadedFiles extends Component {
    render() {
        const  {t} = this.props
        return (
            <div>
                <div id="drag-drop-area"></div>
                <div className="UppyDragDrop"></div>
                <div className="for-ProgressBar"></div>

                <div className="uploaded-files">
                    <h5>{t('uploadedFilesUploadedFiles')}:</h5>
                    <ol></ol>
                </div>
            </div>
        )
    }
}

export default withTranslation()(UploadedFiles);