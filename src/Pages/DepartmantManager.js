import React, { Component } from 'react';

//Content Top Import
import ContentTop from '../Container/ContentTop';

import ManagerList from '../Components/ManagerListItem';

export default class DepartmantManager extends Component {
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
            <main className="content">
                <div className="welcome">
                    <ContentTop add filter addBtnName = {"Add Role"} activeItem={"Departmant Manager"} />
                    
                    <div className="manager-list">
                        <div className="grid">
                            <ManagerList />
                            <ManagerList />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
