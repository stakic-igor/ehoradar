import Event from './Event';

const UpcomingEvents = () => {
    return (
        <section className='events'>
            <h3 className='events__title'>Upcoming Events</h3>
            <Event 
                tickets={true}
                ticketPrice='10.00'
             />
            <Event 
                tickets={true}
                ticketPrice='10.00'
             />
            <Event 
                tickets={false}
                ticketPrice='free'
             />
        </section>
    );
};

export default UpcomingEvents;
