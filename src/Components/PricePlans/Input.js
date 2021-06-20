import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
                <div className="form-group">
                    <label className="form-label">{this.props.title}</label>
                    <div className="input-group">
                        { this.props.icon ? <span className="input-group-text">
                                <img alt={"RunVid"} src={this.props.icon} />                                                     
                            </span> : null}
                            {this.props.dd ?
                                <select name="a" className="form-control">
                                    <option value="">Deneme</option>
                                </select>
                            : null }
                        {!this.props.dd ? <input type="tel" id="phone" placeholder={this.props.title} className="form-control" /> : null }
                    </div>
                </div>
        )
    }
}
