import './App.css';
import logo from './logo.png';
const NavBar = () => {
    return(
        <div className="navBar">
        <div className="logo-image">
        <img src={logo} width="100px" alt="logo" />
        </div>
        <div className="menu-items">
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Shop</p>
        </div>
        </div>
    )
}

export default NavBar;