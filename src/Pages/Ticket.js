import React, { Component } from 'react';

//Components Imports
import TicketSideItem from '../Components/Ticket/TicketSideItem';
import Search from '../Components/Search';
import AddBtn from '../Components/Buttons/AddBtn';
import TicketRightItem from '../Components/TicketRightItem';

const tickets = [
    {keyT: 1, name: 'Veysel Akbulut', code: '#152264', kind: 'talep', waiting: 'orta', date: '01/03/2021 15:00', nameCode: 153264, message: 'Paketler sayfasında hata var. Lütfen kontrol eder misiniz'},
    {keyT: 2, name: 'Veysel Akbulut', code: '#152264', kind: 'öneri', waiting: 'acil', date: '01/03/2021 15:00', nameCode: 153264, message: 'Paketler sayfasında hata var. Lütfen kontrol eder misiniz'}
];

export default class Ticket extends Component {
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

                <div className="grid">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="ticket-sidebar">
                            <div className="content-title">Ticket</div>
                            <Search ticket />
                            {tickets.map((res) =>
                            <TicketSideItem key={res.keyT} code={res.code} waiting={res.waiting} date={res.date} kind={res.kind} name={res.name} nameCode={res.nameCode} />
                            )}
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="content-message-top">
                            <AddBtn color={"white"} name = {"Add Ticket"} />
                        </div>
                        <TicketRightItem />
                    </div>
                </div>

            </div>

        </main>
        )
    }
}
