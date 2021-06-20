import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Icons Imports
import calling from '../../assets/img/icons/calling.svg';
import GRFlag from '../../assets/img/flag/gr.svg';
import calendar from '../../assets/img/icons/calendar.svg';

export default class profileInput extends Component {
    state = {
        show: false,
        name: 'Veysel',
        lastName: 'Akbulut',
        email: 'ins.veyselakbulut@gmail.com',
        number: '956 562 34 55',
        birthday: '01/01/1980',
        timezone: 'Germany',
        language: 'Germany',

        newName: '',
        newLastName: '',
        newEmail: '',
        newNumber: '',
        newBirthday: '',
        newTimezone: '',
        newLanguage: '',
    }
    changeState = (e) => {

        if(e.target.id === "email") {
            this.setState({
                newEmail: e.target.value
            })
        }
        if(e.target.id === "submitEmail") {
            this.setState({
                email: this.state.newEmail
            })
        }

        if(e.target.id === "name") {
            this.setState({
                newName: e.target.value
            })
        }
        if(e.target.id === "submitName") {
            this.setState({
                name: this.state.newName
            })
        }
        
        if(e.target.id === "lastName") {
            this.setState({
                newLastName: e.target.value
            })
        }
        if(e.target.id === "submitLastName") {
            this.setState({
                lastName: this.state.newLastName
            })
        }

        if(e.target.id === "number") {
            this.setState({
                newNumber: e.target.value
            })
        }
        if(e.target.id === "submitNumber") {
            this.setState({
                number: this.state.newNumber
            })
        }

        if(e.target.id === "birthday") {
            this.setState({
                newBirthday: e.target.value
            })
        }
        if(e.target.id === "submitBirthday") {
            this.setState({
                birthday: this.state.newBirthday
            })
        }
        
    }
    render() {
        return (
            <div>
                {this.props.type === 'email' ? <div>
                    <div className="form-info-item">
                        <div className="form-info-left">
                            <span className="title">Email</span>
                            <span className="text">{this.state.email}</span>
                        </div>
                        <div className="form-info-right">
                            <Link to="#"  onClick={() => { this.setState({ show: !this.state.show }) }}>Edit</Link> 
                        </div> 
                    </div>
                    { this.state.show ? <div> <br /> <input id={"email"} onInput={(e) => this.changeState(e)} value={this.state.newEmail} /> <button id={"submitEmail"} onClick={(e) => this.changeState(e)}> Gönder </button> </div> : null }
                </div> : null }

                {this.props.type === 'name' ? <div>
                    <div className="form-info-item">
                        <div className="form-info-left">
                            <span className="title">Name</span>
                            <span className="text">{this.state.name}</span>
                        </div>
                        <div className="form-info-right">
                            <Link to="#" onClick={() => { this.setState({ show: !this.state.show }) }}>Edit</Link> 
                        </div> 
                    </div>
                    { this.state.show ? <div> <br /> <input id={"name"} onInput={(e) => this.changeState(e)} value={this.state.newName} /> <button id={"submitName"} onClick={(e) => this.changeState(e)}> Gönder </button> </div> : null }
                </div> : null }

                {this.props.type === 'lastName' ? <div>
                    <div className="form-info-item">
                        <div className="form-info-left">
                            <span className="title">Last Name</span>
                            <span className="text">{this.state.lastName}</span>
                        </div>
                        <div className="form-info-right">
                            <Link to="#"  onClick={() => { this.setState({ show: !this.state.show }) }}>Edit</Link> 
                        </div> 
                    </div>
                    { this.state.show ? <div> <br /> <input id={"lastName"} onInput={(e) => this.changeState(e)} value={this.state.newLastName} /> <button id={"submitLastName"} onClick={(e) => this.changeState(e)}> Gönder </button> </div> : null }
                </div> : null }

                {this.props.type === 'number' ? <div>
                <div className="form-info-item">
                    <div className="form-info-left">
                        <span className="title">
                            <img alt={"RunVid"} src={calling} className={"mr-10"} />
                            Phone Number
                        </span>
                        <span className="text">
                            <img alt={"RunVid"} src={GRFlag} className={"mr-10"} />
                            +4{this.state.number}
                        </span>
                    </div>
                    <div className="form-info-right">
                        <Link to="#"  onClick={() => { this.setState({ show: !this.state.show }) }}> Edit</Link> 
                    </div>
                </div>
                    { this.state.show ? <div> <br /> <input type={"number"} id={"number"} onInput={(e) => this.changeState(e)} value={this.state.newNumber} /> <button id={"submitNumber"} onClick={(e) => this.changeState(e)}> Gönder </button> </div> : null }
                </div> : null }

                {this.props.type === 'birthday' ? <div>
                <div className="form-info-item">
                    <div className="form-info-left">
                        <span className="title">
                            <img alt={"RunVid"} src={calendar} className={"mr-10"} />
                            Birthday
                        </span>
                        <span className="text">{this.state.birthday}</span>
                    </div>
                    <div className="form-info-right">
                        <Link to="#"  onClick = {() => { this.setState({ show: !this.state.show }) }}> Edit</Link> 
                    </div>
                </div>
                    { this.state.show ? <div> <br /> <input type={"date"} id={"birthday"} onInput={(e) => this.changeState(e)} value={this.state.newBirthday} /> <button id={"submitBirthday"} onClick={(e) => this.changeState(e)}> Gönder </button> </div> : null }
                </div> : null }

                {this.props.type === 'timezone' ? <div>
                <div className="form-info-item">
                    <div className="form-info-left">
                        <span className="title">Time Zone</span>
                        <span className="text">
                            <img alt={"RunVid"} src={GRFlag} className="mr-10" />
                            Germany
                        </span>
                    </div>
                    <div className="form-info-right">
                        <Link to="#" > Edit</Link> 
                    </div>
                </div>
                    {/* { this.state.show ? <div> <br /> <input type={"date"} id={"birthday"} onInput={(e) => this.changeState(e)} value={this.state.newBirthday} /> <button id={"submitBirthday"} onClick={(e) => this.changeState(e)}> Gönder </button> </div> : null } */}
                </div> : null }

                {this.props.type === 'language' ? <div>
                <div className="form-info-item">
                    <div className="form-info-left">
                        <span className="title">Language</span>
                        <span className="text">
                            <img alt={"RunVid"} src={GRFlag} className="mr-10" />
                            Germany
                        </span>
                    </div>
                    <div className="form-info-right">
                        <Link to="#" > Edit</Link> 
                    </div>
                </div>
                    {/* { this.state.show ? <div> <br /> <input type={"date"} id={"birthday"} onInput={(e) => this.changeState(e)} value={this.state.newBirthday} /> <button id={"submitBirthday"} onClick={(e) => this.changeState(e)}> Gönder </button> </div> : null } */}
                </div> : null }

            </div>
        )
    }
}
