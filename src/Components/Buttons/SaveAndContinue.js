import React, { Component } from 'react'

export default class SaveAndContinue extends Component {
    render() {
        return (
            <div className="settings-title-right">
                <button type="submit" className="btn btn-text-secondary btn-outline h-36 mr-10">Save</button>
                <button type="submit" className="btn btn-secondary h-36">Save And Continue</button>
            </div>
        )
    }
}
