import React, { Component } from 'react'

export default class VideosDetailBottom extends Component {
    render() {
        return (
            <div className="video-detail-bottom">
                <ul className="tabs">
                    <li className="tab-link current" data-tab="tab-1">General</li>
                    <li className="tab-link" data-tab="tab-2">Subtitles</li>
                    <li className="tab-link" data-tab="tab-3">Files</li>
                    <li className="tab-link" data-tab="tab-4">Swap Ids</li>
                    <li className="tab-link" data-tab="tab-5">Security</li>
                </ul>
            </div>
        )
    }
}
