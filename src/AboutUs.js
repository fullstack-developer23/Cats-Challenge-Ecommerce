import cat from './cat2.png';
// import banner from './catbanner.jpg';

const AboutUs = () => {
    return (
        <div className="container">
            {/* <img src={banner} alt="banner" /> */}
            <div className='aboutusone'>
                <h1>About Us</h1>
                 <p>
                 Welcome to Cats4lyf where cat passion meets purrfection! 🐾 As devoted cat lovers, we've curated a collection of premium, stylish products to enhance your feline companion's well-being. From cozy beds to interactive toys, each item is chosen for quality and functionality. Our mission is simple: to be your go-to destination for all things cat-related. Join us in celebrating the magic of cats and creating a world where every feline is treated like royalty. Thank you for choosing Cats4lyf where the love for cats knows no bounds! 🎉
        </p>
        <p>Email us at : Stealingcatsandsellingthem@gmail.com </p>
         </div>

          <div className='aboutustwo'>
            <img src={cat} width="600px" />  
                
         </div>

        </div>
    )
}

export default AboutUs;