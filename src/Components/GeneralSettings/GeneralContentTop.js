import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class GeneralContentTop extends Component {
    render() {
        const  {t} = this.props
        return (
            <div className="content-top align-items-center">
                <div className="content-top-left">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="#" className="breadcrumb-item active">{this.props.name}</Link> 
                        </li>
                    </ul>
                </div>
                <div className="content-top-right">
                    { this.props.redSave ?  <Link to={this.props.path} data-fancybox data-src="#add-user" data-modal={true} data-auto-focus={false}  className="btn btn-primary h-32">
                        {t('save')}
                    </Link> : null }
                </div>
            </div>
        )
    }
}

export default withTranslation()(GeneralContentTop);