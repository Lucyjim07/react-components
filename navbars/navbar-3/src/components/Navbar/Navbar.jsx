/* eslint-disable react/prop-types */
import './Navbar.css';
import logo_light from '../../assets/logo-black.png';
import logo_dark from '../../assets/logo-white.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

const Navbar = ({ theme, setTheme }) => {
  const toggleMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className='navbar'>
      <img
        src={theme === 'light' ? logo_light : logo_dark}
        alt='Logo de la pagina'
        className='logo'
      />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className='search-box'>
        <input type='text' name='search' id='search' placeholder='Search' />
        <img
          src={theme === 'light' ? search_icon_light : search_icon_dark}
          alt='Ícono de una lupa'
        />
      </div>

      <img
        src={theme === 'light' ? toggle_light : toggle_dark}
        alt='Ícono de tema de la página'
        className='toggle-icon'
        onClick={toggleMode}
      />
    </div>
  );
};

export default Navbar;
