import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Icons Imports
import ENFlag from '../../assets/img/flag/en.svg';
import TRFlag from '../../assets/img/flag/tr.svg';
import GRFlag from '../../assets/img/flag/gr.svg';

export default class SubsPack extends Component {
    render() {
        return (
            <div>
                <div className="box-title-text between">
                    <div className="title">
                        Subscription pack settings
                    </div>
                    <div className="settings-title-right">
                        <Link to="#" data-fancybox data-src="#add" data-modal={true} data-auto-focus={false}  className="btn btn-text-secondary btn-outline h-36 mr-10">Add Pack</Link> 
                    </div>
                </div>
                <div className="subs-pack-settings">
                    <div className="subs-box">
                        <div className="subs-title">
                            <span>Standart</span>
                            <Link to="#"> 
                                <i data-feather="trash"></i>
                            </Link> 
                        </div>
                        <div className="subs-item">
                            <div className="subtitle">Pack Name</div>
                            <div className="title">Standart</div>
                        </div>
                        <div className="subs-item">
                            <div className="subtitle">Pack Time</div>
                            <div className="form-group">
                                <select name="a" className="form-control">
                                        <option value="">3 Aylık</option>
                                    </select>
                            </div>
                        </div>
                    </div>
                    <table className="subs-table">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={ENFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 $
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={GRFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 €
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={TRFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 ₺
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={ENFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 $
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={ENFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 $
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={GRFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 €
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={TRFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 ₺
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={ENFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 $
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={ENFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 $
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={GRFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 €
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={TRFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 ₺
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={ENFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 $
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={ENFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 $
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={GRFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 €
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={TRFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 ₺
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="sub-table-td">
                                        <div className="price">
                                            <div className="top">
                                                <img alt={"RunVid"} src={ENFlag} /> U.S Dollar
                                            </div>
                                            <div className="bottom">
                                                35,00 $
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
