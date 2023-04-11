import Event from './Event';

const UpcomingEvents = () => {
    return (
        <section className='events'>
            <h3 className='events__title'>Upcoming Events</h3>
            <Event 
                venue='QuePassa (Prijedor, BiH)'
                month='Mart'
                day='30'
                start='21:00'
                weekDay='Srijeda'
                tickets={false}
                ticketPrice='10.00'
                currency='KM'
             />
            <Event 
                venue='ShaFest 2023 (Prijedor, BiH)'
                month='Jul'
                day='30'
                start='20:00'
                weekDay='Subota'
                tickets={true}
                ticketPrice='10.00'
                currency='KM'
             />
            <Event 
                venue='KSET (Zagreb, HRV)'
                month='Jun'
                day='6'
                start='21:00'
                weekDay='Petak'
                tickets={false}
                ticketPrice='free'
                currency='e'
             />
        </section>
    );
};

export default UpcomingEvents;
