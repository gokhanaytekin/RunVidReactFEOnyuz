import React, { Component } from 'react'

export default class MessageUserItem extends Component {
    render() {
        return (
            <div>
                {this.props.users.map((res) =>
                <label key={res.keyT} className="messages-item messages-item-contact">
                    <div className="message-user-img">
                        <img alt={"RunVid"} src={res.avatar} className="img-37" />
                    </div>
                    <div className="message-detail">
                        <div className="user-name" >{res.name}</div>
                        <div className="message-text">{res.message}</div>
                    </div>
                    <input type="checkbox" name="contact-user" value="1" className="green-select-box" />
                </label>
                )}
            </div>
        )
    }
}
