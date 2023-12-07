import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import Banner from "./Banner";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchData = async () => {
    try {
      // const apiRequest = await fetch("https://thronesapi.com/api/v2/Characters");
      const apiRequest = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=4"
      );

      if (!apiRequest.ok) {
        throw new Error(apiRequest.statusText);
      }
      const apiData = await apiRequest.json();
      setCharacters(apiData);

      const catData = apiData.map((cat, index) => {
        return {
          catId: index,
          catImage: cat.url,
          catName: faker.person.firstName(),
          catPrice: faker.finance.amount(100, 500),
          catBreed: faker.animal.cat(),
        };
      });

      setCharacters(catData);
      console.log(catData);
    } catch (error) {
      setErrorMsg("No data found...");
    }
  };

  //
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Cats Challenge</h1>
      <Banner />
      {errorMsg && <h1>{errorMsg}</h1>}
      <div className="catImages">
        {characters.map((character, index) => {
          return (
            <div className="catCard" key={index}>
              <img
                src={character.catImage}
                width="350px"
                height="350px"
                alt="cats?"
              />
              <div className="catInfo">
              <p className="catName">{character.catName}</p>
              <p className="catPrice">£{character.catPrice}</p>
              <p className="catBreed">{character.catBreed}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
