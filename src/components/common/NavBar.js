import {Link} from 'react-router-dom';

import LogoSvg from './LogoSvg';

import './NavBar.scss';

const NavBar = () => {
    

    return (
        <div className="navbar">
            <Link to='/' className="link"><LogoSvg /></Link>
            <div className="links">
                <Link to='/planets' className="link">Planets</Link>
                <Link to='/films' className="link">Films</Link>
                <Link to='/people' className="link">People</Link>
                <Link to='/species' className="link">Species</Link>
                <Link to='/starships' className="link">Starships</Link>
                <Link to='/vehicles' className="link">Vehicles</Link>
            </div>
        </div>
    )
};

export default NavBar;