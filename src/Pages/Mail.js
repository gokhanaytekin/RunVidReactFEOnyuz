import React, { Component } from 'react';

//Components Imports
import LeftMenu from '../Components/LeftMenus/MailLeftMenu';
import MessageDetailItem from '../Components/MessageDetailItem';
import MessageItem from '../Components/MessageItem';
import Search from '../Components/Search';

export default class Mail extends Component {
    render() {
        return (
            <main className="content d-flex p-0">
                <div className="content-mail">
                    <LeftMenu />
                    <div className="content-message">
                        <Search mail />
                        <MessageItem />
                        <MessageItem />
                        <MessageItem />
                        <MessageItem />
                        <MessageItem />
                        <MessageItem />
                        <MessageItem />
                    </div>
                    <div className="message-detail">
                        <MessageDetailItem />
                    </div>
                </div>
            </main>
        )
    }
}
