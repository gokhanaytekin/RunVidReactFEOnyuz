import React, { Component } from 'react';

//Icons Imports
import Calendar from '../../assets/img/icons/calendar-publish.svg';
import Clock from '../../assets/img/icons/clock.svg';
import Sell from '../../assets/img/icons/sell.svg';
import Free from '../../assets/img/icons/free.svg';
import RentBuy from '../../assets/img/icons/rent-buy.svg';
import Subs from '../../assets/img/icons/subscription.svg';
import SingleVideo from '../../assets/img/icons/single-video.svg';
import SeriesVideo from '../../assets/img/icons/series-video.svg';

export default class PublishSelectItem extends Component {
    state={
        icon: '',
        color: 'normal'
    }
    componentDidMount() {
        if(this.props.icon === "Calendar") {
            this.setState({
                icon: Calendar
            })
        }
        if(this.props.icon === "Clock") {
            this.setState({
                icon: Clock
            })
        }
        if(this.props.icon === "Sell") {
            this.setState({
                icon: Sell
            })
        }
        if(this.props.icon === "Free") {
            this.setState({
                icon: Free
            })
        }
        if(this.props.icon === "RentBuy") {
            this.setState({
                icon: RentBuy
            })
        }
        if(this.props.icon === "Subs") {
            this.setState({
                icon: Subs
            })
        }
        if(this.props.icon === "SingleVideo") {
            this.setState({
                icon: SingleVideo
            })
        }
        if(this.props.icon === "SeriesVideo") {
            this.setState({
                icon: SeriesVideo
            })
        }
    }
    render() {
        return (
            <div className="select-box-list-item">
                <input type="radio" className="input" id={this.props.id} name="input" required />
                <label htmlFor={this.props.id} className="label">
                        <img alt={"RunVid"} src={this.state.icon} width={this.props.width} height={this.props.height} viewBox="0 0 38.201 38.201" className={"mb-10y"}  />
                        <div className={"w-10"} ></div>
                        {this.props.name}
                        <span>{this.props.explanation}</span>
                    </label>
            </div>
        )
    }
}
