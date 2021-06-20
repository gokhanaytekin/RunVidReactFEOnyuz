import React, { Component } from 'react';

//Pagination Import
import Pagination from '../Components/Pagination';

//Content Top Import
import ContentTop from '../Container/ContentTop';

//Components Imports
import Accordion from '../Components/Accordion';

export default class Changelog extends Component {
    render() {
        return (
            <main className="content">
            <div className="welcome">
                <ContentTop add addBtnName = {"Add"} activeItem={"Changelog"} />
                <ul className="accordion" data-accordion="open">
                    <Accordion title = {"Yenilikler V51"} date = {"02.06.2021"} />
                    <Accordion title = {"Yenilikler V51"} date = {"02.06.2021"} />
                    <Accordion title = {"Yenilikler V51"} date = {"02.06.2021"} />
                    <Accordion title = {"Yenilikler V51"} date = {"02.06.2021"} />
                </ul>
                <Pagination />
            </div>
        </main>
        )
    }
}
