import React, { Component } from 'react'

export default class Alert extends Component {
    render() {
        return (
            <div className="danger-box">
                {this.props.dangerText}
            </div>
        )
    }
}
