import React, { Component } from 'react';

//Table Import
import Table from '../../Components/Tables';

//Components Imports
import GeneralSettingsLeftMenu from '../../Components/LeftMenus/GeneralSettingsLeftMenu';
import AddBtn from '../../Components/Buttons/AddBtn';

const blogItems = [
    {keyT: 1, id: [
        {title: 'Are Online Seller Safe', keywords: ['Seller', 'Video', 'Upload']}
    ], author: [
        {name: 'Veysel Akbulut', date: '28.12.2020 22:46:08'}
    ], transtation: 30, postDate: '28.12.2020 22:46:08', status: true},
    {keyT: 2, id: [
        {title: 'Are Online Seller Safe'}
    ], author: [
        {name: 'Veysel Akbulut', date: '28.12.2020 22:46:08'}
    ], transtation: 25, postDate: '28.12.2020 22:46:08', status: false},
];

export default class GeneralSettingsBlog extends Component {
    render() {
        return (
            <main className="content">

            <div className="welcome">

                {/* <!-- profile --> */}
                <div className="grid">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <GeneralSettingsLeftMenu blogActive={true} />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="settings-title">
                            <div className="settings-title-left">
                                <span className="num">06</span>
                                <span className="title">Blog</span>
                            </div>
                            <AddBtn path={"/generalsettings/add/blog"} color={"white"} name = {"Add"} />
                        </div>
                        <Table items={blogItems} tableName={"GSBlog"}/>
                    </div>
                </div>
                {/* <!-- end #profile --> */}

            </div>

        </main>
        )
    }
}
