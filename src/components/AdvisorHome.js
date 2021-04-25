import React from 'react';
import {Spinner} from "reactstrap";

export default class AdvisorHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loadingC: true,
            loadingA: true
        }
    }

    hideSpinnerC() {
        this.setState({loadingC: false});
    }

    hideSpinnerA() {
        this.setState({loadingA: false});
    }

    render() {
        const style = {
            frameBorder: 0,
            scrolling: "no"
        };
        return (
            <div className='home-page'>
                <div className='calendar-monthly'>
                    <h2>Calendar</h2>
                    {this.state.loadingC && (
                        <Spinner className='loading' style={{ width: '3rem', height: '3rem' }} color='primary' />
                    )}
                    <iframe className='monthly' title='monthly'
                            src="https://calendar.google.com/calendar/embed?src=rittestadvisor%40gmail.com&ctz=America%2FNew_York;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showTitle=0&amp;mode=MONTH&amp;showNav=0&amp;showDate=0"
                            style={style}
                            onLoad={() => this.hideSpinnerC()}/>
                </div>
                <div className='calendar-agenda'>
                    <h2>Agenda</h2>
                    {this.state.loadingA && (
                        <Spinner className='loading' style={{ width: '3rem', height: '3rem' }} color='primary' />
                    )}
                    <iframe className='agenda' title='agenda'
                            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=rittestadvisor%40gmail.com&amp;color=%23039BE5&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showTitle=0&amp;mode=AGENDA&amp;showNav=0&amp;showDate=0"
                            style={style}
                            onLoad={() => this.hideSpinnerA()}/>
                </div>
            </div>
        );
    }
}