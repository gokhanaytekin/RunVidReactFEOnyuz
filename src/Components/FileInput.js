import React, { Component } from 'react';

//Icons Imports
import Fileinput from '../assets/img/icons/file-input.svg'

export default class FileInput extends Component {
    render() {
        return (
            <div className="form-group">
                <div className="file center">
                    <div className="file-text">
                        <img alt={"RunVid"} src={Fileinput} />
                        <span className={"marL-10"} >{this.props.explanation}</span>
                    </div>
                    <input type="file" multiple />
                </div>
                <div className="help-block with-errors"></div>
            </div>
        )
    }
}
