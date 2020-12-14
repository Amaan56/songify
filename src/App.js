import React, { useState } from 'react';
import './App.css';
import sampleData from './data';

const sampleDataKeys = Object.keys(sampleData);

function App() {
  const [selectedOption, setSelectedOption] = useState(sampleDataKeys[0]);

  const selectGenre = function (option) {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <nav>
        <h1>Songify</h1>
      </nav>
      <main>
        <section className="genres">
          {sampleDataKeys.map((option, i) => {
            return (
              <button
                className="genre-option"
                onClick={() => selectGenre(option)}
                key={i}
              >
                {option}
              </button>
            );
          })}
        </section>
        <section className="song-cards">
          {
            <section>
              {sampleData[selectedOption].map((genreDetails, i) => {
                return (
                  <section className="song-card" key={i}>
                    <img src={genreDetails.image} alt="Song name" />
                    <div className="song-description">
                      <h3>{genreDetails.songName}</h3>
                      <h6>{genreDetails.artistName}</h6>
                      <a href={genreDetails.songUrl} target="_blank">
                        Play
                      </a>
                    </div>
                  </section>
                );
              })}
            </section>
          }
        </section>
      </main>

      <footer>Made with ❤️ by Amaan</footer>
    </div>
  );
}

export default App;
