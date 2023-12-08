import './App.css';
import logo from "./logo.png";
const Footer = () => {
    return(
        <div className='footer-container'>

        <div className='column1'>
        <img src={logo} width="100px" alt='logofooter' />
        <h3> Cats For Life </h3>
        </div>

        <div className='column2'>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        </div>

        <div className='column3'>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        </div>

        </div>
    )
}

export default Footer;