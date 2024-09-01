import Logo from "../assets/images/logo.svg";
import "./Navbar1.css";

const Navbar1 = () => {
  return (
    <>
      <header>
        <img className="logo" src={Logo} alt="Logo de la aplicacion" />
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <a href="#" className="btn__primary">
          Contact
        </a>
      </header>
    </>
  );
};

export default Navbar1;
