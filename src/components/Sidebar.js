import UpcomingEvents from './UpcomingEvents';
import BookUs from './BookUs';

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <UpcomingEvents />
            <BookUs />
        </aside>
    );
};

export default Sidebar;
