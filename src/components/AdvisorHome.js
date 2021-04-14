import React from 'react';

function AdvisorHome() {
    const style = {
        frameBorder: 0,
        scrolling: "no"
    };
    return (
        <div className='home-page'>
            <div className='calendar-monthly'>
                <h2>Calendar</h2>
                <iframe className='monthly' title='monthly'
                        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=c3dlbjQ0NGZha2VzdHVkZW50QGdtYWlsLmNvbQ&amp;color=%23039BE5&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showTitle=0&amp;mode=MONTH&amp;showNav=0&amp;showDate=0"
                        style={style}/>
            </div>
            <div className='calendar-agenda'>
                <h2>Agenda</h2>
                <iframe className='agenda' title='agenda'
                        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=c3dlbjQ0NGZha2VzdHVkZW50QGdtYWlsLmNvbQ&amp;color=%23039BE5&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showTitle=0&amp;mode=AGENDA&amp;showNav=0&amp;showDate=0"
                        style={style} />
            </div>
        </div>
    );
}

export default AdvisorHome;