import React, { Component } from 'react';

//Content Top Left Import
import ContentTop from '../Container/ContentTop';

//Table Import
import Table from '../Components/Tables';

import TRFlag from '../assets/img/flag/tr.svg';
import ENFlag from '../assets/img/flag/en.svg';

const languages = [
    {keyT: 1, id: 50000, code: 'TR', countryFlag: TRFlag, countryName: 'Turkey', status: true},
    {keyT: 2, id: 50001, code: 'EN', countryFlag: ENFlag, countryName: 'English', status: false}
];

export default class Language extends Component {
    state = {
        modalShow: false,
        status: false,
        code: '',
        name: ''
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
    submit = () => {
        languages.push(
            {id: (languages[languages.length - 1].id + 1), code: this.state.code, countryFlag: TRFlag, countryName: this.state.name, status: this.state.status}
        )
        this.forceUpdate();
    }
    render() {
        return (
            <main className="content">
                <div className="welcome">
                    <ContentTop filter add addBtnName = {"Add"} activeItem={"Language"}
                        submit={ <button onClick={() => this.submit()} className="btn btn-secondary pl-50 pr-50 h-42">Continue</button> }
                        pasive={ <div> <input onClick={ () => { this.setState({ status: false }); console.log(this.state.status) } } type="radio" className="input" id="input1" name="input" required /> <label htmlFor="input1" className="label">Passive</label> </div> }
                        active={ <div> <input onClick={ () => { this.setState({ status: true }); console.log(this.state.status) } } type="radio" className="input" id="input2" name="input" required /> <label htmlFor="input2" className="label">Active</label> </div> } 
                        code={ <input value={this.state.code} onInput={(e) => { this.setState({ code: e.target.value }) }} type="text" placeholder="Language Code" className="form-control" name="menuname" required="" /> }
                        name={ <input value={this.state.name} onInput={(e) => { this.setState({ name: e.target.value }) }} type="text" placeholder="Language Name" className="form-control" name="menuname" required="" /> }
                    />
                    <Table items={languages} tableName={"Language"}/>
                </div>
            </main>
        )
    }
}
