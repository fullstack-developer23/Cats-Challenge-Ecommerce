import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Footer from "./Footer";
import './App.css'

const App = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [characters, setCharacters] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({})
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setErrorMsg('')
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12');
        
        if(!response.ok){
          throw new Error(response.statusText)
        }

        const data = await response.json();
        setCharacters(data)
        setLoading(false)
      } catch (error) {
        setErrorMsg("Oops something went wrong...")
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  const handleClick = (character) => {
    setSelectedProduct(character);
    setShowModal(true);
  }

  if(errorMsg !== ''){
    return <h1>{errorMsg}</h1>
  }

  return (
    <div className="pageWrapper">
      {/* <h1>My API Database</h1>
      <code>API endpoint: "https://api.sampleapis.com/rickandmorty/characters"</code> */}

      {/* map through data from API that is stored in the state */}
      <TopBar />
      <NavBar />
      <Banner />
      <AboutUs />
      <div className="imageWrapper">
        {loading && (
          <h2>Loading...</h2>
        )}
        {characters.map((character, index) => {
          return (
            <div className="center">
              <img key={index} src={character.url} alt="Rick n Morty characters" onClick={() => handleClick(character)}/>
              <h4><b>{character.name}</b></h4>
              
            </div>
          )
        })}
      </div>
      
      {showModal && <Modal closeModal={setShowModal} product={selectedProduct}/>}
      <Footer />
    </div>
  );
}

export default App;