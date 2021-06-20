import React, { Component } from 'react'

export default class UploadedFilesCount extends Component {
    render() {
        return (
            <div className="upload-number">
                <div className="text">Yüklenen Dosya Sayısı</div>
                <div className="number">15</div>
            </div>
        )
    }
}
