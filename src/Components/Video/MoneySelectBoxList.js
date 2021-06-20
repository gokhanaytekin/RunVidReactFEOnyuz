import React, { Component } from 'react';

//Icons Imports
import ENFlag from '../../assets/img/flag/en.svg';
import GRFlag from '../../assets/img/flag/gr.svg';

export default class MoneySelectBoxList extends Component {
    render() {
        return (
            <div className="select-box-list select-box-list-border currencies">
                <div className="select-box-list-item">
                    <input type="radio" className="input" id="input8" name="input" required />
                    <label htmlFor="input8" className="label">
                            <img alt={"RunVid"} src={ENFlag} className="mr-10" />
                            U.S Dollar $
                        </label>
                </div>
                <div className="select-box-list-item">
                    <input type="radio" className="input" id="input9" name="input" required />
                    <label htmlFor="input9" className="label">
                            <img alt={"RunVid"} src={GRFlag} className="mr-10" />
                            Euro €
                        </label>
                </div>
                <div className="select-box-list-item">
                    <input type="radio" className="input" id="input8" name="input" required />
                    <label htmlFor="input8" className="label">
                            <img alt={"RunVid"} src={ENFlag} className="mr-10" />
                            U.S Dollar $
                        </label>
                </div>
                <div className="select-box-list-item">
                    <input type="radio" className="input" id="input9" name="input" required />
                    <label htmlFor="input9" className="label">
                            <img alt={"RunVid"} src={GRFlag} className="mr-10" />
                            Euro €
                        </label>
                </div>
                <div className="select-box-list-item">
                    <input type="radio" className="input" id="input8" name="input" required />
                    <label htmlFor="input8" className="label">
                            <img alt={"RunVid"} src={ENFlag} className="mr-10" />
                            U.S Dollar $
                        </label>
                </div>
                <div className="select-box-list-item">
                    <input type="radio" className="input" id="input9" name="input" required />
                    <label htmlFor="input9" className="label">
                            <img alt={"RunVid"} src={GRFlag} className="mr-10" />
                            Euro €
                        </label>
                </div>
                <div className="select-box-list-item">
                    <input type="radio" className="input" id="input8" name="input" required />
                    <label htmlFor="input8" className="label">
                            <img alt={"RunVid"} src={ENFlag} className="mr-10" />
                            U.S Dollar $
                        </label>
                </div>
                <div className="select-box-list-item">
                    <input type="radio" className="input" id="input9" name="input" required />
                    <label htmlFor="input9" className="label">
                            <img alt={"RunVid"} src={GRFlag} className="mr-10" />
                            Euro €
                        </label>
                </div>
            </div>
        )
    }
}
