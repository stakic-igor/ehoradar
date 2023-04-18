import Nav from './Nav';
import HeaderSocialNetwork from './HeaderSocialNetwork';

const Header = () => {
    return (
        <header className='header container' id="top">
            <div className='logo'>EhoRadar</div>
            <Nav />
            <HeaderSocialNetwork />
        </header>
    );
};

export default Header;
