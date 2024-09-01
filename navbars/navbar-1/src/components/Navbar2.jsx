import Logo from "../assets/images/logo.svg";
import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <>
      <header>
        <img
          className="logo margin__right-auto"
          src={Logo}
          alt="Logo de la aplicacion"
        />
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
        <a href="#" className="btn__primary margin__left-30">
          Contact
        </a>
      </header>
    </>
  );
};

export default Navbar2;
