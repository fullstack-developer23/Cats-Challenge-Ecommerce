import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchData = async () => {

    try {
      // const apiRequest = await fetch("https://thronesapi.com/api/v2/Characters");
      const apiRequest = await fetch("https://api.thecatapi.com/v1/images/search?limit=4");

      if (!apiRequest.ok){
        throw new Error(apiRequest.statusText);
      }
      const apiData = await apiRequest.json();  
      setCharacters(apiData); 
    } catch (error) {
      setErrorMsg("No data found...")
    };
   
  };
    
  // 
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    
    <div className="App">
<h1>Cats Challenge</h1>
      {errorMsg && <h1>{errorMsg}</h1>}
      <div className="catImages">
      {characters.map((character, index) => {        
        return (
          <div key={index}>
            <img src={character.url} width="250px" height="250px" alt="cats?" />
          </div>
        )
      })}
    </div>
    </div>
  );
}

export default App;

