import './App.css';
import banner from './bannerimg.jpeg';


const Banner = () => {
    return (
        <div className="image-container">
       <img src={banner} alt="bannerImage" width="1200px" height="300px"/>
       <div className="after">This is text overlay</div>
        </div>
    )
}

export default Banner;