import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Icons Imports
import FeatherTrash from '../../assets/img/icons/feather-trash.svg';
import FeatherEdit from '../../assets/img/icons/feather-edit.svg';

export default class PromotionTr extends Component {
    render() {
        return (
            <tr>
                <td className={"br-0"} >
                    <div className="user-img-name">
                        <div className="user-number">%{this.props.discount}</div>
                        <div className="user-img-name-detail">
                            <div className="user-img-name-surname">{this.props.name}</div>
                            <span className="user-img-name-text dark-text">{this.props.number} Adet</span>
                        </div>
                    </div>
                </td>
                <td className={"bl-0-br-0"} >
                    <span className="red-text">{this.props.code}</span>
                </td>
                <td className={"w-50-bl-0"} >
                    <div className="action-buttons">
                        <Link to="#"  className="action-btn action-edit-btn">
                            <img alt={"RunVid"} src={FeatherEdit} />
                        </Link> 
                        <Link to="#"  className="action-btn action-delete-btn">
                            <img alt={"RunVid"} src={FeatherTrash} />
                        </Link> 
                    </div>
                </td>
            </tr>
        )
    }
}
