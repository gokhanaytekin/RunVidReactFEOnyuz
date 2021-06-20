import React, { Component } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';
import Content from './Content';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <Content />
                <MobileMenu />
            </div>
        )
    }
}
