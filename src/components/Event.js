const Event = (props) => {
    return (
        <div className='event'>
            <img 
                src='/images/hero-1.jpg' 
                className='event__img'
                alt='event__pic'
            />
            <div className='event-data'>
                <p>Que Passa - svirka</p>
                <div className='event-date-time'>
                    <div className='event-date text-center secondary-text'>
                        <p>Mart<br />30</p>
                    </div>
                    <div className='event-time'>
                        <p>Srijeda<br />21:00 - 24:00</p>
                    </div>
                </div>
                <p>Ulaz - {props.ticketPrice}</p>
                {
                    props.tickets && <a href='www.google.com' className='event-tickets'>ulaznice</a>
                }
            </div>
        </div>
    );
};

export default Event;
