import Nav from './Nav';
import HeaderSocialNetwork from './HeaderSocialNetwork';

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>EhoRadar</div>
            <Nav />
            <HeaderSocialNetwork />
        </header>
    );
};

export default Header;
