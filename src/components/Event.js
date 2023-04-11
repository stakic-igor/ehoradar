const Event = (props) => {
    return (
        <div className='event'>
            <img 
                src='/images/hero-1.jpg' 
                className='event__img'
                alt='event__pic'
            />
            <p className="event__venue">{props.venue}</p>
            <div className='event-date-time'>
                <div className='event-date text-center secondary-text'>
                    <p>{props.month}<br />{props.day}</p>
                </div>
                <div className='event-time'>
                    <p>{props.weekDay}<br />Početak: {props.start}</p>
                </div>
            </div>
            <p>Ulaz - {props.ticketPrice}{props.tickets && props.currency}</p>
            {
                props.tickets && <a href='www.google.com' className='event-tickets'>ulaznice</a>
            }
        </div>
    );
};

export default Event;
