import React, { Component } from 'react';

//Icons Imports
import Avatar from '../assets/img/avatar.svg';
import Avatar2 from '../assets/img/avatar2.svg';

//Components Imports
import LeftMenu from '../Components/LeftMenus/MailLeftMenu';
import Search from '../Components/Search';
import MessageUserItem from '../Components/MessageUserItem';
import NewMessagePlant from '../Components/NewMessagePlant';

const messages = [
    { keyT: 1, name: 'Veysel Akbulut', message: 'dashboard', avatar: Avatar },
    { keyT: 2, name: 'Veysel Akbulut', message: 'dashboard', avatar: Avatar2 }
];

export default class MessageNew extends Component {
    render() {
        return (
            <main className="content d-flex p-0">
            <div className="content-mail">
                <LeftMenu />
                <div className="content-message">
                    <div className="content-message-title">
                        Contact List
                    </div>
                    <div className="messages-top-search-select mb-20">
                        <Search mail />
                        <div className="select-all-text">
                            <label>
                                <span>Select All</span>
                                <input type="checkbox" onClick={() => {}} className="green-select-box" />
                            </label>
                        </div>
                    </div>
                    <MessageUserItem users={messages} />
                </div>
                <NewMessagePlant />
            </div>
        </main>
        )
    }
}
