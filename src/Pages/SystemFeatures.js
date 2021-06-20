import React, { Component } from 'react';

//Content Top Import
import ContentTop from '../Container/ContentTop';

//Table Import
import Table from '../Components/Tables';

const features = [
    {key: 1, id: '50000', categoryN: 'System features', status: true},
    {key: 2, id: '50000', categoryN: 'System features', status: false},
];

export default class SystemFeatures extends Component {
    state = {
        modalShow: false,
        editHelpModal: false
    }
    modalVisible = (e) => {
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
            <main className="content">
                <div className="welcome">
                    <ContentTop filter add addBtnName = {"Add"} activeItem={"System Features"} />
                    <Table items={features} tableName={"SystemFeatures"}/>
                </div>
            </main>
        )
    }
}
