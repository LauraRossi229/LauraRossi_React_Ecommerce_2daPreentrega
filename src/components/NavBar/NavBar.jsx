import './NavBar.scss';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="header">
      <div className="header_container">
        <div className="header_logo_container">
          <img className="header_logo_img" src={logo} alt="logo" />
          <Link className="header_logo" to="/">
            <h2>PlanetPro Digital</h2>
          </Link>
        </div>
        <div className="header_nav">
          <NavLink to="/category/Oficios" className={({ isActive }) => isActive ? 'ActiveOption header_link' : 'Option header_link'}>Oficios</NavLink>
          <NavLink to="/category/Idiomas" className={({ isActive }) => isActive ? 'ActiveOption header_link' : 'Option header_link'}>Idiomas</NavLink>
          <NavLink to="/category/Tecnología" className={({ isActive }) => isActive ? 'ActiveOption header_link' : 'Option header_link'}>Tecnología</NavLink>
          <NavLink to="/category/Salud" className={({ isActive }) => isActive ? 'ActiveOption header_link' : 'Option header_link'}>Salud</NavLink>
        </div>
        <CartWidget/>
      </div>
    </nav>
  );
};

export default NavBar;