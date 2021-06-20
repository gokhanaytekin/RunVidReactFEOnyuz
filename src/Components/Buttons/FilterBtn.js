import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { withTranslation } from 'react-i18next';

//FontAwesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

class FilterBtn extends Component {
    render() {
        const  {t} = this.props
        return (
            <div>
                <Link to="#"  className="filter-btn">
                    <FontAwesomeIcon color='black' icon={faFilter} /> {t('buttonsFilters')}
                </Link>
            </div>
        )
    }
}

export default withTranslation()(FilterBtn);