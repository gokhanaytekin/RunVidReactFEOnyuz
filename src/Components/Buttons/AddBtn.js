
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//FontAwesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class AddBtn extends Component {
    state = {
        modalShow: false
    }
    modalVisible = () => {
        if(this.state.modalShow) {
            this.setState({
                modalShow: false
            })
        }
        if(!this.state.modalShow) {
            this.setState({
                modalShow: true
            })
        }
    }
    render() {
        return (
            <div>
                <Link to={this.props.path} onClick={() => this.modalVisible()} data-fancybox data-src="#add-menu" data-modal= {true} data-auto-focus={false} className="add-btn">
                    <FontAwesomeIcon color={this.props.color} icon={faPlus} /> {this.props.name}
                </Link>
            </div>
        )
    }
}
