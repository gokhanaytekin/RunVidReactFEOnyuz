import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

//Icon Import
import SearchI from '../assets/img/icons/search.svg';

class Search extends Component {
    render() {
        const  {t} = this.props
        return (
            <div>
                { this.props.mail ? <div id="messages-top-search" className="mb-20">
                    <input id="table-search" type="text" placeholder={t('search')} autoComplete="off" />
                    <div className="messages-top-search-icon">
                        <img alt={"RunVid"} src={SearchI} />
                    </div>
                </div> : null }

                 {this.props.ticket ? <div id="ticket-top-search" className="mb-10">
                    <input id="table-search" type="text" placeholder="Search by id ,name...." autoComplete="off" />
                    <div className="ticket-top-search-icon">
                        <img alt={"RunVid"} src={SearchI} />
                    </div>
                </div> : null }
            </div>
            
        )
    }
}

export default withTranslation()(Search);