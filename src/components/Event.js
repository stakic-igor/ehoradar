const Event = () => {
    return (
        <div className="event">
            <img 
                src='/images/hero-1.jpg' 
                className="event__img"
                alt="event__pic"
            />
            <p>Que Passa - svirka</p>
            <div className="event-date">
                <p>Mart<br />30</p>
            </div>
            <div className="event-time">
                <p>Srijeda<br />21:00 - 24:00</p>
            </div>
            <p>Ulaz - $20.00</p>
            <a href="www.google.com">ulaznice</a>
        </div>
    );
};

export default Event;
